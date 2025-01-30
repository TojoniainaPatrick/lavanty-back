module.exports = ( sequelize, DataTypes ) => {
    const Auction = sequelize.define('auction',{
        auctionId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        auctionStartingPrice: DataTypes.FLOAT,
        auctionCurrentPrice: DataTypes.FLOAT,
        auctionStartDate: DataTypes.STRING,
        auctionEndDate: DataTypes.STRING,
        auctionStatus: {
            type: DataTypes.STRING,
            defaultValue: "active"
        }
    })

    return Auction
}