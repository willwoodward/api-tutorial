// This sets up the back-end (I am using NodeJS and ExpressJS)
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

// These import the JSON files I am using to store data
// Using JSON files: https://www.geeksforgeeks.org/explain-about-read-and-write-of-a-file-using-javascript/
const test = require('./test.json');

const app = express();
app.use(express.static('client'));
app.use(bodyParser.json());

// Part 1 endpoints
app.get('/test/get', (req, res) => {
    res.send(test[0]);
});

app.get('/test/get/:index', (req, res) => {
    const index = req.params.index;
    res.send(test[index]);
});

app.post('/test/new', (req, res) => {
    const message = req.body.message;
    test.push(message);

    fs.writeFile('test.json', JSON.stringify(test, null, 2), function (err) {
        if (err) throw err;
    });

    res.status(200);
    res.end();
});

app.post('/test/remove', (req, res) => {
    const index = req.body.index;
    test.splice(index, 1);

    fs.writeFile('test.json', JSON.stringify(test, null, 2), function (err) {
        if (err) throw err;
    });

    res.status(200);
    res.end();
});

// Part 2 endpoints

module.exports = app;
