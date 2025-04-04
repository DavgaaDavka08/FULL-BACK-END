import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { ConnectDb } from "./DB/data-base";
import signinrouter from "./User/User-Routers/user-router";
import router from "./Food/Routers/food.routes";
import routerSignUp from "./burtguleh/sign-Router/singinRouter";
import foodCategoryRoutes from "./Food/Routers/foodCategory.routes";

const app = express();
app.use(bodyParser.json());
app.use(cors());
configDotenv();
ConnectDb();
const port = process.env.PORT;
app.use("/signin", signinrouter);
app.use("/burtguuleh", routerSignUp);
app.use("/food", router);
app.use("/api", foodCategoryRoutes);

app.listen(port, () => {
  console.log(`port is runing${port}`);
});
