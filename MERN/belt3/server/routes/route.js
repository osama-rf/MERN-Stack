const PetController = require('../controllers/controller');

module.exports = (app) => {
    app.get('/pet/', PetController.findAll)
    app.get('/pet/:_id', PetController.findOnePet)
    app.put('/pet/edit/:_id', PetController.updatePet)
    app.post('/pet/new', PetController.createPet)
    app.delete('/pet/delete/:_id', PetController.deletePet)
};