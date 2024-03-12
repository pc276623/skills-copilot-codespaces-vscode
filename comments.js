// Create web server
// Create web server with express
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    });
});

app.listen(3000);
