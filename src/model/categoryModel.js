module.exports = ( sequelize, DataTypes ) => {
    const Category = sequelize.define('category',{
        categoryId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        categoryName: DataTypes.STRING,
    })

    return Category
}