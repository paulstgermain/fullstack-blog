const express = require('express');

const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();

server.use(express.json());

server.use(cors());
server.use(helmet());
server.use(logger(':method :url :status :res[content-length] - :response-time ms'));

module.exports = server;