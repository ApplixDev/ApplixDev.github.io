# ApplixDev website sources 

This branch contains the source files needed to build the *ApplixDev* organization website hosted on [gh-pages](https://pages.github.com/)

The build website is served from the [master](https://github.com/ApplixDev/ApplixDev.github.io/tree/master) branch.

You can viste the website at https://applixdev.github.io

---

## Getting Started

The project was generated whit [yeoman](https://github.com/yeoman/yeoman.github.io) and uses gulp as a task manager.

### Requirements

In order to take the most of the Gulp automation included in this project, you will need to have the following installed before moving forward.
 
* [Node.js and NPM](https://nodejs.org/) - manages the development dependencies, like Gulp, Bower and plugins
* [Bower](http://bower.io/) - takes care of the frontend components and libraries, such as [Materialize](https://www.google.com/design/spec/material-design/), jQuery, etc.

### Installing

#### 1. Install NPM modules:

```bash
$ npm install
```

#### 2. Install Bower Components

```bash
$ bower install
```

#### 3. Start gulp

```bash
$ gulp
```

This simple command will run the default task in the [gulpfile.js](https://github.com/ApplixDev/ApplixDev.github.io/blob/sources/gulpfile.js)

---

## How to deploy to gh-pages [(see original post)](https://stackoverflow.com/questions/27664282/github-pages-for-personal-site-how-to-deploy-a-folder)

Depending of repository kind you are using, a User/Organization (**UO**) site or a Project site (**P**), sources and pages will be versionned in :

* User/Organization - sources : **sources**, pages: **master**
* Project - sources : **master**, pages: **gh-pages**

**Notes:**

1. Our repository contains a User/Organization **(UO)** website
2. The pages branch is mandatory, but the sources branch name can be changed

### Setup

* Clone this repository or initialize an empty github repository : **github.com/userName.github.io** for **UO** or **github.com/repositoryName** for **P**

#### Locally, initialize your local repository :

* Go to your source folder

    ```bash
    cd /my/sources/folder
    ```

* Init a git repository

    ```bash
    $ git init
    ```

* Add origin for **(UO)**

    ```bash
    $ git remote add origin git@github.com:userName/userName.github.io.git
    ```

* Or for **(P)**

    ```bash
    $ git remote add origin git@github.com:userName/repositoryName.git
    ```

* Switch to the sources branch for **(UO)**

    ```bash
    $ git checkout -b sources
    ```

* Or to the master branch for **(P)**

    ```bash
    git checkout master 
    ```

* Ensure you have the `dist` folder included in your `.gitignore` file. As we are currently on sources (or master), we will ignore it and version it in an other branch

* Commit the sources

    ```bash
    $ git add -A
    $ git commit -m "base sources"
    ```

* Push your sources in the sources branch for **(UO)**

    ```bash
    $ git push origin sources
    ```

* Or in the master branch for **(P)**

    ```bash
    $ git push origin master 
    ```

* Move to `dist` directory which will contain the build website to publish

    ```bash
    $ cd dist
    ```

* Check for the `.nojekyll` file and add it if not existing, this file tells gh-pages that there is no need to build a Jekyll site

    ```bash
    $ touch .nojekyll
    ```

* Init git and add remote origin

    ```bash
    $ git init
    $ git remote add origin git@github.com:userName/userName.github.io.git (UO)
    or
    $ git remote add origin git@github.com:userName/repositoryName.git (P)
    ```

* Put this repository on the appropriate branch

    ```bash
    $ git checkout master (UO)
    or
    $ git checkout -b gh-pages (P)
    ```

* Build your website by runnig the gulp default task   

    ```bash 
    gulp
    ```

* Commit your build site code

    ```bash
    $ git add -A
    $ git commit -m "first build"
    $ git push origin master (UO)
    or
    $ git push origin gh-pages (P)
    ```

Now that you have pushed your code and pages in two different branches, they will be pushed depending on where you are :

### Pushing sources

```bash
$ cd yourWorkingDirestory
$ git add -A
$ git commit -m "your commit message"
$ git push origin sources (UO)
or 
$ git push origin master (P)
```

### Pushing pages

#### 1. Manualy push pages

```bash
$ cd yourWorkingDirestory/dist
$ git add -A
$ git commit -m "your commit message"
$ git push origin master (UO) 
or 
$ git push origin gh-pages (P)
```

#### 2. Automaticly push pages using gulp-gh-pages
Simplly run the next command

```bash
gulp deploy
```

**Note:** You can change branch where you wish to deploy your website in the options of the gulp *deploy* task defined in the [gulpfile.js](https://github.com/ApplixDev/ApplixDev.github.io/blob/sources/gulpfile.js)