const { Product } = require("../../database/sequelize");
const { upload } = require("../../service/multer.service");

module.exports = app => {

    app.post('/product/insert', upload.single('file'), async (req, res) => {

      try {
    
        const { filename } = req.file
        const productImageURl = `${process.env.ENV_BASE_URL}images/${ filename }`

        const newProduct = await Product.create({ ...req.body, productImageURl })
    
        res.json({
            message: 'Nouveau produit inséré avec succès!',
            data: newProduct
        });
    
      } catch (error) {
        res.status(500).json({
          message: error.message
        });
      }
    });
}