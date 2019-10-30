# JS04_Homework

FWDI 4 [General Assembly, Riyadh](https://generalassemb.ly/riyadh)
# JS 4 Homework Repository

1. Git Config
2. Repository Setup;
3. Do Your Homework;
4. Submit Your Homework.

___

### 1. Git Config

You only need to do this part once on your machine.

```sh
git config --global user.name "ReplaceMe"
git config --global user.email "replace@me.com"
git config --global color.ui "auto"
```

### 2. Repository Setup

You only need to do this part once, not every time you're submitting homework!

- **Fork this repository**
    + *'Forking' creates a personal, 'forked' copy of this repository on your Github account.*
    + Hit the **Fork** button in the top right-hand corner of this page.
- **Clone your forked repository to your computer**
    + *'Cloning' takes your 'forked' repository on GitHub and creates a local copy (aka 'clone') on your computer.*
    + Make sure you're browser is open to **your** forked version of this repository on Github (e.g. [http://github.com/{{YOUR_USERNAME}}/wdi-oryx-homework](http://github.com/{{YOUR_USERNAME}}/FEWD-4-homework)).
    + Hit the **Clone or Download** button in the top right-hand corner of the page and copy the URL to your clipboard.
    + Open Terminal/iTerm2 to the directory in which you intend to store your homework.
    + `git clone url_of_your_fork_on_github` (where `url_of_your_fork_on_github` is the URL you copied after hitting 'Clone or Download', above).
- **Add an upstream remote repository**
    +  *Creating an upstream remote links the local repository on your computer to this repository on Github*
    + `cd FEWD-4-homework`
    + `git remote add upstream https://github.com/wdi-oryx/FEWD-4-homework`
    + `git pull upstream master`

### 3. Do your Homework

You should put each week's homework in a new folder within the appropriate directory of your homework repo. So, for week one, you might do something like this:

1. Open Terminal/iTerm2;
2. Go to your local homework repo (e.g., `cd Projects/general-assembly/FEWD-4-homework`, or wherever your local repo is);
3. From here, go to the folder matching your name within that repo, and the appropriate week (e.g., `Groucho_Marx/week_01`);
4. Create new folders for each of the day's homework tasks: (e.g. `mkdir calculator` and `mkdir strings`);
5. Create the files necessary to complete the homework in their respective directories;
6. Get to it!

### 4. Submit Your Homework

You need to do this every time you're submitting homework.

- **Commit your work to your local repository progressively**
    + `git add .`
    + `git commit -m "your commit message goes here"`(where `your commit message goes here` is your description of the work you are committing, e.g. "added background color").
- **Merge changes from this repository into your own local repository**
    + `git pull upstream master`
- **Push the changes in your local repository to your forked repository**
    + `git push origin master`
- **Once you're finished, submit a pull request for me to accept your homework**
    + Navigate to your forked version of this repository on Github (e.g. [https://github.com/{{YOUR_USERNAME_HERE}}/FEWD-4-homework](https://github.com/{{YOUR_USERNAME_HERE}}/FEWD-4-homework)).
    + Hit the **Pull request** button.
    + Make sure the destination for the pull request is set to my repository, not your own or anyone else's.
    - In the pull request comment, tell me the following:
        + How difficult did you find this (out of 10)? 0 being no problems at all, 10 being impossible;
        + Was there anything that you struggled with?;
        + Is there anything that you'd like some further information on?;
        + Roughly how long did it take?

If you don't mention anything in the Pull Request comments, we will assume you had no problems at all with it!
