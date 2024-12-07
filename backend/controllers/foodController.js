import foodModel from "../models/foodModel.js";

// Add food item controller
const addFood = async (req, res) => {
  console.log("Request Body:", req.body);
  console.log("Uploaded File:", req.file);

  const image_filename = req.file ? req.file.image : "default-image.jpg";

  console.log(image_filename)

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Error", error });
  }
};

// Correct Export
export { addFood };
