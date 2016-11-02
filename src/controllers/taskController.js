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
    .then( () => {
      res.end()
    })
}

const markAsComplete = (req, res) => {
  db.markAsComplete(req.params.id)
    .then( () => {
      res.end()
    })
}

const markAsIncomplete = (req, res) => {
  db.markAsIncomplete(req.params.id)
    .then( () => {
      res.end()
    })
}

const edit = (req, res) => {
  db.edit(req.params.id, req.body.text)
    .then( () => {
      res.end()
    })
}

const remove = (req, res) => {
  db.remove(req.params.id)
    .then( () => {
      res.end()
    })
}

const reorder = (req, res) => {
  db.reorder(req.params.id)
    .then( () => {
      res.end()
    })
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
