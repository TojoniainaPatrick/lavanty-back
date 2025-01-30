const { Product, Type, Category } = require("../../database/sequelize")

module.exports = app => {
    app.get('/product/list', async ( req, res ) => {
        await Product.findAll({ include: [{
            model: Type,
            include: [ Category ]
        }]})
        .then( products => {
            res.status(200).json({
                message: 'Liste des produits',
                data: products
            })
        })
        .catch( error => {
            res.status(500).json({
                message: error.message,
                data: error
            })
        })
    })
}