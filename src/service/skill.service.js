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


module.exports = { getAllSkills, getSkillById };
