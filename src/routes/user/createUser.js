const { User } = require("../../database/sequelize");

module.exports = app => {
    app.post('/user/insert', async (req, res) => {
      try {
        const newUser = await User.create( req.body )
        res.json({
            message: 'inscription effectuée avec succès!',
            data: newUser
        });
    
      } catch (error) {
        res.status(500).json({
          message: error.message
        });
      }
    });
}