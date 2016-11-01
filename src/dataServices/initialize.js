const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/taskDatabase'
const db = pgp(connectionString)

const sql = `CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  ordering SERIAL,
  text VARCHAR,
  completed BOOLEAN DEFAULT false
)`

db.none(sql).then( () => {
  console.log( 'Beginning DB query' )
  return db.none('INSERT INTO tasks (text) VALUES ($1)', ['this is a text'])
})
.then( () => console.log( 'Done with db query' ))
.then( () => process.exit() )
