const { Category } = require("../../database/sequelize")

module.exports = app => {
    app.get('/category/list', async ( req, res ) => {
        await Category.findAll()
        .then( categories => {
            res.status(200).json({
                message: 'Liste des catégories de produits',
                data: categories
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