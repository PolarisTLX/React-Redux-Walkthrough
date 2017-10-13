/*
PROJECT SETUP:

Create and publish Github Repo on name. In this case: React-Redux-Walkthrough

need to set up in the Command Prompt (CP):
Gulp.js globally:  npm i -g gulp
wepback globally:  npm i -g webpack
wepback in -S?:  npm i -S webpack  (also needed?)
turbo-cli  globally:   npm i -g turbo-cli

Create the app in CP:  turbo new React-Redux-Walkthrough
This puts the turbo.cli files into that Github Repo

then change to that directory in the CP:  cd React-Redux-Walkthrough
then in CP:  npm install

to make sure that everything is working properly, in CP:  turbo devserver
and check localhost:3000 in browser, should show "Welcome to Turbo"

Libraries required to run react + redux:
in the CP:  npm i -S react react-redux redux react-dom redux-thunk

need transpilers in dev dependencies: (using babel to transpile ES6 to ES5 and React JSX to regular JavaScript)
in CP:  npm i -D babel-core babel-loader babel-preset-react babel-preset-es2015

need to create a webpack file to run transpiler:
in CP:  copy nul webpack.config.js

the file was pre-prepared by the creator and file is in a github repo named  velocity-360 / webpack.config.js
this seems to be the link:  https://github.com/velocity-360/velocity360/blob/master/webpack.config.js
though may need to review what lines in that code are needed / can be removed / need adjusting

then you need to need to make directory "src" and create index.js file:
in CP: mkdir src
in CP: copy nul index.js

go back one directory, in CP:  cd..
and type "webpack" to run it

To not have to re-run webpack after every change to a file,
go back to root project directory and type in CP:  webpack -w
which is the "watch" flag to make webpack watch for changes live
*/
