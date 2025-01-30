const { Sequelize, DataTypes, where } = require('sequelize');
const userModel = require('../model/userModel');
const productModel = require('../model/productModel')
const categoryModel = require('../model/categoryModel')
const typeModel = require('../model/typeModel')
const bidModel = require('../model/bidModel')
const auctionModel = require('../model/auctionModel')

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER_NAME,
  process.env.DATABASE_USER_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    logging: false,
    define: { freezeTableName: true }
  }
);

const User = userModel( sequelize, DataTypes )
const Product = productModel( sequelize, DataTypes )
const Category = categoryModel( sequelize, DataTypes )
const Type = typeModel( sequelize, DataTypes )
const Bid = bidModel( sequelize, DataTypes )
const Auction = auctionModel( sequelize, DataTypes )


// associations

User.hasMany( Bid, { foreignKey: 'userId' })
Bid.belongsTo( User, { foreignKey: 'userId' })

Auction.hasMany( Bid, { foreignKey: 'auctionId' })
Bid.belongsTo( Auction, { foreignKey: 'auctionId' })

Product.hasMany( Auction, { foreignKey: 'productId' })
Auction.belongsTo( Product, { foreignKey: 'productId' })

Type.hasMany( Product, { foreignKey: 'typeId' })
Product.belongsTo( Type, { foreignKey: 'typeId' })

Category.hasMany( Type, { foreignKey: 'categoryId' })
Type.belongsTo( Category, { foreignKey: 'categoryId' })


const runApp = async app => {
  await sequelize.sync()
  // await sequelize.sync({ force: true })
  .then( async _ => {
    await User.findOrCreate({ 
      where: {
      userEmail: 'admin@gmail.com',
      userName: 'admin',
      userRole: 'admin'
    },
    defaults: {
      userPassword: 'admin'
    }
  })
    app.listen( process.env.PORT, () => console.log(`App is running on port ${process.env.PORT}`) )
  })
  .catch( error => {
    console.log( error )
  })
}

module.exports = {
  runApp,
  User,
  Product,
  Bid,
  Auction,
  Type,
  Category
}
