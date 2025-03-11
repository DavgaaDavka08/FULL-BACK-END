import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { ConnectDb } from "./DB/data-base";
import allRouter from "./User/User-Routers/user-router";
import router from "../src/Food-Category/Food-Category-Routers/foodcategoryrouters";
const app = express();
app.use(bodyParser.json());
app.use(cors());
configDotenv();
ConnectDb();
const port = process.env.PORT;
app.use("/user", allRouter);
app.use("/food", router);
app.listen(port, () => {
  console.log(`port is runing${port}`);
});
