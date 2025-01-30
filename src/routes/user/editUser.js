const { User } = require("../../database/sequelize")

module.exports = app => {
    app.put('/user/update/:userId', async ( req, res) => {
        await User.findByPk( req.params.userId )
        .then( async user => {
            if(!user){
                res.status(400).json({
                    message: "Nous n'avons pas pu identifier votre compte. Veuillez réessayer la modification",
                    data: null
                })
            }
            else{
                const updatedUser = await user.update( req.body )
                res.status(200).json({
                    message: 'Modification effectuée',
                    data: updatedUser
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