const express = require('express');
const { getAllSkills} = require('../service/skill.service');

const rout = express.Router();

rout.get('/', (req, res) => {
  let data = getAllSkills();
  res.status(404).send(data);
}); //это роут

module.exports = rout;
