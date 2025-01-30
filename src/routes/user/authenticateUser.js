const { where } = require('sequelize')
const { User } = require('../../database/sequelize')
const bcrypt = require('bcryptjs')

module.exports = app => {
    app.post('/user/authenticate', async ( req, res ) => {
        const { userEmail, userPassword } = req.body
        if( userEmail && userPassword ){
            
            const user = await User.findOne({ where: { userEmail }})

            if(!user){
                res.status(400).json({
                    message: "Veuillez bien vérifier votre adresse e-mail.",
                    data: null
                })
            }
            else {
                if(bcrypt.compareSync(userPassword, user.userPassword)){
                    res.status(200).json({
                        message: 'Authentification réussie.',
                        data: user
                    })
                }
                else {
                    res.status(400).json({
                        message: 'Mot de passe incorrect.',
                        data: null
                    })
                }
            }
        }
        else {
            res.status(400).json({
                message: "Merci de bien vouloir compléter tous les champs!",
                data: null
            })
        }
    })
}