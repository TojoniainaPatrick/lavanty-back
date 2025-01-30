const { where } = require("sequelize")
const bcrypt = require('bcryptjs')
const { User } = require('../../database/sequelize')

module.exports = app => {
    app.put('/user/change-password/', async ( req, res ) => {
        const {
            userEmail,
            userPassword,
            userNewPassword
        } = req.body

        if( userEmail && userPassword && userNewPassword ){
            await User.findOne({ where: { userEmail }})
            .then( async user => {
                if(!user){
                    res.status(400).json({
                        message: "L'adresse e-mail saisie ne correspond à aucun compte.",
                        data: null
                    })
                }
                else{
                    if( bcrypt.compareSync( userPassword, user.userPassword )){
                        const updatedAgent = await user.update({ userPassword: userNewPassword })

                        res.status(200).json({
                            message: "Mot de passe modifié avec succès.",
                            data: updatedAgent
                        })
                    }
                    else{
                        res.status(400).json({
                            message: "Mot de passe actuel incorrect.",
                            data: null
                        })
                    }
                }
            })
        }
        else{
            res.status(400).json({
                message: 'Mercie de bien vouloir compléter tous les champs!',
                data: null
            })
        }
    })
}