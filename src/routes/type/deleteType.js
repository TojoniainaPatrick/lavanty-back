const { Type } = require("../../database/sequelize")

module.exports = app => {
    app.delete('/type/delete/:typeId', async( req, res ) => {
        await Type.findByPk( req.params.typeId )
        .then( async type => {
            if( !type ){
                res.status(400).json({
                    message: "Nous n'avons pas pu touver le type demandé. Veuillez utiliser un autre identifiant",
                    data: null
                })
            }
            else{
                await type.destroy()
                res.status(200).json({
                    message: 'Suppression effectuée avec succès.',
                    data: null
                })
            }
        })
        .catch( error => {
            res.status(500).json({
                message: error.message,
                data: error
            })
        })
    })
}