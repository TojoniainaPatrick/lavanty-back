const { Product, Type, Category, Auction, Bid } = require("../../database/sequelize")

module.exports = app => {
    app.get('/auction/list', async ( req, res ) => {
        await Auction.findAll({ include: [
            {
                model: Product,
                include: [{
                    model: Type,
                    include: [ Category ]
                }]
            },
            Bid
        ]})
        .then( auctions => {
            res.status(200).json({
                message: 'Liste des annonces',
                data: auctions
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