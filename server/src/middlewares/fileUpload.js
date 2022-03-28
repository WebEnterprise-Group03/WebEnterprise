const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/publics/doc');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '--' + file.originalname);
  },
});

const fileUpload = multer({ storage: storage });

module.exports = fileUpload;
