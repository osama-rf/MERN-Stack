const ProductController = require('../controllers/controller')

module.exports = function (app) {
    app.post('/product/new', ProductController.createProduct);
    app.get('/product', ProductController.findAllProduct);
    app.get('/product/:_id', ProductController.findOneProduct)
}