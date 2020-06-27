---
title: "Developer Tools: The Command Line"
date: 2019-02-28T22:17:08.943Z
cover_image: https://thepracticaldev.s3.amazonaws.com/i/u5akcyhn5v1cp0mbh3nv.png
---
If you are interested in reading a bit more about all this terminology, [this StackOverflow answer](https://stackoverflow.com/a/21016640/1466592) is really good.

# Some basic commands 

- `cd <directory>` - change to `<directory>` - Example: `cd ~/Projects`
- `ls <directory>` - list the files in `<directory>` - Example: `ls ~/Projects`
- `cp <file> <location>` - copy the `<file>` to `<location>` - Example: `cp ~/Projects/test.txt ~/textfile.txt`

If you want to learn more, I'd recommend checking [this tutorial](https://swcarpentry.github.io/shell-novice/) out.

# Giving your shell superpowers

Once you have a shell, you'll want to upgrade it to fit your workflow! 

## Looking good!

First, let start by making a good-looking prompt. In most shells, this is done by changing the PS1 enviroment variable. To start make a file in your home folder (you can get there by opening a terminal and typeing `cd ~`). Let's create a file called `.bash_prompt`. If you have VS Code installed, just run `code .bash_prompt`.

Once that file opens up, put this at the top:

```bash
#!/usr/bin/env bash

# Shell prompt
## Based on wuz/.files (github.com/wuz/.files)

bold="\[\e[1m\]"
reset="\[\e[0m\]"
black="\[\e[30m\]"
blue="\[\e[34m\]"
green="\[\e[32m\]"
cyan="\[\e[36m\]"
red="\[\e[31m\]"
yellow="\[\e[33m\]"
purple="\[\e[35m\]"
brown="\[\e[33m\]"
gray="\[\e[37m\]"
dark_gray="\[\e[90m\]"
light_blue="\[\e[94m\]"
light_green="\[\e[92m\]"
light_cyan="\[\e[96m\]"
light_red="\[\e[91m\]"
light_purple="\[\e[95m\]"
light_yellow="\[\e[93m\]"
white="\[\e[97m\]"

```

This gives us a bunch of colors to work with. Just for the record, those colors are described in [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code).

Now that we have some colors set up, let's make a new prompt. Add this directly below what you have set up there.

```bash

# ^ rest of file ^

dir_chomp() {
  if [ $PWD == $HOME ]; then
    echo "~";
  else
    local ns="${PWD//_/ }"
    local nh="${ns/#$HOME/\~}";
    local wd="${nh%/*}";
    local wdnhrd=`echo $wd | sed -e "s;\(/.\)[^/]*;\1;g"`
    echo "$wdnhrd/${ns##*/}";
  fi
}

# Set the terminal title and prompt.
PS1="${bold}${light_green}\$(dir_chomp)${white}";
PS1+="${blue}${bold}\n→ ${reset}"
export PS1;
```

Here we are creating a function called dir_chomp, which takes a directory like `~/Projects/Work/app` and converts it into `~/P/W/app`. If you don't like that, replace this line: `PS1="${bold}${light_green}$(dir_chomp)${white}";` with `PS1="${bold}${light_green}\w${white}";`. That will show the full directory path. We are also setting some colors, using the variables we defined above. With those variables, they will make all characters after them that color until they reach a `${reset}` or another color variable.

Now that we have that in there, you can type `source ~/.bash_prompt` and you should be able to see your new prompt! Try navigating around with `cd` and see the directory change above the `→` character. If you like it, run `code .bashrc` and add this to the end of the file:

```bash
# end of ~/.bashrc

source ~/.bash_prompt
```

Now it should stick to your editor.

## Aliases

If you use the command line a lot, you end up running the same couple commands over and over again. Sometimes it can help to shorten those commands and this is where aliases come in. You can add these directly to your `~/.bashrc` file. They look like this:

```bash
alias short='longer command --here'
```

Here are some examples from my aliases (feel free to steal them!):

```bash
alias d='docker'
alias di='docker images'
alias da='docker ps -a'
alias drma='docker rm -f $(docker ps -q)'

alias ip="dig +short myip.opendns.com @resolver1.opendns.com"
alias ipl="hostname -I | cut -d' ' -f1"
alias ips="ifconfig -a | grep -o 'inet6\? \(addr:\)\?\s\?\(\(\([0-9]\+\.\)\{3\}[0-9]\+\)\|[a-fA-F0-9:]\+\)' | awk '{ sub(/inet6? (addr:)? ?/, \"\"); print }'"

alias c="code ."

alias be="bundle exec"
```

Now you're looking good and your more productive to boot! There are lots of customizations you can do to customize your command prompt! I have some git status tools in mine. For more information, check out the [Awesome Bash](https://github.com/awesome-lists/awesome-bash) list or try googling "awesome zsh" or "awesome fish shell" for the other lists for other shells! 

Happy hacking!
