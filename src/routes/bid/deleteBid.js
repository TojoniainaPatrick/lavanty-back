const { Bid } = require("../../database/sequelize")

module.exports = app => {
    app.delete('/bid/delete/:bidId', async( req, res ) => {
        await Bid.findByPk( req.params.bidId )
        .then( async bid => {
            if( !bid ){
                res.status(400).json({
                    message: "Nous n'avons pas pu touver l'enchère demandée. Veuillez utiliser un autre identifiant",
                    data: null
                })
            }
            else{
                await bid.destroy()
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