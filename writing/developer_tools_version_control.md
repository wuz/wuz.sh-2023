---
title: "Developer Tools: Version Control"
date: 2019-03-01T22:04:53.096Z
cover_image: https://thepracticaldev.s3.amazonaws.com/i/vxot2vy2lxhmh2o8z0ve.png
---
Alright folks. Welcome back!

Let's talk version control.

# What is version control?

Have you ever been working on a site/app/piece of code and made changes, only to realize you need to go back to an earlier version? Or maybe you have had the altogether nightmarish experience of working with another developer, while not using version control. The one where you have to send a message that says "hey, I am working on user/login.php, don't edit it for a while." If you have, you know why version control exists. In it's most basic form, version control software helps you track the changes to a set of files and directories. You pass it some special commands and it works it's magic to store the difference between the last time you ran those commands and this time.

There are a few options when it comes to version control, and every software shop is a little different. The most common is probably `git`, but there is also `svn`, `csv`, and `hg`. I'm sure there are others too. Add on top of this the centralized version control software hosts like Github and Bitbucket and you start to get a wide landscape of possible setups. This article is going to focus on `git` and Github, because that is probably what _most_ people reading will be using. There are other tutorials for other version control systems.

# Getting started with `git`

Let's just jump right in. There are a few major concepts in `git` that we will want to cover.

## Repositories (repo)

Repositories are the base unit in a `git` system. They hold all the code, changes, branches, commits, and everything else. When you create a git repo, you are telling git that the folder you are in is one that you want to track the changes for. Most repos will use a `master` branch, which contains the "canonical" code - meaning the most-up-to-date working version of the code. Typically you don't want to commit broken code to master. That is what other branches are for.

You can create a git repo locally by running `git init` in a directory on your computer.

## Branches

A branch one section of a forking tree of changes tracked by `git`. They are used to prevent major conflicts when multiple developers are using adding code. There are lots of strategies for naming branches. At my work, we tend to use a structure that looks like this: `username/branch-function`. So if I were going to add a new loading screen to the codebase, I might name my branch `wuz/new-loader`. Once I have that branch, I would start committing new code to it.

To create a new branch, you can run `git checkout -b <branch_name>`, where `<branch_name>` is the name of the branch you want to create. Once you have a branch made, you can switch between branches using `git checkout <branch_name>` (No `-b` this time). So I could get back to master by using `git checkout master`.

## Commits

Commits are units of work in the `git` world. They track the individual differences between two changes in the code. The first files you add will be your first commit - every thing after that will be a change on top of that first commit. If I want to add a new loader, I might add a new file called `Loader.js`, add some code, and commit it to my branch. I can then decided to keep adding new code (with more commits). Once I have it working and looking right, I might merge it into master.

Adding a new commit involves adding the files you want to commit and then telling git to commit those files. For example, I could run `git add Loader.js` to add just the `Loader.js` file changes or `git add -A` to add all new changes on a branch. From there, I would call `git commit`. This will pop up a window for adding a commit message. This is a good place to leave some notes about what these changes do, which you can then view in the log by running `git log`. This is a great way to see what changes have happened, especially when you are working with multiple developers.

## Merging

Now that we have some changes we can merge back into master! Once I commit my changes onto my `wuz/new-loader` branch, I can merge that branch into master. Merges tell git that you want to take all the changes from one branch and merge them into another. 

Merging a branch is pretty simple - just switch to the branch you want to merge from and run `git merge <other_branch>`, where `<other_branch>` is the branch that your changes live on. In this case, I might want to merge `wuz/new-loader` into `master`. That means I would switch to master - `git checkout master` - then merge - `git merge wuz/new-loader`. That will take all of my changes and add them as a new commit on master. This new commit is called a merge commit.

What if we don't want to merge everything into master in one commit - maybe so we can keep our log looking nice or so that we can pick out commits later to rework? That is where a rebase comes in.

## Rebasing

Rebasing is like splicing some film into another section of film (if you don't know what film is, I don't know how to help you 😛). When you rebase a branch onto another branch, you are rewinding the replaying your changes on the other branch. Rebasing is a bit more complicated, so this is a good time to call out to a great git resource - [git-scm](https://git-scm.com). You can read more about how rebasing works [here](https://git-scm.com/book/en/v2/Git-Branching-Rebasing). If you need to do other things in git, that is a great place to look them up!

## Hosted Repositories

Now, we don't want to store all of this code and changes on our local machine. First of all, it would make it hard for a lot of developers to work on it. They would have to send their changes to your machine. Instead we can host our repository on a website. In this case, we are going to talk about Github. There are lots of other options, but Github is probably the most popular.

## Pushing

With a hosted repository, there are some cool ways to work with branches and merges. Instead of merging master on your local machine, you can use their tools to do it! So lets say I have just finished the `wuz/new-loader` branch. I can now push it up to the hosted repo, also called the remote. To do this, I can just run `git push wuz/new-loader`. This might fail, because we haven't told the remote that it should have this branch. Instead we need to say `git push -u origin wuz/new-loader`. That will create a new remote branch (the specific remote in the case is named origin, which is just git standard) and push our code to it. You can also push master changes, but there is a better way to get your changes into the remote master. Pull Requests.

## Pull Requests

A pull request is a request to add code to a specific branch in a hosted repository. Once I have the `wuz/new-loader` branch pushed to the remote, I can go online, in this case to Github, and create a new pull request. Once I do that, I get a comparison of the changes I made to the branch I am asking to merge into. If all the changes look good, I can approve the pull request and merge the branch. That will cause Github to run a merge from the changes into master. Now you can go back to your machine, switch to the master branch and do a `git pull`, which will get any changes from the remote.

# Gotta go fast

Just like with shell commands, git provides a way to add aliases, which make interacting with it a lot better! You can take things like `git checkout <branch>` and shorten them to `git co <branch>` or add robust, good-looking logging to your branch. You add these to your `~/.gitconfig` file. If you followed the last two articles and have VS code set up and some aliases you can run `c ~/.gitconfig` to edit this file! Here are some of my favorite aliases:

```git
[alias]
  A = add -A # Easily add all file changes | git A
  cam = commit -am # add all files and commit with the message | git cam 'Adding all files'
  ca = commit -a # Add all files and open the commit message window | git ca
  cm = commit -m # Commit all added files with the message | git cm 'Adding files'
  ci = commit # Shorter `git commit`
  co = checkout # checkout a branch
  st = status # get the status of current file changes
  br = branch -v # list all branches
  g = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative # pretty oneline log
  sl = stash list --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative # pretty oneline stash list
  h = !git --no-pager log origin/master..HEAD --abbrev-commit --pretty=oneline #pretty oneline graph of what is different from origin/master
  who = shortlog -n -s --no-merges # who has committed to this project
  new = checkout -b

```


Thanks for reading! Let me know your favorite `git` aliases in the comments! Want more like this? I [tweet](https://twitter.com/CallMeWuz) all my posts!