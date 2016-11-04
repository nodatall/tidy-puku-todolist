const path = require('path')

const db = require('../dataServices/db.js')

const renderApp = (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'))
}

const getAll = (req, res, next) => {
  db.getAll()
    .then( tasks => {
      res.json(tasks)
    })
    .catch(next)
}

const add = (req, res, next) => {
  db.add()
    .then( taskId => {
      res.json(taskId)
    })
    .catch(next)
}

const markAsComplete = (req, res, next) => {
  db.markAsComplete(req.params.id)
    .then( () => {
      res.end()
    })
    .catch(next)
}

const markAsIncomplete = (req, res, next) => {
  db.markAsIncomplete(req.params.id)
    .then( () => {
      res.end()
    })
    .catch(next)
}

const edit = (req, res, next) => {
  db.edit(req.params.id, req.body.text)
    .then( () => {
      res.end()
    })
    .catch(next)
}

const remove = (req, res, next) => {
  db.remove(req.params.id)
    .then( () => {
      res.end()
    })
    .catch(next)
}

const reorder = (req, res, next) => {
  db.reorder(req.params.id1, req.params.id2)
    .then( () => {
      res.end()
    })
    .catch(next)
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
