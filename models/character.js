import mongoose, { Schema } from "mongoose";

const characterSchema = new Schema({
  name: String,
  house: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'House'
  },
  patronus: String,
  wand: String,
});

const Character = mongoose.model("Character", characterSchema);

export default Character;
