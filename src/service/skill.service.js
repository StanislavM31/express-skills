const arr = [
  { id: 1, title: 'javascript' },
  { id: 2, title: 'typescript' },
  { id: 3, title: 'mongodb' },
  { id: 4, title: 'mongoose' },
  { id: 5, title: 'pg' },
];

function getAllSkills() {
  try {
    return arr;
  } catch (error) {
    return error.message;
  }
}
function getSkillById(id) {
  const filtered = arr.filter(el => el.id == id);
  if (filtered.length == 0) throw new Error('по такому id нет skills');
  return filtered;
}
function deleteSkillById(id) {
  try {
    const filtered = arr.filter(el => el.id != id);
    return filtered;
  } catch (error) {
    return error.message;
  }
}
function createSkills( title) {
  const obj = {
    id: Math.floor(Math.random() * 10),
    title,
  };
  arr.push(obj);
  return arr;
}
function updateSkill(id, title) {
  let flag = arr.filter(el => el.id == id);
  if (flag.length == 0) throw new Error('нет такого id');
  let filtered = arr.filter(el => el.id != id);
  let obj = {
    id,
    title,
  };
  filtered.push(obj);
  return filtered;
}

module.exports = { getAllSkills, getSkillById, deleteSkillById, createSkills, updateSkill };
