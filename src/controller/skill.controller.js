const express = require('express');
const { getAllSkills, getSkillById, deleteSkillById} = require('../service/skill.service');

const rout = express.Router();

rout.get('/', (req, res) => {
  let data = getAllSkills();
  res.status(404).send(data);
}); //это роут

rout.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const data = getSkillById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
rout.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(deleteSkillById(id));
  } catch (error) {
    res.status(404).send(error.message);
  }
});


module.exports = rout;
