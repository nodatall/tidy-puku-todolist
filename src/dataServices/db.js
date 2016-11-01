const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/taskDatabase'
const db = pgp(connectionString)

const getAll = () => {
  const sql = `SELECT * FROM tasks`
  return db.any(sql)
}

const add = () => {
  const sql = `
    INSERT INTO tasks (text)
    VALUES ($1)
  `
  return db.none(sql, ['default'])
}

const markAsComplete = (id) => {
  const sql = `
    UPDATE tasks
    SET completed = true
    WHERE id = $1
  `
  return db.none(sql, [id])
}

const markAsIncomplete = (id) => {
  const sql = `
    UPDATE tasks
    SET completed = false
    WHERE id = $1
  `
  return db.none(sql, [id])
}

const edit = (id, text) => {
  const sql = `
    UPDATE tasks
    SET text = $2
    WHERE id = $1
  `
  return db.none = (sql, [id, text])
}

const remove = (id) => {
  const sql = `
    DELETE FROM tasks
    WHERE id = $1
  `
  return db.none = (sql, [id])
}

const reorder = (id) => {

}

module.exports = {
  getAll,
  add,
  markAsComplete,
  markAsIncomplete,
  edit,
  remove,
  reorder,
}
