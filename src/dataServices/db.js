const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/taskDatabase'
const db = pgp(connectionString)

const getAll = () => {
  const sql = `SELECT * FROM tasks ORDER BY ordering ASC`
  return db.any(sql)
}

const add = () => {
  const sql = `
    INSERT INTO tasks (text)
    VALUES ($1)
    RETURNING id
  `
  return db.one(sql, [''])
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
  return db.none(sql, [id, text])
}

const remove = (id) => {
  const sql = `
    DELETE FROM tasks
    WHERE id = $1
  `
  return db.none(sql, [id])
}

const getOrdering = id => {
  const sql = `
    SELECT ordering FROM tasks
    WHERE id = $1
  `
  return db.one(sql, [id])
}

const setOrdering = (id, ordering) => {
  const sql = `
    UPDATE tasks
    SET ordering = $2
    WHERE id = $1
  `
  return db.none(sql, [id, ordering])
}

const reorder = (id1, id2) => {
  let ordering1, ordering2
  return Promise.all([
    getOrdering(id1),
    getOrdering(id2)
  ])
  .then( results => {
    ordering1 = results[0].ordering
    ordering2 = results[1].ordering
    setOrdering(id1, 0)
    setOrdering(id2, ordering1)
    setOrdering(id1, ordering2)
  })
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
