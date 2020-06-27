---
title: "Developer Tools: The Code Editor"
date: 2019-02-27T14:06:26.916Z
cover_image: https://thepracticaldev.s3.amazonaws.com/i/silz8vz45z3yllzp5jdt.png
---
Welcome back, friends!

Today, we are going to be looking at the code editor. This is a Software Engineer's bread and butter. It's how you take the ideas in your head and get them into a computer. 

There are tons of options and everyone has an opinion on which is the best. The Emacs vs Vim debate will rage until the end of time. At the end of the day, however, you have to make a decision about whatever works the best for you. For me, it is a mix between Vim and VSCode.


That being said, there are a few things that all good text editors will have. (I know there are some people out there that will disagree, but whatever :P)

> *Note:* Not every editor is on every OS, so definitely check out the previous article in this series!

## Themes & Syntax Highlighting

![](https://dankneon.com/vscode/assets/vscode.png)

Most modern editors (and many older ones) have the ability to change the colors of the things you are looking at. Many have UI and syntax themes, which change the colors of the editor itself and the color of the code, respectively. The colors you use are definitely a personal preference. There are light themes and dark themes, natural colors and neon. When choosing a theme, remember that this is something you have to be looking at for multiple hours a day - you want something easy to read and that makes it easy to work in the language that you primarily write.

(*Side note:* if you are looking for a new theme, check out [Dank Neon](https://dankneon.com/). We are working hard on it and its open source!)

## Extensibility

Odds are, not everything in your editor is going to be exactly what you want it to be - a good editor will have options for letting you change default settings. Many have extensible preferences, plugin architectures, and some, like Vim, even have their own programming language.

## A healthy community

Some people may enjoy working with an editor that they built themselves or that is very obscure, but for most of us, that time is better spent learning and developing new skills. Having a good community makes troubleshooting any problems you have much easier. It also is a great way to get involved in the community and give back - once you know an answer, you can help someone the next time that comes up!

# An editor of your very own

Now that we have covered some of the basic features of editors, let's talk about getting started with your editor. First things first, find one you like. I'll be putting a list of editors and plugins at the end of this post. If you don't already have an editor you like, scroll on down and compare some of the options! For the sake of explanation, I am going to use VS Code to walk through the rest of these steps. Almost every editor will have a way of doing the things outlined. If you aren't using VS Code, you should be able to just Google the topic in the header plus the editor name (i.e "installing shell commands atom"). Let's go!

## Installing Shell Commands

Once you have VS code installed, run it! Right off the bat, you should have a good amount of tools and services available to you, but we want to make this editor our own! The first thing to do will be to install the shell commands - this lets you run `code ~/SomeFolder/SomeFile.js` to open the file in VS code. To do this, switch to the VS code window and hit `(cmd/ctrl)+shift+P`. This will bring up the command palette, a place that lets you run various commands and editor related functions. Type `shell` and select *"Install 'code' command in Path"*. Now close out of VS Code and switch to a folder that has a file you can edit. Type `code <file_name>`, where `<file_name>` is the name of the file you want to edit. If VS Code popped up with that file, you did it!

## Installing a theme

Now that we have the shell commands set up, let's install a theme. Head on over to [VSCodeThemes](https://vscodethemes.com/) and browse for a bit. I am going to install [Dank Neon](https://dankneon.com/vscode) (it has support for a bunch of different editors!). Back in VS Code, hit `(cmd/ctrl)+shift+X` to open up the extensions sidebar panel. Once that is open, search for the package you want to install.

<center>![install button](https://thepracticaldev.s3.amazonaws.com/i/xtqtpx2d9lj5dspj5j9y.png)</center>

Once you find the theme, click the green install button. The theme should automatically change to your new one! If it doesn't, bring up the Command Palette and type `Color Scheme` and select *"Preferences: Color Theme"*, then select the theme you want to use. 

## Install language/tool packages

Most editors come with basic support for most languages, but often you will want some more packages for your language. Bring up the extensions sidebar panel again and search for the language you use the most, like `ruby`, `javascript`, and more. For tools, you can find things like `eslint` and `rubocop` pretty easily. Look through some of the packages and find ones that look good to you! Typically you are looking for things that have the functionality you want and have a good number of installations. Check the list below for some lists of good packages. You can also Google stuff like "set up vscode for javascript" to find good packages and tutorials.

# Advanced studies

Once you have started getting comfortable with your editor, I'd highly recommend building a package. A theme is a great place to start, but building plugins is a great way to share your workflows and improve your understanding of the inner workings of your editor.

# Links and More

## Editors

[VS Code](https://code.visualstudio.com/)

[Atom](https://atom.io/)

[Notepad++](https://notepad-plus-plus.org)

[Sublime Text](https://www.sublimetext.com/)

[Brackets](http://brackets.io/)

## Extensions and more
Note: Awesome lists are a great place to find resources for all sorts of things! When in doubt, Google "awesome list < thing >".

[Awesome VS Code](https://github.com/viatsko/awesome-vscode)

[Awesome Atom](https://github.com/mehcode/awesome-atom)

[Notepad++ Plugins](https://www.guidingtech.com/31357/notepad-plus-plugins/)

[Awesome Brackets](https://github.com/viatsko/awesome-brackets)

**Edit: More links from the community!**

{% devcomment 94ge %}

{% devcomment 94oh %}

{% devcomment 94ol %}