import { generateId, recipeList } from "../database/database";
import {
  TRecipe,
  TRecipeCreateData,
  TRecipeUpdateData,
} from "../interfaces/recipe.interface";

export class RecipeService {
  getMany(search?: string): TRecipe[] {
    if (search) {
      const indexSearch = recipeList.filter((recipe) =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
      );

      return indexSearch;
    }

    return recipeList;
  }

  getOne(recipe: TRecipe) {
    return recipe;
  }

  create(data: TRecipeCreateData): TRecipe {
    const newRecipe: TRecipe = {
      id: generateId(),
      title: data.title,
      content: data.content,
      steps: data.steps,
    };

    recipeList.push(newRecipe);

    return newRecipe;
  }

  update(currentRecipe: TRecipe, data: TRecipeUpdateData): TRecipe {
    const updateRecipe = { ...currentRecipe, ...data } as TRecipe;

    const index = recipeList.findIndex(
      (recipe) => recipe.id === currentRecipe.id
    );

    recipeList.splice(index, 1, updateRecipe);

    return updateRecipe;
  }

  //   update(id: number, data: TRecipeUpdateData) {
  //     const currentRecipeIndex = recipeList.findIndex(recipe => recipe.id === id)

  //     if (currentRecipeIndex !== -1) {
  //         const updateRecipe = {...recipeList[currentRecipeIndex], ...data}
  //         recipeList.splice(currentRecipeIndex, 1, updateRecipe)

  //         return updateRecipe
  //     }
  //   }

  delete(id: number) {
    const index = recipeList.findIndex((recipe) => recipe.id === id);

    recipeList.splice(index, 1);
  }
}
