const { Product } = require("../../database/sequelize")

module.exports = app => {
    app.delete('/product/delete/:productId', async( req, res ) => {
        await Product.findByPk( req.params.productId )
        .then( async product => {
            if( !product ){
                res.status(400).json({
                    message: "Nous n'avons pas pu touver le produit demandé. Veuillez utiliser un autre identifiant",
                    data: null
                })
            }
            else{
                await product.destroy()
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