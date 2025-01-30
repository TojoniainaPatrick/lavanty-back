const { Auction } = require("../../database/sequelize");

module.exports = app => {
    app.post('/auction/insert', async (req, res) => {
      try {
        const newAuction = await Auction.create( req.body )
        res.json({
            message: 'Nouvelle annonce insérée avec succès!',
            data: newAuction
        });
    
      } catch (error) {
        res.status(500).json({
          message: error.message
        });
      }
    });
}