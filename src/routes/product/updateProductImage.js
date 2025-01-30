const { Product } = require("../../database/sequelize")
const { upload } = require("../../service/multer.service")

module.exports = app => {
    app.put('/product/update-image/:productId', upload.single('file'), async ( req, res) => {
        await Product.findByPk( req.params.productId )
        .then( async product => {
            if(!product){
                res.status(400).json({
                    message: "Nous n'avons pas pu tourver le produit demandé. Veuillez utiliser un autre identifant",
                    data: null
                })
            }
            else{

                const { filename } = req.file
                const productImageURl = `${process.env.ENV_BASE_URL}images/${ filename }`

                const updatedProduct = await product.update({ productImageURl })
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