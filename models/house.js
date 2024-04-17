import mongoose, { Schema } from "mongoose";

const houseSchema = new Schema({
  founder: String,
  animal: String,
  colors: String,
  element: String
});

const House = mongoose.model("house", houseSchema);

export default House;
