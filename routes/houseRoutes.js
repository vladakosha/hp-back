import { Router } from "express";
import House from "../models/house.js";

const houseRouter = Router();

houseRouter.get("/houses", async (req, res) => {
  const houses = await House.find();
  res.json(houses);
});

houseRouter.get("/houses/:houseID", async (req, res) => {
  const { houseID } = req.params;
  const house = await House.findById(houseID);
  res.json(house);
});

houseRouter.post("/houses", async (req, res) => {
  const newHouse = await House.create(req.body);
  res.json(newHouse);
});

houseRouter.put("/houses/:houseID", async (req, res) => {
  const { houseID } = req.params;
  const updatedHouse = await House.findByIdAndUpdate(houseID, req.body);
  res.json(updatedHouse);
});

export default houseRouter;
