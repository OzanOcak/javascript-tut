## setting up node.js environment with babel for ES6 production

```console
npm init
yarn add express
yarn add -D @babel/cli @babel/core @babel/node @babel/preset-env nodemon
touch .babelrc src/server.js
```

.babelrc

```json
{
  "presets": ["@babel/preset-env"]
}
```

package.json

```json
 "type": "module",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon --exec babel-node src/server.js",
    "build": "babel src -d build"
  },
```
