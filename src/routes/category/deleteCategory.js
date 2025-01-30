const { Category } = require("../../database/sequelize")

module.exports = app => {
    app.delete('/category/delete/:categoryId', async( req, res ) => {
        await Category.findByPk( req.params.categoryId )
        .then( async category => {
            if( !category ){
                res.status(400).json({
                    message: "Nous n'avons pas pu touver la catégorie demandée. Veuillez utiliser un autre identifiant",
                    data: null
                })
            }
            else{
                await category.destroy()
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