const path = require('path')

const db = require('../dataServices/db.js')

const renderApp = (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'))
}

const getAll = (req, res) => {
  db.getAll()
    .then( tasks => {
      res.json(tasks)
    })
}

const add = (req, res) => {
  db.add()
    // .then(task => {
    //   res.status(200).json(task) // cbtt
    // })
    // .catch(next) // cbtt
}

const markAsComplete = (req, res) => {
  db.markAsComplete(req.params.id)
}

const markAsIncomplete = (req, res) => {
  db.markAsIncomplete(req.params.id)
}

const edit = (req, res) => {
  db.edit(req.params.id, req.body.text)
}

const remove = (req, res) => {
  db.remove(req.params.id)
}

const reorder = (req, res) => {
  db.reorder(req.params.id)
}

module.exports = {
  renderApp,
  getAll,
  add,
  markAsComplete,
  markAsIncomplete,
  edit,
  remove,
  reorder,
}
