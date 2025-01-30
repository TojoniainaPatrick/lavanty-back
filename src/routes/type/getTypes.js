const { Type, Category } = require("../../database/sequelize")

module.exports = app => {
    app.get('/type/list', async ( req, res ) => {
        await Type.findAll({ include: [ Category ]})
        .then( types => {
            res.status(200).json({
                message: 'Liste des types de produits',
                data: types
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