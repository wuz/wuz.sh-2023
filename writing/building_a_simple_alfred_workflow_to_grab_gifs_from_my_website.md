---
title: "Building a simple Alfred workflow to grab gifs from my website"
date: 2019-01-15T03:50:00.991Z
cover_image: https://thepracticaldev.s3.amazonaws.com/i/d0gq1cwl3uvduvn1l6kr.png
---
I save a lot of gifs. 

![](https://thepracticaldev.s3.amazonaws.com/i/wyzsfhh30j2e9ujvh1cw.png)
<figcaption>I've got 169 as of this article</figcaption>

I used to store them in Dropbox and share them with a link, but Dropbox has changed the way they handle Public folders and links, so it was a hassle to drop a gif in. Plus, I'm trying to migrate my stuff away from big services in 2019 (more coming this in a future post!) With this in mind, a week or two ago I setup a nice little [Alfred workflow](https://www.alfredapp.com) for to grab the links to my gifs and share them.  

![](https://wuz.fyi/gifs/typing.gif)
<figcaption>Actual footage of me searching and sharing gifs (not actual footage)</figcaption>

First things first, I had to set up my gif hosting. I use [NearlyFreeSpeech](https://nearlyfreespeech.net) to host [my personal site](https://wuz.fyi). I store the gifs in a folder in there and sync them back and forth using [rsync](https://www.samba.org/rsync/). Basically all you need for this step is a publicly hosted base url for your gifs - i.e. https://wuz.fyi/gifs for my site.

![](https://wuz.fyi/gifs/awesome.gif)

Now that you have that, let's set up a new alfred workflow. Open up your Alfred preferences and head over to the **Workflows** tab:

![Alfred workflows tab](https://thepracticaldev.s3.amazonaws.com/i/dpjblvxcvgyl5jqcoi4v.png)

Click the little plus in the bottom of the sidebar and click **Blank Workflow**:

![Little plus button](https://thepracticaldev.s3.amazonaws.com/i/9wwb6vr6hqnfx4t7fyan.png)

Give your workflow a name, description, and any other info you want to give it.

![Adding the name and description](https://thepracticaldev.s3.amazonaws.com/i/xbad4jjr5i4t1te7tnem.png)

Once that is done, right click in the black area to add a workflow object and select **Inputs** > **File Filter**. Give your filter a keyword, some placeholder text. Then drag and drop the types of files you want to search into the **File Types** section. For me that is gifs, pngs, and jpegs:

![](https://thepracticaldev.s3.amazonaws.com/i/o0heinupqdcsf4jj5fkz.png)

Now, click on over to the Search Scope tab and drag and drop your gif folder:

![](https://thepracticaldev.s3.amazonaws.com/i/6ejkizjv9lkvyvvadp0z.png)

Save that and let's move on! Right click again and select **Actions** > **Run Script**. Once that opens, change "with input as argv" to "with input as {query}" and paste this code:

```bash
urlencode() {
    # urlencode <string>
    old_lc_collate=$LC_COLLATE
    LC_COLLATE=C
    
    local length="${#1}"
    for (( i = 0; i < length; i++ )); do
        local c="${1:i:1}"
        case $c in
            [a-zA-Z0-9.~_-]) printf "$c" ;;
            *) printf '%%%02X' "'$c" ;;
        esac
    done
    
    LC_COLLATE=$old_lc_collate
}
URL="https://wuz.fyi/gifs/"

echo -ne "${URL}$(urlencode "$(basename {query})")" | pbcopy
```

Be sure to check every checkbox at the bottom, besides "Backslashes". You'll also want to set `URL` to wherever you are hosting your gifs.

![](https://thepracticaldev.s3.amazonaws.com/i/6lchmjp2uggf79umgbrp.png)

If this is all right, you should be able to open up Alfred, type your keyword followed by a gif title (i.e. `gifit awesome.gif`) and hit enter. Your clipboard should have the gif you want! Try pasting and make sure it all works!

![high fives](https://wuz.fyi/gifs/infinite%20high%20five.gif)

Way to go! I hope you get as much enjoyment and usage out of this as I have!

![](https://wuz.fyi/gifs/thats-our-show.gif)

Help me spend too much money on hosting! What is your favorite gif? Share below!