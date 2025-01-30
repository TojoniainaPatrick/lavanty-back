const { Product, Type, Category, Auction, Bid } = require("../../database/sequelize")

module.exports = app => {
    app.get('/auction/by-id/:auctionId', async ( req, res ) => {
        await Auction.findByPk( req.params.auctionId, { include: [
            {
                model: Product,
                include: [{
                    model: Type,
                    include: [ Category ]
                }]
            },
            Bid
        ]})
        .then( auction => {
            res.status(200).json({
                message: `Annonce numéro : ${ req.params.auctionId }`,
                data: auction
            })
        })
        .catch( error => {
            res.status(500).json({
                message: error.message,
                data: error
            })
        })
    })
}