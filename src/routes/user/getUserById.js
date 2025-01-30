const { User } = require("../../database/sequelize")

module.exports = app => {
    app.get('/user/by-id/:userId', async ( req, res) => {
        await User.findByPk( req.params.userId )
        .then( async user => {
            if(!user){
                res.status(400).json({
                    message: "Nous n'avons pas pu tourver l'utilisateur demandé. Veuillez utiliser un autre identifant",
                    data: null
                })
            }
            else{
                res.status(200).json({
                    message: `Utilisateur numéro: ${ req.params.userId }`,
                    data: user
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