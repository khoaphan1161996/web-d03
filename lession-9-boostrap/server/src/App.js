const express = require("express");
const bodyParser = require("body-parser");
// Import cors
// const cors = require('cors')

const usersRoute = require("./routes/users.route")
const postsRoute = require('./routes/posts.route')
const loginsRoute = require('./routes/logins.route')

const app = express();
const port = 8080;

app.use(bodyParser.json());
// app.use(cors())

app.use('/users', usersRoute)
app.use('/posts', postsRoute)
app.use('/logins', loginsRoute)

app.get("/", (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} `)
})