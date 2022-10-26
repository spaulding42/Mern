const Player = require("../models/Player.model");

module.exports.findAllPlayers = (req, res) => {
    
    Player.find()
        .then(allDaPlayers => res.json({ players: allDaPlayers }))
        .catch(err => res.json(err));
    
};

module.exports.findOneSinglePlayer = (req, res) => {
	Player.findOne({ _id: req.params.id })
		.then(oneSinglePlayer => res.json({ player: oneSinglePlayer }))
		.catch(err => res.json(err));
};

module.exports.createNewPlayer = (req, res) => {
    const newPlayer = req.body
    Player.create(newPlayer)
        .then(newlyCreatedPlayer => res.json({ player: newlyCreatedPlayer }))
        .catch(err => res.status(400).json(err));
};

module.exports.updateExistingPlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true , runValidators: true})
        .then(updatedPlayer => res.json({ player: updatedPlayer }))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteAnExistingPlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json(err));
};
