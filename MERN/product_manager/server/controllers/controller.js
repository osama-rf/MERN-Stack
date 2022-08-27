const {request, response} = require("express");
const {Product} = require("../models/product.model");

module.exports.createProduct = (request, response) => {
    const { title, price, description} = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => {
            response.status(422)
            response.json(err)
        })
}

module.exports.findAllProduct = (request, response) => {
    Product.find({})
        .then(product => response.json(product))
        .catch(err => {
            response.status(422)
            response.json(err)
        })
}

module.exports.findOneProduct = (request, response) => {
    Product.findOne({_id:request.params._id})
        .then(product => response.json(product))
        .catch(err => {
            response.status(422)
            response.json(err)
        })
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params._id},
        request.body, {new:true})
        .then(product => response.json(product))
        .catch(err => {
            response.status(422)
            response.json(err)
        })
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({_id: request.params._id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => {
            response.status(422)
            response.json(err)
        })
}