const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('dev'));

const staticMiddleware = express.static(path.join(__dirname, 'public'));
app.use(staticMiddleware);
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send(`<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./stylesheets/style.css">
    </head>
    <body>
        <h1>Coding is a pain</h1>
    </body>
    </html>`);
});

app.listen(3000, () => {
    console.log('listening')
});