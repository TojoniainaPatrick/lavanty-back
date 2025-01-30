const bcrypt = require('bcryptjs')

module.exports = ( sequelize, DataTypes ) => {
    const User = sequelize.define('user',{
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userName: DataTypes.STRING,
        userEmail: DataTypes.STRING,
        userPhoneNumber: DataTypes.STRING,
        userAddress: DataTypes.STRING,
        userPictureURl: {
            type: DataTypes.STRING,
            defaultValue: `${process.env.ENV_BASE_URL}images/defaultUserImage.png`
        },
        userRole: {
            type: DataTypes.STRING,
            defaultValue: "acheteur"
        },
        userPassword: {
            type: DataTypes.STRING,
            set(value){
                this.setDataValue('userPassword', bcrypt.hashSync(value, 10))
            }
        }
    })

    return User
}