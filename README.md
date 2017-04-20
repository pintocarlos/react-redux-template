# Template project with React & redux

This repo is a starter project to help you get rolling on web projects with React, redux, and other awesome stuff.

## how to use
* clone the repo
* run npm install
* customize your project (see below)
* visit http://localhost:8080/index.html

## Features
* webpack bundling & building
* babel transpiling (es2015, stage-0 & react presets)
* React with dev tools
* Redux store with logger & thunk middlewares
* unit testing framework with Mocha / Chai
* npm scripts for testing, running the dev server, building & deploying to s3

## Customize your project
This project has some variables that you will need to change in order to fit your project better. Here's a list of the files you need to change

### package.json
* change the project name & description
* change the repo url
* edit the deploy & deploy-staging aws path to where the project will need to be deployed

you can then add / remove dependencies. The .npmrc file automatically appends --save-dev and --save-exact on npm install commands, so you don't need to type it every time
Saving all dependencies to dev-dependencies is fine since webpack will build what you need anyway.

### webpack.config.babel.js
In the webpack config, you need to set the output public path to the path of your project.

### reset git and set remote
You probably don't want to commit your change on this repo, and set up your own repo.

```bash
$ cd /project_folder
$ rm -rf .git
$ git init
$ git remote add origin https://github.com/yourProjectRepo.git
$ git add --all && git commit -am 'commit message' && git push origin master
```

