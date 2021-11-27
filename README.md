# Ionic 5 consuming NodeJS returning binary image

In this example there is a NodeJS Express backend returning a binary image. The Ionic 5 frontend consumes the Get receiving that binary image.

It's also interesting that a pipe and a module have been created. Check it out!

## Getting Started

After cloning this project don't forget to:

```
cd NodeJSImageGet/backend
npm install
```

After that:

```
node index.js
```

```
cd NodeJSImageGet/frontend
npm install
```

After that:

```
ionic serve
```

Enjoy!!!

### Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.
* [Ionic](https://ionicframework.com/docs/intro/cli) - Installing Ionic.

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Ionic](https://ionicframework.com/docs/intro/cli) - Installing Ionic.

## Acknowledgments

* https://stackoverflow.com/questions/7650587/using-javascript-to-display-a-blob. Stackoverflow post which helped me a lot to display a blob using window.URL.createObjectURL method.
* https://stackoverflow.com/questions/46408537/angular-httpclient-http-failure-during-parsing. Interesting Stackoverflow post regarding responseType using HttpClient.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.