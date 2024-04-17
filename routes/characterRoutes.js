import { Router } from "express";
import Character from "../models/character.js";

const characterRouter = Router();

characterRouter.get("/characters", async (req, res) => {
  const characters = await Character.find();
  res.json(characters);
});

characterRouter.get("/characters/:characterID", async (req, res) => {
  const { characterID } = req.params;
  const character = await Character.findById(characterID);
  res.json(character);
});

characterRouter.post("/characters", async (req, res) => {
  const newCharacter = await Character.create(req.body);
  res.json(newCharacter);
});

characterRouter.put("/characters/characterID", async (req, res) => {
    const { characterID } = req.params;
  const updatedCharacter = await Character.findByIdAndUpdate(characterID, req.body);
  const newCharacter = await UserActivation.findById(characterID)
  res.json(newCharacter);
});

export default characterRouter;
