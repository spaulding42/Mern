const AuthorController = require('../controllers/author.controller')

module.exports = function(app){
    app.get('/api/author', AuthorController.findAllAuthors);
    app.post('/api/author/new', AuthorController.createNewAuthor);
    app.get('/api/author/:id', AuthorController.findOneSingleAuthor);
    app.put('/api/author/:id', AuthorController.updateExistingAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAnExistingAuthor);
}