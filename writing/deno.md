---
date: 2019-04-12T23:10:14.789Z
title: Getting started with Deno
description: A new runtime for Javascript and Typescript from the founder of Node
cover_image: https://i.giphy.com/media/l6O086UCmNZcc/giphy.gif
stage: 2
---

> **Edit:** Deno has hit 1.0 and with it, there has been some major discussion around whether the project needs an explicit CoC. The original maintainer seems to think it doesn't and I can't recommend that you use Deno until they do.
> **A Code of Conduct is a necessary part of any open source project.**

![People in dino suits dancing](https://media.giphy.com/media/3rgXBvnbXtxwaWmhr2/giphy.gif) {style="--aspect-ratio:16/9"}

In case you missed it, the new Javascript and Typescript runtime from Ryan Dahl,
the creator of Node, [has been released](https://deno.land/)! It's got some
really cool features and is ready for public use! Let's look at a few of the
neat features and get started with a simple hello world!

## What is Deno?

Deno is a new runtime for Typescript (and Javascript) written mostly in Rust. It
has some [great goals](https://deno.land/manual.html#goals) and some very
interesting "Non-Goals", like not using `npm` and not having a package.json.

## Getting it installed

Installing deno is as easy as running this command:

`curl -fsSL https://deno.land/x/install/install.sh | sh`

Then copy the `export` line and add it to your `~/bashrc` or `~/bash_profile`.

Open a new terminal and run `deno`. You should get a `>` prompt. Type `exit` and
let's dig into some features!

## Cool features in Deno

### Typescript by default

Deno is integrated to run Typescript files by default. It basically makes types
in Javascript a first-class citizen. No more compiling through Babel to use
Typescript in server-side Javascript.

### Importing from a URL

Deno lets you import from the web, just like you can in the browser. Just add a
URL where you would usually name a module:

```ts
import { bgBlue, red, bold } from "https://deno.land/std/colors/mod.ts";
```

### A Standard Library

Furthermore, Deno has a standard library that is easy to import and use. There
are modules that do a couple of different things, like HTTP handling, datetime
work, and file system work. You can check it out
[here](https://github.com/denoland/deno_std).

### Uses ES modules

Finally, Deno only supports ES module syntax, which means no more `require()`
statements, just good ole' `import x from "y"`.

## Hello World Example

Let's look at a quick Hello World that highlights a few of those features!

Copy this into a `hello-world.ts` file.

```ts
import { bgBlue, red, bold } from "https://deno.land/std/colors/mod.ts";

const sayHello = (name: string = "world") => {
  console.log(bgBlue(red(bold(`Hello ${name}!`))));
};

sayHello();

sayHello("Conlin");
```

You can now run that with `deno hello-world.ts` and it should print out some
stuff.

Change one of the `sayHello` calls to `sayHello(15);` and rerun it. You should
see a type error since 15 isn't a string! That's pretty cool!

You'll also notice how to import from a URL - it's getting some console color
stuff from the standard library!

# Final thoughts

Deno isn't quite ready for the production use - there are a couple
[bugs](https://deno.land/benchmarks.html#req-per-sec), but development is moving
forward quickly! This is definitely a cool new open source project and one to
keep an eye on!
