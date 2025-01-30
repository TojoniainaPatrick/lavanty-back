const { Auction } = require("../../database/sequelize")

module.exports = app => {
    app.delete('/auction/delete/:auctionId', async( req, res ) => {
        await Auction.findByPk( req.params.auctionId )
        .then( async auction => {
            if( !auction ){
                res.status(400).json({
                    message: "Nous n'avons pas pu touver l'annonce demandée. Veuillez utiliser un autre identifiant",
                    data: null
                })
            }
            else{
                await auction.destroy()
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