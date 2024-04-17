import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

const app = express()

mongoose.connect(process.env.MONGO_URI);

app.listen(8000, () => console.log(`Server running on port 8000`));