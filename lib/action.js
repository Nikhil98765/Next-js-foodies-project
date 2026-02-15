"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === ''
}

export async function handleFormAction(prevState, formData) {
  "use server";

  const meal = {
    title: formData.get("title"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) || 
    !image || image.size === 0 ||
    !meal.creator_email.includes('@')
  ) {
    return {
      message: 'Invalid Input'
    };
  }

  saveMeal(meal);
  redirect('/meals');
}