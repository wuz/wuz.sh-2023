---
title: "Setting up a `npx username` card!"
date: 2018-12-26T21:47:08.009Z

---
I recently saw this awesome post from [bnb](https://dev.to/bnb) on Twitter:

{% twitter 1075473070368919552 %}

The community response has been awesome and I quickly knew I wanted to make my own:

{% twitter 1075789700898664450 %}

Today, I wanted to show everyone the process of making one.

First, let's clone the repo:

```
git clone https://github.com/bnb/bitandbang
```

Now, we need to edit some stuff. First, let's open up the `package.json` and update some of the details. First, change the package name:

```
name: <your username>
```

This will let you publish to npm and get your card with `npx <your_username>`.

You can also update the description and author fields to reflect your information.

If we run `npm run dev`, we'll see that Tierney's information shows up. Let's make it your card.

Open up `build.js`:

```js
'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Tierney Cyren'),
  handle: chalk.white('bitandbang'),
  work: chalk.white('Senior Cloud Developer Advocate at Microsoft'),
  opensource: chalk.white('Node.js Community Committee ') + chalk.green('⬢'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('bitandbang'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~bnb'),
  github: chalk.gray('https://github.com/') + chalk.green('bnb'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('bitandbang'),
  web: chalk.cyan('https://bnb.im'),
  npx: chalk.red('npx') + ' ' + chalk.white('bitandbang'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               opensourcing + newline + newline + // data.labelOpenSource + data.opensource
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
```

Play around with the `data` const and add your information. For me it would look like this:

```js
const data = {
  name: chalk.white('Conlin Durbin'),
  handle: chalk.greenBright.bold('wuz'),
  work: chalk.white('Frontend software engineer at Lessonly'),
  twitter: chalk.redBright('https://twitter.com/CallMeWuz'),
  github: chalk.redBright('https://github.com/wuz'),
  linkedin: chalk.redBright('https://linkedin.com/in/wuz'),
  web: chalk.redBright('https://wuz.fyi'),
  npx: chalk.white('npx wuz'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}
```

You can play with the colors as much as you like - check out the [chalk](https://npmjs.org/package/chalk) package for more options.

Once you are done, run `npm run dev` again. If everything looks good, we are ready to publish to NPM.

If you don't have an NPM account, [go make one!](https://npmjs.org) Once you have you account set up, run `npm login` and follow the prompt to login to your account. Once that is done, go ahead and run an `npm publish`. Make sure your have changed the package name. 

If everything is set up right, you should see a success message! Try running `npx <your_username>`. 

Once you get it done, take a screenshot and send it to me here or [on Twitter](https://twitter.com/CallMeWuz) - I'd love to see it!