const { Category } = require("../../database/sequelize");

module.exports = app => {
    app.post('/category/insert', async (req, res) => {
      try {
        const newCategory = await Category.create( req.body )
        res.json({
            message: 'Nouvelle catégorie insérée avec succès!',
            data: newCategory
        });
    
      } catch (error) {
        res.status(500).json({
          message: error.message
        });
      }
    });
}