---
title: "Supercharge your Touchbar with MTMR"
draft: true
---
If you're like me, you've probably been pretty *meh* on the Touchbar on the newer Macs. The base config is *ok* and the dynamic layers can be useful, but most of the time are just repetitions of controls from the window you are already on.

Recently though, I discovered [MTMR (My Touchbar, My Rules)](https://github.com/toxblh/mtmr), an open-source project making the Touchbar extremely customizable and easy to edit.

## What is it?

MTMR lets you override your Touchbar using a JSON file to add custom buttons, dynamic information, and special widgets (like a dock!).

## How to install

It's easy to install and get started with! 
If you're using brew and cask, it's as easy as running:

`brew cask install mtmr`

If you're not using brew, check out this medium post for instructions:

{% medium "@urdigitalpulse/customise-your-macbook-pro-touch-bar-966998e606b5" %}

## Adding Widgets

Once you have in intalled, it's time to start adding to your config. There are _tons_ of options related to this, but I'll list out a few of my favorites below. Check out the [MTMR-presets](https://github.com/Toxblh/MTMR-presets) repo for more examples!

Open up `~/Library/Application\ Support/MTMR/items.json` and we can start adding widgets!

> *Note:* A few of these widgets use a binary called "__type", which let's you type characters through the Mac's accessiblity features. You can download the binary from my Sourcehut [here](https://git.sr.ht/~wuz/.files/tree/master/bin/__type), then just make sure you have 

### Kaomoji toolbar (☞ﾟヮﾟ)☞

I like to be able to type fun Kaomoji quickly, but a whole app for that seemed like overkill. Instead, I keep a group of Kaomoji buttons that type themselves out when you hit the button.

![Kaomoji toolbar screenshot](https://dev-to-uploads.s3.amazonaws.com/i/kz8v9npgho6cb7ttiapg.png)

```json
{
    "type": "group",
    "align": "left",
    "bordered": true,
    "title": "♥(ˆ⌣ˆԅ)",
    "items": [
      { "type": "close", "bordered": false, "align": "left" },
      {
        "type": "staticButton",
        "title": "(☞ﾟヮﾟ)☞",
        "align": "left",
        "action": "appleScript",
        "actionAppleScript": {
          "inline": "set meme to \"(☞ﾟヮﾟ)☞\"\rdo shell script \"'LOCATION_OF __type' \" & quoted form of meme"
        }
      },
      {
        "type": "staticButton",
        "title": "♥(ˆ⌣ˆԅ)",
        "align": "left",
        "action": "appleScript",
        "actionAppleScript": {
          "inline": "set meme to \"♥(ˆ⌣ˆԅ)\"\rdo shell script \"'LOCATION_OF __type' \" & quoted form of meme"
        }
      },
      {
        "type": "staticButton",
        "title": "(⌐■_■)",
        "align": "left",
        "action": "appleScript",
        "actionAppleScript": {
          "inline": "set meme to \"(•_•)  |  ( •_•)>⌐■-■  |  (⌐■_■)\"\rdo shell script \"'LOCATION_OF __type' \" & quoted form of meme"
        }
      }
    ]
  },
```

Be sure to replace `LOCATION_OF __type` with the file location of the binary in the note above!
