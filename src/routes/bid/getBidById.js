const { Product, Type, Category, Auction, Bid } = require("../../database/sequelize")

module.exports = app => {
    app.get('/bid/by-id/:bidId', async ( req, res ) => {
        await Bid.findByPk( req.params.bidId, { include: [
            {
                model: Auction,
                include: [{
                    model: Product,
                    include: [ Type ]
                }]
            },
            User
        ]})
        .then( auction => {
            res.status(200).json({
                message: `Enchère numéro : ${ req.params.bidId }`,
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