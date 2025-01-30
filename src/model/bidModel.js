module.exports = ( sequelize, DataTypes ) => {
    const Bid = sequelize.define('bid',{
        bidId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        bidAmount: DataTypes.FLOAT,
        bidStatus: {
            type: DataTypes.STRING,
            defaultValue: "en cours"
        }
    })

    return Bid
}