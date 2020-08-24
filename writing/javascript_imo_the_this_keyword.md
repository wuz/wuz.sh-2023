---
title: "[Javascript, IMO] The `this` keyword"
stage: 0
---
# Oh, jeez - `this` is going to get confusing

(See what I did there?)

We're talking about the `this` keyword, and it's going to be very confusing. To keep the terms straight, when talking about the keyword I will be using `this`, in the monospaced, `code` style. Any other time, the word will just be used like normal. Hopefully, this will help us keep `this` straight. Alright, everyone good? Let's jump on in!

## What is `this`?

The `this` keyword is one of the most difficult parts of Javascript. It allows you to access the to the current context. Outside of a function, `this` refers to the global scope. Inside a function, the `this` keyword can refer to many different things. By default, a global function will have a `this` keyword equal to the window function. By default in strict mode, the `this` keyword will be undefined when called a global function.

```js
console.log(this === window); // true

// strict mode
console.log(this === undefined); // true

```

Also by default, a functions this binding is that of the scope above it.
```js
function f1() {
    return this;
}

console.log(f1() === window); // true

function f1() {
    'use strict';
    return this;
}

console.log(f1() === undefined); // true
```

So now we know what `this` is by default. 

## How does "this" change?

There are many functions that can change the binding of `this` in Javascript. Using the `.call`, `.apply` and `.bind` methods on a function, you can change the `this` of a function to almost anything.

## When to use "this"?
