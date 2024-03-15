import { TRecipe } from "../interfaces/recipe.interface";

export const recipeList: TRecipe[] = [];

let id = 0;

export const generateId = () => {
  id++;
  return id;
};