const db = require('../dataServices/db.js')

const getAll = (req, res) => {
  db.getAll()
    .then(tasks => tasks.forEach( task => console.log(task.id) ))
}

let add,
  markAsComplete,
  markAsIncomplete,
  edit,
  remove,
  reorder

module.exports = {
  getAll,
  add,
  markAsComplete,
  markAsIncomplete,
  edit,
  remove,
  reorder,
}
