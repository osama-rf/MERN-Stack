const AuthorController = require('../controller/mongoose.controller');

module.exports = app => {
    app.get('/author/', AuthorController.findAllAuthors);
    app.get('/author/:_id', AuthorController.findOneAuthor);
    app.put('/author/:_id', AuthorController.updateOneAuthor);
    app.post('/author/new', AuthorController.createAuthor);
    app.delete('/author/delete/:_id', AuthorController.deleteOneAuthor);
};