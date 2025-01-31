const { where } = require("sequelize");
const { Bid, Auction } = require("../../database/sequelize");

module.exports = app => {
    app.post('/bid/insert', async (req, res) => {
      const { auctionId } = req.body
      await Bid.create( req.body )
      .then( async newBid => {
        await Auction.update(
          {
            auctionCurrentPrice: newBid.bidAmount,
            bidId: newBid.bidId
          },
          { where: { auctionId }}
        )
        res.json({
            message: 'Nouvelle enchère insérée avec succès!',
            data: newBid
        });
      })
      .catch( error => {
        res.status(500).json({
          message: error.message
        });
      })
    })
}