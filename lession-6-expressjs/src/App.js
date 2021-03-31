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

// // GET
// app.get('/users', (req, res) => {      
//     res.status(200).json({
//         isSuccess: true,
//         message: 'success',
//         users
//     })     
//   })                             


// // GET by ID
// app.get('/users/:id', (req, res) => {      
//     const {id} = req.params
//     const user = users.find(user => user.id === id)

//     if(!user){
//         return res.status(400).json({
//             isSuccess: false,
//             message: 'not find the user id',
//             users
//         }) 
//     }

//     res.status(200).json({
//         isSuccess: true,
//         message: 'success',
//         users
//     })     
//   })
                         

// // DELETE
// app.delete('/users/:id', (req, res) => {      
//     const {id} = req.params
//     const user = users.find(user => user.id === id)

//     if(user){
//         let index = users.indexOf(user)
//         users.splice(index,1)

//         return res.status(200).json({
//             isSuccess: true,
//             message: 'delete user id',
//             users,
//         }) 
//     } 
//   })


// // PUT
// // app.put('/users/:id', (req, res) => {      
// //     const {id} = req.params
// //     const user = users.find(user => user.id === id)

// //     if(!user){
// //         let index = users.indexOf(user)
// //         users[index] = 

// //         return res.status(200).json({
// //             isSuccess: true,
// //             message: 'put user id',
// //             users,
// //         }) 
// //     } 

// //     return res.status(400).json({
// //         isSuccess: false,
// //         message: 'exist',
// //   })


// // POST
// app.post('/users', (req, res) => {      
//     const { name } = req.body

//     if(!name){
//         res.status(400).json({
//             isSuccess: false,
//             message: 'invalid name',
//         })  
//     }

//     users.push({id: `${users.length+1}`,name})

//     res.status(200).json({
//         isSuccess: true,
//         message: 'success',
//         users
//     })     
//   }) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})