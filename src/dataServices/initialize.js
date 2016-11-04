const pgp = require('pg-promise')()
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/taskDatabase'
const db = pgp(connectionString)

const sql = `CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  ordering SERIAL,
  text VARCHAR,
  completed BOOLEAN DEFAULT false
)`

db.none(sql).then( () => console.log( 'Done with db query' ))
            .then( () => process.exit() )
