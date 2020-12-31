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
- [Curb your insecurity](#the-s-in-https){: .page-anchor-offset}
- [Passwords](#passwords){: .page-anchor-offset}
- [Gone phishing](#to-catch-a-phish){: .page-anchor-offset}
- [Multi-factor authentication](#multi-factor-authentication){: .page-anchor-offset}
- [Browser extensions](#browser-extensions){: .page-anchor-offset}
- [VPNs are only virtually private](#vpns-are-virtually-private){: .page-anchor-offset}
- [No, I don't want your cookies](#no-i-dont-want-your-cookies){: .page-anchor-offset}

## Curb your insecurity
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

You've probably seen the message to use different passwords on different websites before, and maybe you've been too lazy to do this yourself - I wasn't bothered to do this until a few years ago. [^2] This is a terrible idea, however - inevitably, a website you use is going to leak their passwords in some form, and it's not hard for someone to attempt to reuse your password on another site using an automated script.

[^2]: I had two-factor authentication on for anything important, but was still a bit naive. Mostly lazy, but still a bit naive.

### Have I already been compromised?

[have i been pwned?](https://haveibeenpwned.com/) is a reputable way to check if your email address has been associated with any data breaches. If you find yourself there, make sure that you change your password for that site, and make sure to change your password for any other sites that might be using the same password.

### Some basic password rules
- Have a nice mix of uppercase, lowercase, numbers and symbols.
- Avoid having a common words/phrases as your password - these are easier to guess, in what's known as a dictionary attack. 
- Have a different password for each website/service.

Even chaining four _random_ words together isn't too bad of a password **if** you throw in a few random numbers and symbols. There's a classic [comic](https://xkcd.com/936/){:target="_blank"} that's well known amongst the security community:

![Password strength XKCD](https://imgs.xkcd.com/comics/password_strength.png)

I personally use a password manager for all but a small few of my passwords. For 

### Password managers

Having a pass

### Choosing passwords

## Gone phishing
However, you shouldn't trust a website just because it's using HTTPS. The original inspiration for this blogpost was a long Facebook post I ended up writing last year, after a large chain of phishing attacks [^3] on Facebook Messenger. Most messages looked something like this:

[^3]: A phishing attack is an attempt to steal passwords or other sensitive information by posing as someone or something you trust.

![A phishy message](/assets/images/blog/security-guide/phishy.jpg)

Clicking that link led to a Facebook post, which had a fake URL to a 'YouTube' video. That URL led to this...
![Not very real Facebook](/assets/images/blog/security-guide/facebook-phish.jpg)

There's a few red flags here.
- This Facebook login page looks nothing like the real Facebook login page.
- The URL looks like a random mess which does not say 'facebook.com'.
- You're being asked to log in to Facebook, to watch what is supposedly a YouTube video?


## Closing remarks
![Closing remarks](/assets/images/blog/security-guide/closing-remarks.jpg)
If you'd like to reach out with feedback, my contact details are on the bottom of this page.
