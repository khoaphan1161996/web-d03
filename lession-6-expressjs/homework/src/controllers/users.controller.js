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

module.exports.deleteUser = (req,res) => {
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
    
    res.status(400).json({
        isSuccess: false,
        message: 'not found the user id',
    })
}

module.exports.putUser = (req,res) => {
    const {id} = req.params
    const { name } = req.body
    const user = users.find(user => user.id === id)

    if(user){
        let index = users.indexOf(user)
        users[index] = {
            id: id,
            name,
        }

        return res.status(200).json({
            isSuccess: true,
            message: 'put user id',
            users,
        })
    }

    res.status(400).json({
        isSuccess: false,
        message: 'user does not exist',
    })
}