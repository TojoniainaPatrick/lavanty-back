const { Bid } = require("../../database/sequelize")

module.exports = app => {
    app.put('/bid/update/:bidId', async ( req, res) => {
        await Bid.findByPk( req.params.bidId )
        .then( async bid => {
            if(!bid){
                res.status(400).json({
                    message: "Nous n'avons pas pu tourver l'enchère demandée. Veuillez utiliser un autre identifant",
                    data: null
                })
            }
            else{
                const updatedBid = await bid.update( req.body )
                res.status(200).json({
                    message: 'Modification effectuée',
                    data: updatedBid
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