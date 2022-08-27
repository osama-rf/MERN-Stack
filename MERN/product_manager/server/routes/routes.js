const ProductController = require('../controllers/controller')

module.exports = function (app) {
    app.post('/product/new', ProductController.createProduct);
}