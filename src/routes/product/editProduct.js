const { Product } = require("../../database/sequelize")

module.exports = app => {
    app.put('/product/update/:productId', async ( req, res) => {
        await Product.findByPk( req.params.productId )
        .then( async product => {
            if(!product){
                res.status(400).json({
                    message: "Nous n'avons pas pu tourver le produit demandé. Veuillez utiliser un autre identifant",
                    data: null
                })
            }
            else{
                const updatedProduct = await product.update( req.body )
                res.status(200).json({
                    message: 'Modification effectuée',
                    data: updatedProduct
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