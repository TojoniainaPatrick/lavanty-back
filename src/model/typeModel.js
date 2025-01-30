module.exports = ( sequelize, DataTypes ) => {
    const Type = sequelize.define('type',{
        typeId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        typeName: DataTypes.STRING,
    })

    return Type
}