const PirateController = require('../controllers/controller');

module.exports = (app) => {
    app.get('/pirate/', PirateController.findAll)
    app.get('/pirate/:_id', PirateController.findOnePirate)
    app.put('/pirate/edit/:_id', PirateController.updatePirate)
    app.post('/pirate/new', PirateController.createPirate)
    app.delete('/pirate/delete/:_id', PirateController.deletePiarte)
};