const ProductController = require('../controllers/product.controller')

module.exports = function(app){
    app.get('/api/product', ProductController.findAllProducts);
    app.post('/api/product/new', ProductController.createNewProduct);
    app.get('/api/product/:id', ProductController.findOneSingleProduct);
    app.put('/api/product/:id', ProductController.updateExistingProduct);
    app.delete('/api/product/:id', ProductController.deleteAnExistingProduct);
}