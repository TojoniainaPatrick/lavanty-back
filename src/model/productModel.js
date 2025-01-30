module.exports = ( sequelize, DataTypes ) => {
    const Product = sequelize.define('product',{
        productId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productName: DataTypes.STRING,
        productDescription: DataTypes.STRING,
        productImageURl: DataTypes.STRING,
        productStatus: {
            type: DataTypes.STRING,
            defaultValue: "disponible"
        }
    })

    return Product
}