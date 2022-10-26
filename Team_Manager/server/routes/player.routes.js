const PlayerController = require('../controllers/player.controller')

module.exports = function(app){
    app.get('/api/player', PlayerController.findAllPlayers);
    app.post('/api/player', PlayerController.createNewPlayer);
    app.get('/api/player/:id', PlayerController.findOneSinglePlayer);
    app.put('/api/player/:id', PlayerController.updateExistingPlayer);
    app.delete('/api/player/:id', PlayerController.deleteAnExistingPlayer);
}