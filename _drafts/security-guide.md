---
permalink: /security-guide
short: security-guide
title: the hitchhiker's guide to security
time: 15 January 2021
layout: post
tags: security
desc: don't get hacked!
---

**This is currently a draft version which I released for CompClub. Check back in a week for the complete version.**

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

### Choosing passwords

I personally use a password manager for all but a small few of my passwords. For the rest of my passwords, I splice together lyrics from some songs I like (although not my favourites, since that's relatively easy to determine with some quick Googling), and throw in a bunch of numbers and symbols randomly. This means that I can sing along my passwords in my head, while still having something that's strong and 30+ characters long. 

### Password managers

Having a password manager saves you the effort of having to memorise different passwords for different websites - instead, you use a super-strong 'master password' on the password manager, and then the password manager generates and stores secure passwords for other websites. Many solid password managers exist, and even using Google's password manager across Chrome and Android for unique passwords is a massive improvement for most people's security.

I personally use LastPass - it seems to be very thoroughly audited and verified, has a strong feature set, and is popular amongst the security community.

## Gone phishing
However, you shouldn't trust a website just because it's using HTTPS. The original inspiration for this blogpost was a long Facebook post I ended up over a year ago, after a large chain of phishing attacks [^3] on Facebook Messenger. Most messages looked something like this:

[^3]: A phishing attack is an attempt to steal passwords or other sensitive information by posing as someone or something you trust.

![A phishy message](/assets/images/blog/security-guide/phishy.jpg)

Clicking that link led to a Facebook post, which had a fake URL to a 'YouTube' video. That URL led to this...
![Not very real Facebook](/assets/images/blog/security-guide/facebook-phish.jpg)

There's a few red flags here.
- This Facebook login page looks nothing like the real Facebook login page.
- The URL looks like a random mess which does not say 'facebook.com'.
- You're being asked to log in to Facebook, to watch what is supposedly a YouTube video?

Some questions you can ask yourself before clicking on a link you didn't expect to receive are:
- **Does this URL seem to be legitimate? :** You can often search for the domain (the first part of the domain, for example, www.google.com) to check if it's a legitimate domain owned by a company.
- **Does the person who sent me the link normally talk to me? :** If you're receiving a message from someone that doesn't normally talk to you, or the grammar/structure of their message doesn't seem quite right, it's probably sus.
- **Why am I being asked for a password? :** If you're already logged into a site like Facebook or Google, you generally won't be requested for a username or password again. Look closely at the URL of the login page, and make sure it matches the service you're logging in with.

## Multi-factor authentication

Multi-factor authentication is a way to mitigate the impact of your password being leaked, or stolen in a phishing attack. Typical login systems only involve one factor - your password.

There are three different types of factors that we can involve in a login system:
- something you know (such as a typical password)
- something you are (biometrics, such as fingerprints)
- something you have (such as your phone)

Enabling multi-factor authentication typically involves using the first 2. This means that once you enter your password, you'll be asked to enter a code from your phone. This means that a stolen password isn't enough to log in as you.

I recommend enabling multi-factor authentication for things such as your email, Facebook and bank accounts. I personally choose to use it for any service that supports it. You can find instructions on enabling multi-factor authentication, also known as two-factor authentication, usually on the Account Settings page for a service.

## Browser extensions

A lot of people seem to use browser extensions without giving it too much thought. However, a lot of browser extensions require you to provide access to all data on sites you visit. An evil extension could use this to steal your usernames and passwords as you type them in.

This is why you should limit the access you provide to extensions. You can change which websites an extension has to on Chrome by visiting chrome://extensions, and then clicking on an extension which you want to change.

For example, I have an extension called Video Speed Controller, which allows me to speed up and slow down videos as much as I want, but I only give it access to YouTube, Netflix and Disney Plus. The only extensions I have with full access are LastPass and uBlock Origin - a tradeoff I am willing to make for convenience.

I'd also recommend using Guest mode on your browser when entering banking details.

## More content coming soon!


## Closing remarks
![Closing remarks](/assets/images/blog/security-guide/closing-remarks.jpg)
If you'd like to reach out with feedback, my contact details are on the bottom of this page.
