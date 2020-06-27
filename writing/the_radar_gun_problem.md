---
title: "The Radar Gun Problem"
date: 2019-07-10T00:00:00.000Z
cover_image: https://i.imgur.com/FnVk79i.png
---
The other day, I was driving home from an event and there was a massive slowdown on the highway. I assumed that there was a crash or some construction up ahead, but as I got closer to the bottleneck, I realized that the only difference was that there was a cop standing on the side of the highway with a radar gun. Just the presence of a monitor slowed down the performance of the system.

Later that week, I was debugging some Javascript code and ran into a problem I have hit a few times. I had a fairly intensive process looping over a lot of values. I took the standard approach to debug a JS problem and dropped in a `console.log`. I refreshed the page, opened the console... and almost crashed my browser.

Calling a `console.log` with an intensive process takes a lot of memory, it turns out. I've run into this before, but this time the traffic slowdown really made me think about it. Let's talk a bit about something I'm calling the RadarGun Problem.

In many situations, the fix for the problem is changing where the observation happens. Moving the `console.log` outside of the loop - either after or before -is a good option. You can also change the method of observation - drop in a`debugger;` and step through it, introducing a purposeful bottleneck to prevent an accidental one.

Have you run into this before? How have you solved it?