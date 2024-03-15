import { z } from "zod";
import { recipeCreateDataSchema, recipeSchema, recipeUpdateDataSchema } from "../schemas/recipe.schema";

export type TRecipe = z.infer<typeof recipeSchema>;
export type TRecipeCreateData = z.infer<typeof recipeCreateDataSchema>;
export type TRecipeUpdateData = Partial<z.infer<typeof recipeCreateDataSchema>>; // Não está funcionando

// export type TRecipeUpdateData = Partial<TRecipeCreateData>; // Funciona corretamente

// Funciona, porém não é prático
// export interface TRecipeUpdateData {
//   title?: string;
//   content?: string;
//   steps?:string[];
// }