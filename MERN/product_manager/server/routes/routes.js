const ProductController = require('../controllers/controller')

module.exports = function (app) {
    app.post('/product/new', ProductController.createProduct);
    app.get('/product/:_id', ProductController.findOneProduct);
    app.get('/product', ProductController.findAllProduct);
    app.put('/product/:_id', ProductController.updateProduct);
    app.delete('/product/:_id', ProductController.deleteProduct);
}