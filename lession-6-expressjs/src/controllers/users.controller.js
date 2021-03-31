const users = [
    {
        id: '1',
        name: 'Hieu',
    },
    {
        id: '2',
        name: 'Quang',
    },
    {
        id: '3',
        name: 'Khai',
    },
    {
        id: '4',
        name: 'Tien',
    },
]

module.exports.getUsers = (req, res) => {      
    res.status(200).json({
        isSuccess: true,
        message: 'success',
        users
    })     
  }

module.exports.getUsersByID = (req, res) => {      
    const {id} = req.params
    const user = users.find(user => user.id === id)

    if(!user){
        return res.status(400).json({
            isSuccess: false,
            message: 'not find the user id',
        }) 
    }

    res.status(200).json({
        isSuccess: true,
        message: 'success',
        user
    })     
  }

module.exports.deleteUser = (req, res) => {      
    const {id} = req.params
    const user = users.find(user => user.id === id)

    if(user){
        let index = users.indexOf(user)
        users.splice(index,1)

        return res.status(200).json({
            isSuccess: true,
            message: 'delete user id',
            users,
        }) 
    } 
  }

module.exports.postUser = (req, res) => {      
    const { name } = req.body

    if(!name){
        res.status(400).json({
            isSuccess: false,
            message: 'invalid name',
        })  
    }

    users.push({id: `${users.length+1}`,name})

    res.status(200).json({
        isSuccess: true,
        message: 'success',
        users
    })     
  }