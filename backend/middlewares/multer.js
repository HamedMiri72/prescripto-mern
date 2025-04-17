// middlewares/multer.js
import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname); // or you can add timestamp etc
  }
});

const upload = multer({ storage });

export default upload;
