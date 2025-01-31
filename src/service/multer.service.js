const multer = require("multer");
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname.split('.')[0] + path.extname(file.originalname));
    }
  });
  
exports.upload = multer({ storage });