const { Category } = require("../../database/sequelize")

module.exports = app => {
    app.put('/category/update/:categoryId', async ( req, res) => {
        await Category.findByPk( req.params.categoryId )
        .then( async category => {
            if(!category){
                res.status(400).json({
                    message: "Nous n'avons pas pu tourver la categorie demandée. Veuillez utiliser un autre identifant",
                    data: null
                })
            }
            else{
                const updatedCategory = await category.update( req.body )
                res.status(200).json({
                    message: 'Modification effectuée',
                    data: updatedCategory
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