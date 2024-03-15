import { z } from "zod";

export const recipeSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    content: z.string().min(1),
    steps: z.array(z.string())
});

export const recipeCreateDataSchema = recipeSchema.omit({
    id: true
});

export const recipeUpdateDataSchema = recipeCreateDataSchema.partial();