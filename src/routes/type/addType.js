const { Type } = require("../../database/sequelize");

module.exports = app => {

    app.post('/type/insert', async (req, res) => {

      try {
        const newType = await Type.create( req.body )
        res.json({
            message: 'Nouveau type inséré avec succès!',
            data: newType
        });
    
      } catch (error) {
        res.status(500).json({
          message: error.message
        });
      }
    });
}