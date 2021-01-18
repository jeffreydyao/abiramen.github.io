---
permalink: /cse-setup
short: cse-setup
title: vscode and cse
time: 13 April 2020
last-update: 17 January 2021
layout: post
tags: unsw-cse guide vscode
desc: If you're here, you're most likely a CSE student, or you're taking a CSE course. The goal of this post is to introduce you to Visual Studio Code, and SSH! There's also a fun bonus section if you make it to the end. :)
---
Hi there! If you're new here, welcome to CSE! We're going to be setting up vscode to communicate with CSE computers.

## Why are we doing this?

You've likely used a program called TigerVNC to connect to the School of CSE's computers before, which provides a visual interface (or 'GUI'). This provides you with a full desktop environment. The experience you get out of this is very similar to the experience you would get out of sitting in front of a physical computer on campus.

If you're in 1511, I would strongly advise you to use the Xfce desktop environment and gedit over TigerVNC for the first week, just to familiarise yourself with it.Don't take your experience with it as a sign that Linux has to be ugly either - [this subreddit has plenty of proof otherwise](https://reddit.com/r/unixporn). (Despite the name, I promise it's safe for work.)

More importantly, under normal circumstances, you would be doing your exams in front of a similarly configured physical computer on campus. As of the start of 2021 however, it seems you're generally free to use whatever setup you wish.

The solution we're about to go through provides a more seamless coding experience without having to load a full visual interface from CSE computers. This has the added benefits of not being affected by compression, especially if you have a poor connection, and other latency issues.

## Getting started

First of all, we're going to acquaint ourselves with Visual Studio Code, or vscode. You've likely been introduced to a tool called gedit which allows you to write files of text (including code), or what's called a text editor. vscode does this, but it provides many more great features on top. To get started, you'll need to install vscode on your own computer, whether it be Windows, macOS or Linux.

1. **Download and install Visual Studio Code.** You can find a download [here](https://code.visualstudio.com/download){:target="_blank"}
1. **If prompted to do so during the installation process**, select the checkbox which says 'Add to PATH'.
1. **Restart your computer once you're done.**

You should now have vscode installed! You can now edit files on your own computer, but that's not quite what we want - our goal is to edit files on CSE machines.

## Our friend, SSH
Some cool computer scientists invented a way (or more specifically, a set of rules, or protocols) to allow you to communicate with remote computers over the internet, called SSH, or Secure Shell. This allows us to edit files on another computer, such as the CSE servers, and run commands through a terminal on CSE servers.

Luckily for us, vscode has a way to use SSH to allow you to edit files and run commands on other computers.

<div class="alert">
    If you're on macOS, use `Cmd` instead of `Ctrl`.
</div>

### Part 1: Getting started
1. **Open vscode.**
1. **Open the Extensions menu.** You can access it using `Ctrl+Shift+X`.
1. **Search for and install the Remote-SSH extension.** Once this is done, you might be prompted to reload the window.
    ![Install the SSH extension.](/assets/images/blog/cse-setup/ssh-extension.jpg)

### Part 2: Improving security
<div class="alert">
    Not performing this step can make your CSE account accessible to anyone while you're connected. Accounts that don't enable this will not be able to use vscode to connect to CSE computers in the future.
</div>

1. **Open the vscode settings pane.** To do this, click the settings icon near the bottom left, or use `Ctrl+,`.
1. **Search for 'Remote Server Listen on Socket'.** Tick the corresponding checkbox once it appears.
   ![Enable the Remote Server Listen on Socket option](/assets/images/blog/cse-setup/socket.jpg)
1. **Search for 'Lockfiles In Tmp'.** Again, select the corresponding checkbox.
   ![Lockfiles in Tmp](/assets/images/blog/cse-setup/lockfiles.jpg)
1. Close and reopen vscode.

Congrats! You're now safer from nefarious hackers, or inadvertent intruders.

Note: If you're coming here from the older version of my guide, please switch to using **vscode.cse.unsw.edu.au**, rather than login, wagner, weill or williams. If not you can ignore this.

### Part 3: Logging in
1. **Open the Remote-SSH menu.** This can be done by clicking this button

   ![SSH Icon](/assets/images/blog/cse-setup/ssh-icon.jpg) 
   in the bottom left. The menu should look like this:

   ![SSH menu](/assets/images/blog/cse-setup/ssh-menu.jpg)
1. **Click Connect to Host.** In the field that shows up, type in `z5555555@vscode.cse.unsw.edu.au`, using your zID instead. Hit <kbd>Enter</kbd>.
    A new window will open.
1. **If asked to select a remote platform**, select Linux.
1. **Enter your password when prompted.** If your password is wrong, you will prompted to retry. Once you've done that, you should be connected successfully!
    - Use <kbd>Ctrl+O</kbd> to open a file.
    - Use <kbd>Ctrl+`</kbd> (that's the key to the left of the number row) to open a terminal pane.
      This is exactly like a terminal window in TigerVNC. You can run <code>ls</code> to see your files!
1. **We can save some time by adding this to our hosts list.** Click the SSH icon in the bottom left again, click Connect to Host, and this time, click **Add New SSH Host.**
1. **Enter the following command:** `ssh z5555555@vscode.cse.unsw.edu.au -A`, replacing with your own zID again, and hit <kbd>Enter</kbd>. If prompted which configuration file to save to, select the first one.
1. **You should now see vscode.cse.unsw.edu.au on the Connect to Host menu.** This means you don't have to type it in each time.
    [SSH menu](/assets/images/blog/cse-setup/ssh-menu-2.jpg)
If you had an issue, scroll down to [troubleshooting](#troubleshooting){: .page-anchor-offset} section.


## Making vscode even cooler

![My vscode over SSH](/assets/images/blog/cse-setup/vscode.jpg)

### Editor rulers
The COMP1511 style guide requires you to make sure your lines of code aren't longer than 80 characters (and it's good practice to do so!). You can make vscode show a handy little ruler to make sure your lines aren't too long.

1. **Open the settings.json file.** To do this, press <kbd>Ctrl+Shift+P</kbd> and search for **Open Settings (JSON).** A file should open.
1. **We need to add to this file.** You should see that the last line is a curly brace like this: <code>}</code>. What we want to do is add a comma to the second last line. Then, create a new line after the comma, and paste this:
```
"[c]" :{
    "editor.rulers" : [
        80
    ]
}
```

### The C/C++ extension
The vscode C/C++ extension will make your life a lot easier when coding. To install it,
1. **Open a Remote-SSH window** and connect to CSE servers.
1. **Open the Extensions pane** by using `Ctrl+Shift+X`.
1. Search for C/C++ and install the extension by Microsoft.

### Other extensions
vscode has heaps of themes and extensions. Some which I use:
- **C/C++ Snippets.** Occasionally saves time with suggestions. Make sure to install from your Remote-SSH window.
- **Material Icon Theme.**
- **Dainty and Dainty - Material Theme.** I personally use Dainty - Material Theme Ocean.
- **Discord Rich Presence.** If you use Discord, then it'll update your currently playing status with details of what you're coding on. If one of your friends tries to drag you into a voice call, you can just open up vscode and tell them that you're busy working :P

## Bonus coins: SSH and SSH keys 
Congrats! You made it to the bonus section. Following these instructions will mean you won't be asked for a password each time you open a new SSH window, while still keep your connection secure, using magic in the form of mathematics.

#### Part 1: Generate a keypair
##### Windows 10
<ol>
    <li><strong>Open the Windows Command Prompt.</strong> You can do this by entering cmd in Search.</li>
    <li><strong>Generate a keypair.</strong> Use the command <code>ssh-keygen -t rsa -b 4096</code>.</li>
    <li><strong>You'll be asked where you want to save the key.</strong> Leave this blank, and press
        <kbd>Enter</kbd>.</li>
    <li><strong>You'll be asked to set a password.</strong> Setting a password would defeat the purpose of
        generating
        the keypair.
        Leave this blank, and press <kbd>Enter</kbd> again. Do the same when you are asked to confirm it.</li>
    <li><strong>Using the same Command Prompt as before</strong>, enter the command
        <code>code %userprofile%/.ssh/id_rsa.pub</code>. This should open up a file in vscode, starting with
        ssh-rsa and followed
        by a <abbr title="This actually represents extremely large number, which is used to form a mathematical lock. This is called RSA encryption,
        and you can learn more about it in MATH3411.">long
            mess of characters</abbr>. Use <kbd>Ctrl+A Ctrl+C</kbd> to copy the entire contents of this file.
    </li>
</ol>

<h5>Linux/macOS</h5>
<ol>
    <li><strong>Open the Terminal.</strong></li>
    <li><strong>Generate a keypair.</strong> Use the command <code>ssh-keygen -t rsa -b 4096</code>.</li>
    <li><strong>You'll be asked where you want to save the key.</strong> Leave this blank, and press
        <kbd>Enter</kbd>.</li>
    <li><strong>You'll be asked to set a password.</strong> Setting a password would defeat the purpose of
        generating
        the keypair.
        Leave this blank, and press <kbd>Enter</kbd> again. Do the same when you are asked to confirm it.</li>
    <li><strong>In your Terminal</strong>, enter the command
        <code>code ~/.ssh/id_rsa.pub</code>. This should open up a file in vscode, starting with
        ssh-rsa and followed
        by a <abbr title="This actually represents an extremely large number, which is used to form a mathematical lock. This is called RSA encryption,
        and you can learn more about it in MATH3411.">long
            mess of characters</abbr>. Don't close this file. Use <kbd>Ctrl+A Ctrl+C</kbd> when you need to copy
        the entire contents of this file in later steps.
    </li>
</ol>
<br><br>
<p>Your computer has now generated two files: id_rsa and id_rsa.pub. The id_rsa.pub file is what's called a
    public
    key, while
    id_rsa is a private key. <strong>Never share (or even open) your private key.</strong> It's called a private
    key for a reason :P
</p>
<h4>Part 2: Using the keypair for CSE machines</h4>
<p>
    Now, we need to tell the CSE computer that your computer is trustworthy, and you are who you claim to be. To do
    this, we need to give the CSE computer the public key you just generated. If you're on Linux/macOS, this should
    be pretty easy, but if you're on Windows 10, there's a few more steps.
</p>
<h5>Windows 10</h5>
<ol>
    <li>
        Using your existing SSH or VLAB connection, open a terminal on the CSE computers. <abbr
            title="Technically multiple commands, which I've condensed for you. The purpose of these commands is to set the right file permissions.">Run
            the following
            command.</abbr>
        <pre>mkdir ~/.ssh;chmod 700 ~/.ssh;touch ~/.ssh/authorized_keys;chmod 600 ~/.ssh/authorized_keys;code ~/.ssh/authorized_keys</pre>
    </li>
    <li><strong>A window for a file called authorized_keys should open in vscode.</strong> Paste your public key
        from earlier into this file, and save.</li>
</ol>
<h5>Linux/macOS</h5>
<ol>
    <li><strong>Open the Terminal.</strong></li>
    <li><strong>Run the following command:</strong> <code>ssh-copy-id z5555555@cse.unsw.edu.au</code>, replacing
        with your own zID.</li>
    <li><strong>Enter your password.</strong> You'll be asked for your CSE password one last time, for the key
        to be copied over.</li>
</ol>
<p>Voila! You had it a bit easier here.</p>
<h4>Part 3: Telling vscode on your computer to use your new keys</h4>
<ol>

    <li><strong>On your local machine, open the SSH menu in vscode.</strong> Click the SSH icon in the bottom left, then
        <strong>Open Configuration
            File</strong>, and select the first option. You
        should see something like this:<br>
        <pre>
Host vscode.cse.unsw.edu.au
    HostName vscode.cse.unsw.edu.au
    User z5555555
    ForwardAgent yes
</pre>
    </li>
    <li><strong>We need to tell the SSH connection to use our private key.</strong> Add the following line to
        your config file, after the line with 'User' on it. Make sure to indent it so that it's in line with the
        others.</li>
    <ul>
        <li><strong>Windows:</strong> Make sure to enter your username. If you don't know it, it's the part
            after <code>C:/Users/</code> when you open cmd.
            <pre>IdentityFile "C:/Users/[YOURUSERNAME]/.ssh/id_rsa"</pre>
        </li>
        <li><strong>Linux/macOS</strong>
            <pre>IdentityFile ~/.ssh/id_rsa</pre>
        </li>
    </ul>
</ol>
<p>Once you've done this, you should be able to open Remote-SSH in vscode without requiring a password.<br>If
    you need to add
    another public key to authorized_keys (for another computer), you can enter it on a new line.</p>
<h2 id="wsl">Coding on your own computer</h2>
<p>
    This guide was once part of a much larger guide which involved setting up to allow you to code on
    your own computer. However, this was much more than what most 1511 students need It's worth noting that you need to
    have an internet connection for SSH to work. If your train
    route (although I understand not many people catch trains in 2020 anymore) has poor reception, and you want to
    code on the train, you would need an alternative.
</p>
<p>
    Even then, I would still recommend setting up your own local coding setup at some point. If you're new to coding
    and you're doing 1511 right now, I wouldn't say you should worry about this. However, if you do intend on going
    on to study more CSE courses, I recommend that you come back over the break after term ends and <a
        href="/wsl-github">
        check out this other post I wrote</a>, which goes through setting up a Linux development environment on your
    Windows 10 computer, and using Git and GitHub to keep copies of your work on different computers and the internet.
</p>
<h2 id="troubleshooting">Troubleshooting SSH over vscode</h2>
<p>
    If you're having trouble connecting to vscode, a fix that tends to work is:
</p>
<ol>
    <li><strong>Log in to the CSE servers using TigerVNC.</strong></li>
    <li><strong>Open a terminal.</strong></li>
    <li><strong>Run the following command: </strong><code>rm -r ~/.vscode-server</code>. Make sure to copy and paste
        this command carefully.</li>
</ol>
<p>
    If this doesn't work, try some of the solutions <a
        href="https://stackoverflow.com/questions/59978826/why-ssh-connection-timed-out-in-vscode">at this link</a>.
</p>

<h2>Have feedback, or want to reach out?</h2>
<p>If you've spotted an error, or have any suggestions or improvements that I can make, feel free to contact me! My
    details are at the bottom of this page.
</p>

<h2>Official guide</h2>
<p>
    As of late October 2020, CSE now has an official guide available for using vscode to connect over SSH.
    While the steps you've just followed cover what's in the guide, and should be up-to-date as of the time of writing,
    you can find the official guide <a href="https://www.cse.unsw.edu.au/~learn/homecomputing/vscode/">here</a>.
</p>

<h2>Thanks to the following people</h2>
<ul>
    <li><a href="https://github.com/ralismark">ralismark</a></li>
    <li><a href="https://github.com/adaluong">adaluong</a></li>
    <li><a href="https://github.com/lukefisklennon">lukefisklennon</a></li>
    <li><a href="https://github.com/tfpk">tfpk</a></li>

</ul>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
