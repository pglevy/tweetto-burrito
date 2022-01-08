---
layout: default
title: Home
prose: false
body-style: bg-accent-cool-lighter
---
{% capture form %}

# [TWEETO BURRITO](https://pglevy.github.io/tweetto-burrito/){: .text-primary-vivid .text-no-underline}
{: .desktop:font-sans-3xl .margin-bottom-0 .border-bottom-2px .border-primary-lighter .line-height-sans-3}

![Tweetto the Burrito](assets/img/tweetto.svg){: .float-right .width-10 .tablet:width-card}

Generate “call-to-tweet” links for your email newsletters and websites to make it super-simple for your audience to shout you out on Twitter — [like this](https://twitter.com/intent/tweet?text=Thanks%20%40pglevy%20for%20this%20cool%20%E2%80%9Ccall-to-tweet-action%E2%80%9D%20link%20generator.%20Check%20it%20out%20here%3A%20&url=https%3A%2F%2Fpglevy.github.io%2Ftweetto-burrito%2F&hashtags=)!
{: .font-sans-lg .margin-top-0}

{% include text-area.html 
label="What do you want them to tweet about?" 
id="text" 
hint="For example, Hey followers! Check this out…" %}

{% include text-input.html 
label="Do you want to include a website link?" 
id="url" 
type="url" 
hint="Enter a full URL, like https://www.google.com/" %}

{% include text-input.html 
label="Any hashtags you want to include?" 
id="hashtags" 
type="text" 
hint="Separate with commas and leave out the hashtag symbol: meat, cheese" %}

<a href="#thats-a-wrap" class="usa-button usa-button--big bg-primary-vivid hover:bg-secondary-vivid radius-pill" id="getlink">Generate link <i class="bi bi-link-45deg"></i></a>
{% endcapture %}

{% capture link %}
## That's a wrap!

Just hit the Copy to clipboard button below.

Find this useful? You have options!

- <i class="bi bi-twitter text-primary-vivid"></i> [Shout me out on Twitter](https://twitter.com/intent/tweet?text=Thanks%20%40pglevy%20for%20this%20cool%20%E2%80%9Ccall-to-tweet-action%E2%80%9D%20link%20generator.%20Check%20it%20out%20here%3A%20&url=https%3A%2F%2Fpglevy.github.io%2Ftweetto-burrito%2F&hashtags=)
- <i class="bi bi-cup-fill text-success"></i> [Buy me a matcha green tea](https://www.buymeacoffee.com/pglevy)
{: .add-list-reset}

{% include text-input.html 
label="Tweetto Burrito ink" 
id="thelink" 
type="text" %}

<button type="button" class="usa-button usa-button--big bg-primary-vivid hover:bg-secondary-vivid radius-pill" id="clipboard" data-clipboard-target="#thelink">Copy to clipboard <i class="bi bi-clipboard"></i></button>

You can also <a id="preview" href="" target="_blank">preview your link</a> or <a href="#tweetto-burrito" id="editlink">make changes</a>.
{% endcapture %}

<!-- Convert the Markdown content to HTML. -->
{% assign form-html = form | markdownify %}
{% assign link-html = link | markdownify %}

{% include section.html content=form-html %}
{% include section.html content=link-html %}

Made with 🥩 and 🧀 by [@pglevy](https://twitter.com/pglevy).
{: .text-center .margin-bottom-5}