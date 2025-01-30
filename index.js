require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { runApp } = require('./src/database/sequelize')

const app = express()

app
    .use( cors() )
    .use( express.json({ extended: true }))
    .use( express.urlencoded({ extended: true }))
    .use( express.static( 'public' ))

// auction routes
require('./src/routes/auction/addAuction')( app )
require('./src/routes/auction/deleteAuction')( app )
require('./src/routes/auction/editAuction')( app )
require('./src/routes/auction/getAuctionById')( app )
require('./src/routes/auction/getAuctions')( app )

// bid routes
require('./src/routes/bid/addBid')( app )
require('./src/routes/bid/deleteBid')( app )
require('./src/routes/bid/editBid')( app )
require('./src/routes/bid/getBidById')( app )
require('./src/routes/bid/getBids')( app )

// category routes
require('./src/routes/category/addCategory')( app )
require('./src/routes/category/deleteCategory')( app )
require('./src/routes/category/editCategory')( app )
require('./src/routes/category/getCategories')( app )

// product routes
require('./src/routes/product/addProduct')( app )
require('./src/routes/product/deleteProduct')( app )
require('./src/routes/product/editProduct')( app )
require('./src/routes/product/getProductById')( app )
require('./src/routes/product/getProducts')( app )
require('./src/routes/product/updateProductImage')( app )

// type routes
require('./src/routes/type/addType')( app )
require('./src/routes/type/deleteType')( app )
require('./src/routes/type/editType')( app )
require('./src/routes/type/getTypes')( app )

// user routes
require('./src/routes/user/authenticateUser')( app )
require('./src/routes/user/changePassword')( app )
require('./src/routes/user/createUser')( app )
require('./src/routes/user/deleteUser')( app )
require('./src/routes/user/editUser')( app )
require('./src/routes/user/getUserById')( app )
require('./src/routes/user/getUsers')( app )
require('./src/routes/user/updateProfilePicture')( app )

app.use(({ res }) => {
    res.status( 404 ).json({
        message: 'Impossible de trouver la ressource demandée!'
    })
})

runApp( app )