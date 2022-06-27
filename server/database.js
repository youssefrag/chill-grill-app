const addUser = function (name, email, password, pool) {
  return pool
    .query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;`, [name, email, password]
    )
    .then((result) => {
      console.log(result.rows)
      return result.rows
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const getUser = function (email, pool) {
  return pool
    .query(
      `
        SELECT * FROM users
        WHERE users.email = $1;
      `, [email]
    )
    .then((result) => {
      // console.log(result.rows)
      // console.log('result:', result.rows[0].password)
      return result.rows[0]
    })
    .catch((err) => {
      console.log(err.message)
    })
}

const viewDB = function (pool) {
  return pool
    .query(
      `SELECT current_database();`
    )
    .then((result) => {
      console.log('result:', result.rows)
    })
    .catch((err) => {
      console.log(err.message)
    })
}

module.exports = { addUser, getUser, viewDB }