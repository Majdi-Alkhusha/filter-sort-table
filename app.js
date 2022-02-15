const express = require("express");
const next = require("next");
const bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== 'producation';

const app = next({ dev });
const handle = app.getRequestHandler();

var whitelist = [undefined]


app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json({ type: 'application/*+json' }));

    server.get('*', async (req, res) => {
        return handle(req, res)
    })
    server.listen(3000, (err) => {
        if (err) throw err
        console.log("Welcome to Estarta Task on port 3000")
    })
}).catch((ex) => {
    console.error(ex)
    process.exit(1)
})