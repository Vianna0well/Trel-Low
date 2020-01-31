const port = 3003;

const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function() {
    console.log(`backend is running on port ${port}`);
})

module.exports = server;