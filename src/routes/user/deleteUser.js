const { User } = require("../../database/sequelize")

module.exports = app => {
    app.delete('/user/delete/:userId', async( req, res ) => {
        await User.findByPk( req.params.userId )
        .then( async user => {
            if( !user ){
                res.status(400).json({
                    message: "Nous n'avons pas pu trouver le compte. Veuillez utiliser un autre identifiant",
                    data: null
                })
            }
            else{
                await user.destroy()
                res.status(200).json({
                    message: 'Suppression effectuée avec succès.',
                    data: null
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