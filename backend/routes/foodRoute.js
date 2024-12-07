import express from "express";
import { addFood } from "../controllers/foodController.js"; // Correctly referenced
import multer from "multer";

const foodRouter = express.Router();

// Multer Configuration
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Food Route
foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;
