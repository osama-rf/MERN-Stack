const User = require("../models/model")

module.exports.register = (req, res) => {
    User.create(req.body)
        .then(user => {
            res.json({msg: "success!", User: user})
        })
        .catch(err => res.json(err))
}