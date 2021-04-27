const logins = []

module.exports.postLogin = (req,res) => {
    const {name,password} = req.body

    if(name === ""){
        res.status(400).json({
            isSuccess: false,
            message: 'User name must contain only letters, numbers, spaces, or the underscore character'
        })
    }

    else {
        logins.push({id: `${logins.length+1}`,name,password})

        res.status(200).json({
            isSuccess: true,
            message: 'success',
            logins
        })
    }
}