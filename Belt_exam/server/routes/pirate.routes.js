const PirateController = require('../controllers/pirate.controller')

module.exports = function(app){
    app.get('/api/pirate', PirateController.findAllPirates);
    app.post('/api/pirate', PirateController.createNewPirate);
    app.get('/api/pirate/:id', PirateController.findOneSinglePirate);
    app.put('/api/pirate/:id', PirateController.updateExistingPirate);
    app.delete('/api/pirate/:id', PirateController.deleteAnExistingPirate);
}
