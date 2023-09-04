# johnosproject.org_docs

This repository contains the web site of the "Official documentation for the
John OS Project" used as [GitHub Pages](https://johnosproject.github.io/johnosproject.org_docs)
and at the [docs.johnosproject.org](https://docs.johnosproject.org) url.

Repository that exports the [docs.johnosproject.org](https://docs.johnosproject.org) url.
Web Site as GitHub Pages.

* **WebSite Version:** 1.0.0
* **Content Version:** 20211220

[CHANGELOG](CHANGELOG.md) | [TODOs](TODOs.md) | [LICENCE](LICENCE.md)

Current repo contains the source code of the Web Site published at [docs.johnosproject.org](https://docs.johnosproject.org).
This WebSite is based on [Docusaurus](https://docusaurus.io/)/[Node.js](https://nodejs.org/en)
and is structured into the following 3 sections, plus a [Blog](https://docs.johnosproject.org/blog):

* [What](https://docs.johnosproject.org/what)
* [Guides](https://docs.johnosproject.org/guides)
* [References](https://docs.johnosproject.org/references)


    NB: Not yet configured!
    This repo, contrary other repos, use 4 principal brances:
    * `main`: release branche used to merge `develop` and `content` branches
    * `develop`: classic development branch used for Docusuarus configs and implementations
    * `content`: branch dedicated to the contents updates
    * `gh-pages`: dedicated branch to the GitHub Pages deployment


## Run

To see the live version, please open a browser and navigate to [docs.johnosproject.org](https://docs.johnosproject.org).

Otherwise, to run it locally execute following commands. Remember that [Node.js](https://nodejs.org/en)
and [Yarn](https://yarnpkg.com/) must be installed on your machine in order to
run this WebSite locally.

```shell
$ yarn install   # run it only once to install proj depedencies in 'node_modules' dir
$ yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.
This command will also open the [http://localhost:3000/](http://localhost:3000/)
url in a local browser.

With the WebSite running locally using the `start` sub-command, you can edit
content or docusaurus files and see the updates immediately at [http://localhost:3000/](http://localhost:3000/).

    ## Develop

    This project allows 2 kind of updates:
    * contents update: anything related with sections docs or blog articles
    * and docusaurus updates: everything else like docusaurus configs but also commons react components

    ### Update contents

    When you must update some content you can use the `content` branch and create a
    sub-branch to commit your work. Once you have terminated with the task, then you
    can merge you sub-branch to the `content` branch.<br/>
    Only when all content changes has been approved, the `content` branch can be
    merged into the `main` one. That triggers the [GitHub Actions](https://github.com/robypomper/robypomper.github.io/actions)
    that builds and deploys the live [www.robypomper.org](https://www.robypomper.org)
    WebSite.

    * **Features**:<br />
      add a Markdown page into the right folder and add his link to the main
      <MapFeature /> page
    * **Hardware**:<br />
      copy the `_TMPL_hardware` and populate with new model info
    * **Software**:<br />
      add a Markdown page into the right folder and add his link to the main
      <MapSoftware /> page
    * **Blog**:<br />
      add a Markdown page into the `blog` folder and name it according to
      blog's conventions


    ### Update Docusaurus & Co.

    Before starting any new update, if not yet done, it's required to merge the
    `main` branch into the `develop` one.
    
    Then when your develop branch is up-to-date, you can start implementing your
    updates. Like any other `develop` branch, you can create `features/XY` sub-braches
    to organize work and collaborate with others.<br/>
    Finally when the updates have been approved, you need to syncronize also the
    contents. Somethimes a Docusaurus update requires to update also the content files.
    You can do it into the `develop` branch after merging the latest `main` branch.
    Update the content files and merge the `develop` branche into the `main`.
    
    **NB!:** Since you merged latest `main` commit into the `develop` branch (in order
    to sync contents files), no content updates are allowed.
