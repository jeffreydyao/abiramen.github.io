---
permalink: /security-guide
short: security-guide
title: the hitchhiker's guide to security
time: 15 December 2020
layout: post
tags: security
desc: lol
---
_so remember, don't give out your name and personal information to strangers online !!_

Yeah, no. This article is going to assume that you've grown up with the Internet and have some common sense. However, this guide is not for you if:
- you're being targeted by state-sponsored hackers, or someone really has a vendetta against you. At that point, you should probably seek some expert advice.
- you're some whiz and this is amateur stuff - yeah, I'm sorry ...

### La table des matières
- [The S in HTTPS](#the-s-in-https){: .page-anchor-offset}
- [Passwords](#passwords){: .page-anchor-offset}
- [Gone phishing](#to-catch-a-phish){: .page-anchor-offset}
- [Multi-factor authentication](#multi-factor-authentication){: .page-anchor-offset}
- [Browser extensions](#browser-extensions){: .page-anchor-offset}
- [VPNs are only virtually private](#vpns-are-virtually-private){: .page-anchor-offset}

#### Bonus coins
- [Do Not Send requests to my ISP](#do-not-send-requests-to-my-isp){: .page-anchor-offset}
- [No, I don't want your cookies](#no-i-dont-want-your-cookies){: .page-anchor-offset}

## The S in HTTPS
There's a good chance that you've seen this padlock in your browser, and understood that it has something to do with security, but not fully understand the implications of it.

![HTTPS padlock](/assets/images/blog/security-guide/https-padlock.jpg)
You probably also know that the S in HTTPS stands for 'secure'. The only guarantee that HTTPS provides over regular HTTP is that the contents of your communication with the website can only be read by your own computer and the website, and has not been tampered with along the way, either by a nefarious hacker, or your Internet Service Provider (or ISP, such as Telstra and Optus).

It's worth noting that your ISP can only figure out what web server you're connected to, but not exactly what webpage. For example, if you're watching the YouTube video [at this URL](https://youtu.be/dQw4w9WgXcQ){:target="_blank"}, your ISP would only be able to figure out that you visited YouTube, but not know what exact video you watched. [^1]

[^1]: This means that your ISP won't be able to shame you for being rickrolled :)

You shouldn't enter sensitive information, especially banking information and passwords, if a site isn't using HTTPS. Almost every site in 2020 uses HTTPS, and there's no reason for a website not to.

![Certificate error](/assets/images/blog/security-guide/certificate-error.jpg)

You may have also seen warning messages like the above. Messages like these are more likely due to misconfigurations by the website owner, or an issue up the chain of trust which HTTPS depends on. If you decide to click past the warning, you should treat the site as if it is using HTTP, and understand that your communication with the site is unencrypted.

## Passwords

Of course, a malicious hacker doesn't need to bother to trick you when they could just _become_ you, which is why following good password practices is extremely important.

You've probably seen the message to use different passwords on different websites before, and maybe you've been too lazy to do 
## Gone phishing
However, you shouldn't trust a website just because it's using HTTPS. The original inspiration for this blogpost was a long Facebook post I ended up writing last year, after a large chain of phishing attacks [^2] on Facebook Messenger. Most messages looked something like this:

[^2]: A phishing attack is an attempt to steal passwords or other sensitive information by posing as someone or something you trust.

![A phishy message](/assets/images/blog/security-guide/phishy.jpg)

Clicking that link led to a Facebook post, which had a fake URL to a 'YouTube' video. That URL led to this...
![Not very real Facebook](/assets/images/blog/security-guide/facebook-phish.jpg)

There's a few red flags here.
- This Facebook login page looks nothing like the real Facebook login page.
- The URL looks like a random mess which does not say 'facebook.com'.
- You're being asked to log in to Facebook


## Closing remarks
![Closing remarks](/assets/images/blog/security-guide/closing-remarks.jpg)
If you'd like to reach out with feedback, my contact details are on the bottom of this page.
