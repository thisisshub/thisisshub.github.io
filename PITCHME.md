
---?color=linear-gradient(to top right, #36d1dc, #5b86e5)

[drag=32 20, drop=5 0]
# OpenSource, 

# HacktoberFest, 

[drag=90 50, drop=center, fit=3.4]
# Google Summer of Code.

---

---?color=linear-gradient(to top right, #36d1dc, #5b86e5)

### Who am I?
`Shubhashish Dixit`
 - Done internship with Google Summer of Code this year
 along with openSUSE on project **rpmlint**
 - Active contributor to projects **Mozdownload (Mozilla)**, **Fedora**, **rpm-management**  
 - find me at [/thisisshub](https://github.com/thisisshub)
 
@snap[south span-100 font-montserrat text-white]
##### Who would I be to you in this hackathon?
- I'll be your mentor and the tech support guy. 
---

---?color=linear-gradient(to top right, #36d1dc, #5b86e5)

Aa

##### 
---

---?color=linear-gradient(to top right, #36d1dc, #5b86e5)

- **`GitHub`** **Workflow**
**What is `git`?**
 
`git` is **good** version control

-  add changes
-  undo changes
-   modify changes
---

`git` avoids the **problems** of bad version control

---
Code commented out with no explanation

```
a = 2 
b = 3
c = 4
# d = input('Please enter a no: ')
```
---
`git` is a command line utility

---

**Navigating the file system**

-   `cd` - change directory
-   `ls` - list files & directories
-   `mkdir` - make directory

---

 **What is GitHub?**

**GitHub** is an online interface for `git`

---
-   host your code online
-   extra collaboration tools
-   large community of developers
-   community platform
---

**Getting** 

**`git`**

**Installation**

    $ sudo pacman -S git (arch)
        
    $ sudo apt-get install git (ubuntu)
        
    $ sudo dnf install git (fedora)
        
    $ brew install git (mac os)

---
We need to configure `git`

`git` associates your name and email with every change you make

---
`git config --global user.name "name"`

`git config --global user.email "email"`

---

**Basic `git`**

---
** Scope**

-   the repository
-   staging & committing
-   your history
---

**The Repository**

A `git` repository is a folder on your computer

---
Your code and all its versions live in the repository

Two ways to get a repository

-   make a new one
-   copy an old one

`git init` makes a new repository

---
The **current** folder becomes the repository

---
**TL; DR**

1.  `mkdir [folder]` - make a new folder
2.  `cd [folder]` - enter the folder
3.  `git init` - make the folder a repo

---
`git clone [path]` copies a repository

---

`git clone` makes a **new** folder in your current folder

---
The `[path]` can be:

-   a repository on your computer
-   a link to a remote repository

---

`git status` tells you about your repository

---

## Staging & Committing

**Staging** combines related changes

**Commits** document these changes  
file-by-file, line-by-line

---
`git add [file]` stages changes

`git add -p [file]` stages parts of a file

`[file]` can be:

1.  a file
2.  a list of files
3.  a folder

---
`git commit` puts a change in the history

---

---
`git` has other commands to make the process easier

---
`git reset [file]` unstages `[file]`


`git checkout [file]` removes unstaged changes

`git checkout .` removes all unstaged changes

`git diff` shows unstaged changes  
file-by-file, line-by-line

---
## Your History
---
`git diff` shows unstaged changes  
file-by-file, line-by-line

---

`git` is only as good as your **history**

`git` is only as good as your **commits**

**Commits** build a history

---


`git log` shows history


The log prints to terminal the:

-   unique commit id
-   metadata such as author
-   commit message

The log **doesn't** show

-   which files changed
-   what lines changed
-   the history of one file

---

`git log --stat` adds files changed

`git log --patch` adds lines changed

`git log --follow [file]`  
shows `[file]`'s history

---
**Getting Help**
`git help` or documentation at [git-scm.com/doc](https://git-scm.com/doc)

---

**Opensource**
 
free software.

---

**where does it exist?!**

https://summerofcode.withgoogle.com/
https://whatcanidoformozilla.org/#!/progornoprog/proglang
https://github.com/tapaswenipathak/Open-Source-Programs

---
 **you may leave now**

shoo away..
