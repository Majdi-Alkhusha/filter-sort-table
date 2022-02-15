## Getting Started

First, run the development server:

```bash
node app.js
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Or you can build app by change package json file: 

```bash
package.json => script: {
"dev": "node app.js",
"build": "next build",
"start": "NODE_ENV=producation node app.js"
}
```

then build 
```bash 
npm run build
npm run start
```

Majdi Alkhusha
