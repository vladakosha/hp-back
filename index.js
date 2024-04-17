import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import characterRouter from "./routes/characterRoutes.js"
import houseRouter from "./routes/houseRoutes.js";

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", characterRouter, houseRouter);

mongoose.connect(process.env.MONGO_URI);

app.get('/', (req, res) => {
    res.send ('hallo, wizard')
})

app.listen(8000, () => console.log(`Server running on port 8000`));