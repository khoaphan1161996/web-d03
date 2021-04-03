const express = require('express')
const bodyParser = require("body-parser")

const usersRoute = require("./routes/users.route")

const app = express()
const port = 8080

// body-parser
app.use(bodyParser.json())

app.use('/users', usersRoute)

app.get('/', (req, res) => {        // get/users/:id    // delete/users/:id
  res.send('Hello World!')          // post/users       // put/users/:id
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})