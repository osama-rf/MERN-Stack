const PetController = require('../controllers/controller');

module.exports = (app) => {
    app.get('/pet/', PetController.findAll)
    app.get('/pet/:id', PetController.findOnePet)
    app.put('/pet/edit/:id', PetController.updatePet)
    app.post('/pet/new', PetController.createPet)
    app.delete('/pet/delete/:id', PetController.deletePet)
};