const express = require('express');
const bodyParser = require('body-parser');
const rout = require('./controller/skill.controller');
const app = express();

app.use(bodyParser.json()); //middleware парсинга

app.use('/skill', rout); //middleware уровня маршрутизатора

module.exports = app;
