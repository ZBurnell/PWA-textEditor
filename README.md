# PWA-textEditor
PWA Text Editor

# Description

My goal was to make a simple PWA that allowed a user to save notes or code snippets at home or on the go. Utilizing all of the tools I have gained in the OSU Bootcamp I was able to create, deploy and download the app. It works in the browser and with a click of the `Install` button, it will automatically install to a users desktop. It utilizes chached data from the database to offer quicker load times as well as having the logo on the desktop and webpage load without internet.

# Table of Content

1. [Description](#description)
2. [Installation](#installation)
3. [Screenshots](#screenshots)
4. [Usage](#usage)
5. [Credits](#credits)
6. [License](#license)
7. [Features](#features)

# Installation

The application is deployed with Heroku and can be found here => [Text Editor Deployment](https://zburnell-text-editor-80616e562f94.herokuapp.com/)
To see all that went into this project you can find my GitHub Repo here => [GitHub Repo](https://github.com/ZBurnell/PWA-textEditor)

# Screenshots

Below you will find screenshots from the Devtools console in the browser. It shows my Manifest.json, Service worker and Indexed Database are all functional

![Manifest](assets\JATE.Manifest.png)

![Service Worker](assets\JATE.SW.png)

![Indexed Database](assets\JATE.IndexedDB.png)

   
# Usage

This is a fully deployed application using [Heroku](https://www.heroku.com). If you would like to test it yourself in VS Code you can follow these instructions. From the command line run `NPM INSTALL` to install all of the dependencies, then `NPM RUN Start` to start the server and build the client and server side servers. Once the servers are running and listening open a new tab in your browser and go to `http://localhost:3000/`. From there you are able to see the text editor and download it to your desktop for offline use.
   

# Credits
  
I used the starter code give in the week 19 challenge as well as additional information provided in the OSU-VIRT-FSF-PT-08-2023-U-LOLC repo as a guideline on how to start this project. I also utilized the Xpert Learning Assistant and Stack over flow documents when additional information not provided in class was needed. 


# License

* ![MIT Badge Link](https://img.shields.io/badge/License-MIT-yellow.svg)
* [MIT License link](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)
   
Copyright (c) 2012-2023 Scott Chacon and others

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    

# Features

This project allows a user the option to install the application to their desktop to be used with or without internet. 