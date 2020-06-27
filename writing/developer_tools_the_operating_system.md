---
title: "Developer Tools: The Operating System"
date: 2019-02-26T13:38:55.357Z
cover_image: https://thepracticaldev.s3.amazonaws.com/i/ufe31pdbd9wq2psethkt.png
---
> This is part of a 7 part series about developer tools. If you didn't haven't read the other parts, check them out above!

Operating systems are a collection of software used to manage the hardware and software components of a computer. They provide common resources that the software running on that computer can use.

There are many types of operating systems out there, but there are many common ones you might know. 

# Common OS Choices

Quick note from Rhymes on my last post:

{% devcomment 9330 %}

## Linux

Many people have a love/hate relationship with Linux. There are hundreds of different distro's out there, each with its own ideas about what a Linux operating system should do and how it should work. I won't cover any specific repo's here, but that will be in the next article!

### Pros
1. Very customizable
2. Great tool support
3. Lightweight, can run on most hardware

### Cons
1. Configuration can take forever
2. You can spend forever fixing small problems that you caused
3. You are the support squad

## MacOS

MacOS is the operating system that runs on Apple computers. 

### Pros
1. Specifically designed for the hardware it is running on.
2. Great tool support / supports most Linux tools
3. Great support from Apple

### Cons
1. Pricey hardware! Planned obsolescence.
2. Some services built for Linux only _half_ run
3. If you don't like the looks, there isn't much you can do

## Windows

Windows is a controversial choice for developer software unless you are working on Windows servers running languages like C#. Lately, with the acquisition of Github and the introduction of the Windows Subsystem for Linux, the future looks bright for Windows.

### Pros
1. Runs on _tons_ of hardware
2. Microsoft is doubling down on developers lately!
3. Can run a lot of software now with Windows Subsystem for Linux

### Cons
1. Buying a license can be costly
2. Legacy of having bad tool support
3. Requires special software to run basic tools

# How do I choose

Now that we have covered some of the common operating systems, let's discuss somethings to think about when choosing which OS to use.

## Extensibility

When considering a good OS, one thing you will want to look at is extensibility. Developers use so many tools over the course of their career and while cross-platform tools are becoming more and more common, you want to make sure you can set up your dev environment the way you want it to be set up. Some good baselines are the ability to use a package manager (which now exists on most OS's), access to a command line, and some basic, editable system level preferences.

## Ease Of Use

Alongside extensibility, a good operating system should balance ease-of-use. It can be hard to reach a good middle ground between the two, but unless you really like fiddling with tool settings and installs, you probably want an OS that makes those things pretty easy. I personally love working on my Archlinux box - everything is exactly how I configured it and there isn't anything on it that I didn't add. However, when something goes wrong, it can take me a long time to fix it. If the shit hits the fan, you want to make sure your tools are there to back you up.

## Hardware

Finally, hardware is a big concern when thinking about what OS to choose. Most Linux distros can probably be installed on most machines, but if you want to run MacOS on a non-Apple computer, you are gonna have a bad time. Windows will probably run most places, but the licenses can be expensive! Consider the form factor and use-cases you have for your dev machine too. A friend of mine carries a big gaming Windows Laptop to work every day - he runs multiple VM's and drives to work, so it makes sense for him. I, however, walked to work many days and work from coffee shops often, so I needed something easy to carry and use in many places. While these considerations aren't part of the operating system, the OS you use is most likely going to be dictated in some way by the hardware it is running on.

# Whatever you choose, make it yours

At the end of the day, your choice of dev environment is highly personal and comes down to a lot of different factors. Find something you are going to be happy working with day in and day out, and you will have made a good choice. Don't listen to people who espouse a "one true OS". Spend some time trying different OSs. 

Check back in tomorrow where we will dig into the code editor!

What OS do you use? What do you like about it? What don't you like?