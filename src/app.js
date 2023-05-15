const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); //middleware парсинга

app.use('/skill', (req,res)=>{
    res.send("testRoutSkill")
}); //middleware

module.exports = app;
