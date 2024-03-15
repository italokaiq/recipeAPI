import { Router } from "express";
import { RecipeControllers } from "../controllers/recipe.controller";
import { IsRecipeIdValid } from "../middleware/isRecipeIdValid.middleware";
import { BodyValidator } from "../middleware/bodyValidator.middleware";
import { recipeCreateDataSchema, recipeUpdateDataSchema } from "../schemas/recipe.schema";

export const recipeRouter = Router();

const recipeController = new RecipeControllers();

recipeRouter.get("/", recipeController.getMany);
recipeRouter.get("/:id", IsRecipeIdValid.execute, recipeController.getOne);
recipeRouter.post("/", BodyValidator.execute(recipeCreateDataSchema), recipeController.create);
recipeRouter.patch("/:id", BodyValidator.execute(recipeUpdateDataSchema), IsRecipeIdValid.execute, recipeController.update);
recipeRouter.delete("/:id", IsRecipeIdValid.execute, recipeController.delete);