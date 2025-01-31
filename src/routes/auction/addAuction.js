const { where } = require("sequelize");
const { Auction, Product } = require("../../database/sequelize");

module.exports = app => {
    app.post('/auction/insert', async (req, res) => {

      const { productId } = req.body

      await Auction.create( req.body )
      .then( async newAuction => {

        await Product.update(
          { productStatus: 'en vente' },
          { where: { productId }}
        )

        res.json({
            message: 'Nouvelle annonce insérée avec succès!',
            data: newAuction
        });
      })
      .catch (error => {
        res.status(500).json({
          message: error.message
        });
      })
    });
}