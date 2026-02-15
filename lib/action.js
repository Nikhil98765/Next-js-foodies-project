"use server";

export async function handleFormAction(formData) {
  "use server";

  const meal = {
    title: formData.get("title"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  console.log("🚀 ~ handleFormAction ~ meal:", meal);
}