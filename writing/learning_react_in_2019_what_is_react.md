---
title: "Learning React in 2019: What is React?"
date: 2019-05-29T00:00:00.000Z
cover_image: https://i.imgur.com/jV60xsB.png
---
## The important parts of React

Likely, you have heard a lot about different features in React - the virtual DOM, components, state, hooks, and more all make up the different tools in your toolbox. Which of these are important when you are just starting out? Where should you focus?

### Javascript

The best thing you can do to help improve your React skills is to work on your Javascript ones. React is built in Javascript and a good understanding of classes and functions will get you very far!

### The Virtual DOM

The Virtual DOM is one of the ways in which React is so fast. Instead of doing complex operations like swapping `div` and re-rendering lists on the [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM), React uses a virtual representation of the DOM. If you think about the DOM as an object, it could have nodes like this:

```
{
    node: 'html',
    children: [
        { node: 'head', ...headElements }
        { node: 'body', ...bodyElements }
    ]
}
```

That object is an example of the Virtual DOM. It's much faster to swap out an element in an array than it is to swap out an `<li>` rendered in the DOM. If you are doing lots of DOM updates, then React can batch them and god _much_ faster.

After to work on your JS skills a bit, I'd highly recommend checking out a tutorial on building your own basic Virtual DOM (like [this one](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060)). You'll get a much better idea of what you are working with, which helps a lot when learning.

### State Management

Finally, another major piece of React is state management. A great way to think about React is as a framework for presenting slices of state as a view. A component in that case is just the rendered view for a specific state. Think about this: if you have a list of items in an array stored in state, let's call it `numbers`, the rendered list of `li`'s is a slice of that state, at that particular time. If you add something to the array, the `li`'s update and you get a new slice of state.

Learning to manage your state in a React app is a great way to build performant web apps. We'll cover more on that in a later article!

* * *

It's not hard to level up quickly in React. A base understanding of the way React apps work and what React is can go a long way in helping you build great, performant front-ends. Next time, we'll cover more about JSX and how it works.

Thanks for reading!