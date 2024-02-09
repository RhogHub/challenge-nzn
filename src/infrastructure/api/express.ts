import express, {Express} from "express";
import { searchRoute } from "./routes/search.route";

export const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/search", searchRoute);