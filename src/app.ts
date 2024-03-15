import "express-async-errors";
import express, { json } from "express";
import { recipeRouter } from "./routes/recipe.router";
import { HandleError } from "./errors/handleError";
import helmet from "helmet";

export const app = express();

app.use(helmet());
app.use(json());
app.use("/recipes", recipeRouter);
app.use(HandleError.execute);