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

Next steps:

1. Copy the link to your clipboard using the button below.
2. Paste it into your content authoring tool along with some link text.
3. Serve and enjoy!

Find this useful?

- <i class="bi bi-twitter text-primary-vivid"></i> [Tweet at me on Twitter](https://twitter.com/intent/tweet?text=Thanks%20%40pglevy%20for%20this%20cool%20%E2%80%9Ccall-to-tweet-action%E2%80%9D%20link%20generator.%20Check%20it%20out%20here%3A%20&url=https%3A%2F%2Fpglevy.github.io%2Ftweetto-burrito%2F&hashtags=){: .display-inline-block .margin-bottom-1} 
- <i class="bi bi-coin text-success"></i> [Buy me a burrito](https://www.buymeacoffee.com/pglevy){: .display-inline-block .margin-bottom-1}
{: .add-list-reset .padding-left-3}

{% include text-input.html 
label="Tweetto Burrito link" 
id="thelink" 
type="text" %}

{% include components/checkbox.html labels="Make it tiny" %}

{% include components/alert.html heading="Oops!" text="Something went wrong. Please try again or uncheck the box to the full link instead of the tiny one." type="warning" style="display-none" %}

<button type="button" class="usa-button usa-button--big bg-primary-vivid hover:bg-secondary-vivid radius-pill margin-top-2" id="clipboard" data-clipboard-target="#thelink">Copy to clipboard <i class="bi bi-clipboard"></i></button>

You can also <a id="preview" href="" target="_blank">preview your link</a> or <a href="#form-section" id="editlink">make changes</a>.
{% endcapture %}

<!-- Convert the Markdown content to HTML. -->
{% assign form-html = form | markdownify %}
{% assign link-html = link | markdownify %}

{% include section.html content=form-html id="form-section" %}
{% include section.html content=link-html id="link-section" %}

Made with 🥩 and 🧀 by [@pglevy](https://twitter.com/pglevy) on [GitHub](https://github.com/pglevy/tweetto-burrito).
{: .text-center .margin-bottom-5}