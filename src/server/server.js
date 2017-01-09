import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './generated/app';

const app = express();
app.use(express.static(path.join(__dirname, '../../dist')));
const port = 3000;
const markup = renderToString(<App />);

app.get('/', (req, res) => {
    const page = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Ben Townsend</title>
            <link href="/bundle.css" rel="stylesheet">
        </head>
        <body>
        <div id="container">${markup}</div>
        <script src="/bundle.js"></script>
        </body>
        </html>
    `;
    res.send(page);
});

app.listen(port, () => {
    console.log(`Node server is listening on port ${port}.`);
});
