const { Bid } = require("../../database/sequelize");

module.exports = app => {
    app.post('/bid/insert', async (req, res) => {
      try {
        const newBid = await Bid.create( req.body )
        res.json({
            message: 'Nouvelle enchère insérée avec succès!',
            data: newBid
        });
    
      } catch (error) {
        res.status(500).json({
          message: error.message
        });
      }
    });
}