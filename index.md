---
layout: default
title: Home
prose: false
---
# Tweetto Burrito
{: .font-sans-3xl}

Generate “call-to-tweet” links for your email newsletters and websites to make it super-simple for your audience to shout you out on Twitter.
{: .font-sans-lg}

{% include text-area.html label="What do you want them to tweet about?" label-style="font-sans-md text-bold margin-bottom-1" id="text" hint="For example, Hey followers! Check this out…" textarea-style="height-10 radius-md border-base-light" %}

{% include text-input.html label="Do you want to include a website link?" label-style="font-sans-md text-bold margin-bottom-1" id="url" type="url" hint="Enter a full URL, like https://www.google.com/" input-style="radius-md border-base-light margin-top-2" %}

{% include text-input.html label="Any hashtags you want to include?" label-style="font-sans-md text-bold margin-bottom-1" id="hashtags" type="text" hint="Separate with commas and leave out the hashtag symbol: meat, cheese" input-style="radius-md border-base-light margin-top-2" %}

<a href="#heres-your-link" class="usa-button" id="getlink">Get link <i class="bi bi-link-45deg"></i></a>

## Here's your link

Just hit the Copy to clipboard button below.

Find this useful? We have options!

- [Shout me out on Twitter](https://twitter.com/intent/tweet?text=Thanks%20%40pglevy%20for%20this%20cool%20%22tweet%20to%22%20link%20generator.%20Check%20it%20out%20here%3A&url=https%3A%2F%2Fcodepen.io%2Fpglevy%2Ffull%2FbGoRVRa&hashtags=)
- [Buy me a matcha green tea](https://www.buymeacoffee.com/pglevy)

<label for="thelink" class="usa-label font-sans-md text-bold margin-bottom-1">Tweetto Burrito Link</label>
<input class="usa-input" type="text" id="thelink" name="thelink">

<button type="button" class="usa-button" id="clipboard" data-clipboard-target="#thelink">Copy to clipboard <i class="bi bi-clipboard"></i></button>

You can also <a id="preview" href="" target="_blank">preview your link</a> or <a href="#form" class="btn btn-outline-primary" id="editlink">make changes</a>.