import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { Test } from "./backend/controllers/Papeleria.controller.js"

dotenv.config();
const app = express();

app.use(cors());
mongoose.connect(process.env.url_bd)
.then(() => console.log("Todo esta bien"))
.catch((error) => console.log("No funciona"))


app.listen(4000,() => console.log("Esta funcionando, se escucha borroso"))

Test();
