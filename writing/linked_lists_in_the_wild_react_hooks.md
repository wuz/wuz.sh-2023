---
title: "Linked lists in the wild: React Hooks"
date: 2018-12-17T22:03:09.441Z
cover_image: https://thepracticaldev.s3.amazonaws.com/i/rcglra25frobt2r6yipz.jpg
---
I was digging into some of the code for React hooks the other day, right after reading Ali's great post on linked lists:

{% devto "aspittel/thank-u-next-an-introduction-to-linked-lists-4pph" %}

As I was diving in, I noticed that hooks are actually using linked lists under the hood. It's always cool to run across an implementation or use case of a data structure, so I thought I would share how and why they are being used, as far as I can tell.

## The implementation

There is a comment in the hooks implementation that reads:

```js
// Hooks are stored as a linked list on the fiber's memoizedState field. The
// current hook list is the list that belongs to the current fiber. The
// work-in-progress hook list is a new list that will be added to the
// work-in-progress fiber.
```

If you don't know what a fiber is, don't worry. They are basically a code representation of a unit of work in React. From the original [Fiber github](https://github.com/acdlite/react-fiber-architecture#what-is-a-fiber):

> - pause work and come back to it later.
> - assign priority to different types of work.
> - reuse previously completed work.
> - abort work if it's no longer needed.

Therefore, hooks are stored in a fiber's state. A fiber has a linked list of its current hooks. When something updates in React, the fiber creates a new work-in-progress hook list and appends it to the list.

Here is the implementation of Hooks from [the React src](https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberHooks.js#L264) (comments are from the code itself):

```js
function createWorkInProgressHook(): Hook {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      currentHook = firstCurrentHook;
      if (currentHook === null) {
        // This is a newly mounted hook
        workInProgressHook = createHook();
      } else {
        // Clone the current hook.
        workInProgressHook = cloneHook(currentHook);
      }
      firstWorkInProgressHook = workInProgressHook;
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      currentHook = firstCurrentHook;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false;
      let hook;
      if (currentHook === null) {
        // This is a newly mounted hook
        hook = createHook();
      } else {
        currentHook = currentHook.next;
        if (currentHook === null) {
          // This is a newly mounted hook
          hook = createHook();
        } else {
          // Clone the current hook.
          hook = cloneHook(currentHook);
        }
      }
      // Append to the end of the list
      workInProgressHook = workInProgressHook.next = hook;
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
      currentHook = currentHook !== null ? currentHook.next : null;
    }
  }
  return workInProgressHook;
}
```

Let's dive in to this just a little bit:

```js
if (workInProgressHook === null) {
```

is checking to see if we have a current hook that is being used. `workInProgressHook` a global variable and is used like this:

```js
workInProgressHook = createWorkInProgressHook();
```

So, if `workInProgressHook` is null, what do we want to do?

A null workInProgressHook means we aren't currently building a hook. That means we want to work with the _current_ hook, not build the next hook in the list. There are two times we might want to do this - when we are building a new list and making the first element and on a re-render, when we are reloading an existing list. The next `if` statement shows us this (and the comments are even nice enough to tell us!): 

```js
// This is the first hook in the list
if (firstWorkInProgressHook === null) {
  isReRender = false;
  currentHook = firstCurrentHook;
  if (currentHook === null) {
    // This is a newly mounted hook
     workInProgressHook = createHook();
  } else {
    // Clone the current hook.
    workInProgressHook = cloneHook(currentHook);
  }
  firstWorkInProgressHook = workInProgressHook;
} else {
  // There's already a work-in-progress. Reuse it.
  isReRender = true;
  currentHook = firstCurrentHook;
  workInProgressHook = firstWorkInProgressHook;
}
```

If we don't have a `firstWorkInProgressHook`, we need to start building the linked list - which has yet another if statement. But, if we do have one, that means we are already creating a work-in-progress and the first current hook can just be copied!

The next if statement down:

```js
if (currentHook === null) {
  // This is a newly mounted hook
   workInProgressHook = createHook();
} else {
  // Clone the current hook.
  workInProgressHook = cloneHook(currentHook);
}
```

Now we want to check if we have a current hook. If we don't we are creating a completely new list, which means we call `createHook`.

> `createHook` just returns a object with a bunch of null set properties. The one we will be interested in the `next` property.

Otherwise, this is a list that we have already rendered once. React saves some performance by just cloning the hook and moving on, that way it doesn't have to re-create a hook every time this function is called.

So now we have our first hook! We set our `firstWorkInProgressHook` to the new one we just made!

```js 
firstWorkInProgressHook = workInProgressHook;
```

Now, what happens when we call `createWorkInProgressHook` again?

```js
function createWorkInProgressHook(): Hook {
  if (workInProgressHook === null) {
    // ...
  } else {
    // what happens here?
  }
  return workInProgressHook;
}
```

Let's look!

Now that `workInProgressHook` isn't null, we need to check if it has a next hook -
```js
if (workInProgressHook.next === null) {
```

If there isn't one, we should create a new hook and append it to the list, which is exactly what happens:

```js
isReRender = false;
let hook;
if (currentHook === null) {
  // This is a newly mounted hook
  hook = createHook();
} else {
  currentHook = currentHook.next;
  if (currentHook === null) {
    // This is a newly mounted hook
    hook = createHook();
  } else {
    // Clone the current hook.
    hook = cloneHook(currentHook);
  }
}
// Append to the end of the list
workInProgressHook = workInProgressHook.next = hook;
```

So, again we check if there is a current hook to clone (this time checking to see if the next hook exists, since that let's us know if this hook has been created before). If there is, we clone it, if not we create a new one.

Then we call this magic line:

```js
workInProgressHook = workInProgressHook.next = hook;
```
Which takes our newly created hook, sets it to the next hook for the current one and then sets the current one equal to the new one. This is basically equivalent to this:

```js
workInProgressHook.next = hook;
workInProgressHook = hook;
```

Finally, if we do already have a work-in-progress hook, we are rerender, and want to do much the same thing we did the first time:

```js
} else {
  // There's already a work-in-progress. Reuse it.
  isReRender = true;
  workInProgressHook = workInProgressHook.next;
  currentHook = currentHook !== null ? currentHook.next : null;
}
```

The only difference here is we need to update the currentHook to be the next hook before moving one, which is done with that ternary on the last line.


We've created a linked list using some global variables and a a function! That's pretty cool!

This honestly might be the first time I've seen a linked list used in actual code! Hopefully, this post made sense! Please let me know if there are any questions!
