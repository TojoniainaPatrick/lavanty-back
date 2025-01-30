const { User } = require("../../database/sequelize")
const { upload } = require("../../service/multer.service")

module.exports = app => {
    app.put('/user/update-image/:userId', upload.single('file'), async ( req, res) => {
        await User.findByPk( req.params.userId )
        .then( async user => {
            if(!user){
                res.status(400).json({
                    message: "Nous n'avons pas pu identifier votre compte. Veuillez réessayer la modification",
                    data: null
                })
            }
            else{

                const { filename } = req.file
                const userPictureURl = `${process.env.ENV_BASE_URL}images/${ filename }`

                const updatedUser = await user.update({ userPictureURl })
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