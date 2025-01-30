const { Type } = require("../../database/sequelize")

module.exports = app => {
    app.put('/type/update/:typeId', async ( req, res) => {
        await Type.findByPk( req.params.typeId )
        .then( async type => {
            if(!type){
                res.status(400).json({
                    message: "Nous n'avons pas pu tourver le type demandé. Veuillez utiliser un autre identifant",
                    data: null
                })
            }
            else{
                const updatedType = await type.update( req.body )
                res.status(200).json({
                    message: 'Modification effectuée',
                    data: updatedType
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