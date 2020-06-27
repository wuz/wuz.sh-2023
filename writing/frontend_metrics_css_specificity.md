---
title: "Frontend Metrics: CSS Specificity"
date: 2019-01-28T22:50:36.524Z
cover_image: https://thepracticaldev.s3.amazonaws.com/i/bipxwy3ljekxfuzncfd3.png
---
I've been working a lot on discovering and tracking useful Frontend metrics and I wanted to share some of the things I've learned. This will probably be an ad-hoc, at-random series on all things Frontend Metrics as I learn more about them!

# What the heck is CSS Specificity?

[Emma] put together an overview of what CSS specificity is and has done a much better job than I ever could!

{% devto "emmawedekind/css-specificity-1kca" %}

For a quick recap, CSS specificity involves the "cascading" part of Cascading Style Sheets. The specificity of a CSS selector decides which style should be given to an element. Good specificity should keep you from needing many `!important`s.

It's a great thing to know about when writing CSS and it is an even better thing to track over time! For my day job, we've been working to gather some frontend metrics so we can see how our work is impacting the application. One thing we are tracking is what the CSS specificity looks like across the whole file in something called a specificity graph.

# What does a good specificity graph look like?

![A CSS specificity chart](https://thepracticaldev.s3.amazonaws.com/i/cw4sfz5gg38sr2ptjelv.png)

A good specificity graph has a few noticable attributes. Firstly, it's plotted with the specificity of the selector along the `y` axis and the position of the selector in the CSS file along the `x` axis. Ideally, your specificity should hockey stick - for most of the file, it should remain steady and any major specificity spikes should be confined towards the end.

# How do you graph your CSS specificity?

I've got the metrics I am working on set up in my companies [Metabase](https://metabase.com), but I build a small tool to see your specificity graph. The code isn't super hard to understand. Try it out, then check out the `getCSSStats.js` file. It uses [cssstats](https://npmjs.com/package/cssstats) under the hood to get the stats for a chunk of CSS.

{% glitch mud-leather app %}

By monitoring the changes in the graph as you make changes to your CSS, you can ensure you are on the right track. It's not a hard-and-fast rule - lots of times you need certain specificity - and it's easy to break when using `scss` or `less` imports. When used as a quick health check however, a good specificity graph can be very useful!

Read more about specificity graphs [here](https://csswizardry.com/2014/10/the-specificity-graph/)

Have a great week, devs! What kind of metrics do you track? What do you think about CSS specificity graphs?
