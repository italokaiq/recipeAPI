import { NextFunction, Request, Response } from "express";
import { recipeList } from "../database/database";
import { AppError } from "../errors/appError";

export class IsRecipeIdValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const recipe = recipeList.find((recipe) => recipe.id === Number(id));

    if (!recipe) {
      throw new AppError("Recipe not found.", 404);
    }

    res.locals.recipe = recipe;

    next();
  }
}