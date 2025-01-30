const { Auction } = require("../../database/sequelize")

module.exports = app => {
    app.put('/auction/update/:auctionId', async ( req, res) => {
        await Auction.findByPk( req.params.auctionId )
        .then( async auction => {
            if(!auction){
                res.status(400).json({
                    message: "Nous n'avons pas pu tourver l'annonce demandée. Veuillez utiliser un autre identifant",
                    data: null
                })
            }
            else{
                const updatedAuction = await auction.update( req.body )
                res.status(200).json({
                    message: 'Modification effectuée',
                    data: updatedAuction
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