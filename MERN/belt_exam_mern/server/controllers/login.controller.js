const User = require("../models/login.model")



module.exports = {
    create: (request, response) => {
        User.create(request.body)
            .then(user => response.json ({
                message: "User has been registered successfully",
                user: user
            }))
            .catch(err => response.status(400).json(err))
    },

    login: (request, response) => {
        User.findOne({email: request.body.email})
            .then(user => {
                if (user.password == request.body.password) {
                    response.json({
                        message: "login has been successfully",
                        user:user
                    })
                }else {
                    response.status(400).json({
                        errors: {
                            login: {message: "Email or password are incorrect"}
                        }
                    })
                }
            })
            .catch(err => response.status(400).json(err))
    },
}