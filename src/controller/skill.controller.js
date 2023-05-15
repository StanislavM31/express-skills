const express = require('express');
const { getAllSkills, getSkillById, deleteSkillById, createSkills, updateSkill } = require('../service/skill.service');

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

rout.post('/', (req, res) => {
  try {
    const { title } = req.body;
    const data = createSkills(title);
    res.send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

rout.put('/:id', (req, res) => {
  try {
    //по id обновляем title
    const { id } = req.params;
    const { title } = req.body;
    let data = updateSkill(id, title);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
module.exports = rout;
