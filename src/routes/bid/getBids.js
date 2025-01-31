const { Product, Type, Auction, Bid, User } = require("../../database/sequelize")

module.exports = app => {
    app.get('/bid/list', async ( req, res ) => {
        await Bid.findAll({ include: [
            {
                model: Auction,
                include: [{
                    model: Product,
                    include: [ Type ]
                }]
            },
            User
        ]})
        .then( bids => {
            res.status(200).json({
                message: 'Liste des enchères',
                data: bids
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