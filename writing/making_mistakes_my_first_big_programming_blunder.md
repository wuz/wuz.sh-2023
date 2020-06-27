---
title: "Making mistakes: My first big programming blunder"
date: 2019-01-09T16:30:04.949Z
cover_image: https://thepracticaldev.s3.amazonaws.com/i/bfq46b1zko7slkc7muu6.jpg
---
I started programming in a somewhat non-traditional way. My mom is a librarian in my home town, so in high school I started working there as a student page. I was pretty good with computers and thought I knew a lot more than I did. So when I heard that the library was design and building a new website, I thought maybe I could help out! I was already working in the computer lab at the library (from which I have many takeaways and perhaps a future post), so learning and working on the new website was a natural next step. I offered my help and my boss graciously said yes.

I started in right away. The site was being built on Wordpress, using a pre-existing theme as a starting point. We had lots of custom HTML and plugins working together to support much of the functionality of the site. Suffice to say, the "architecture" looked something like this:

![a game of jenga](https://ae01.alicdn.com/kf/HTB19sGjjrYI8KJjy0Faq6zAiVXak.jpg)

I had been working on the site for about a month when the inevitable happened. I made a change to a plugin and the site *did not* like it. Something crashed and I quickly realized the difference between knowing enough to break something and knowing enough to fix it. 

I'd broken everything.

![not the actual error](https://thepracticaldev.s3.amazonaws.com/i/hocnrsaeaxtatgp0ofwu.png)
<figcaption>Not an actual Wordpress error</figcaption>

I started thinking through my next steps. We hadn't used version control - I don't think anyone working on the site even knew what that was. We were uploading through FTP to the server for the "beta" site. There was no way to recover an old version or to even revert the change I made. I disabled plugins, deleted code, and tried everything I could think of to get back to a working state. Nothing seemed to work.

After a brief bit of panic, I knew that this was ultimately my responsibility. I decided to go to my boss with a new plan:

1. Explain what had happened
2. Hope I didn't get fired/removed from the website project
3. Promise to build a new site

Luckily my boss was awesome - she understood that this was a great learning opportunity for me. She allowed me to keep working on the project and so I started over from scratch. I learned from my mistakes. Instead of starting the project with an existing theme, I began reading about creating Wordpress themes. I stopped relying as much on plugins for functionality. Through this job, I gained a lot of knowledge about programming and ultimately ended up where I am today - working as a full-time software engineer.

I still make mistakes (though usually they are less destructive). The library still uses the site I built. And I have a great story to share with new developers.

*So remember:*
New devs - you are going to make mistakes. Work hard to reconcile them.

Employers/managers/seniors - Mistakes are _going_ to happen. You can either respond by getting angry and firing people or you can turn a mistake into a teachable moment and a point of ownership and pride for a new engineer on your team.

What was your biggest mistake in programming? How did you respond? What happened?