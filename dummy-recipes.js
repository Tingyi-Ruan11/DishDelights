// import fs from 'fs';
// import path from 'path';

// const fs = require('fs');
// const path = require('path');

// const EVENTS_FILE_PATH = path.join(__dirname, 'events.json');
// const EVENTS_FILE_PATH = path.join("dummy-recipes.json");
function getRecipesFromFile() {
  // try {
  //   const recipesData = fs.readFileSync(EVENTS_FILE_PATH, 'utf-8');
  //   return JSON.parse(recipesData);
  // } catch (error) {
  //   console.error('Error reading recipes file:', error);
  //   return [];
  // }
  return [
    {
      recipeId: "r1",
      title: "Chocolate Cake",
      description: "Delicious and rich chocolate cake...",
      ingredients: [
        "Cocoa",
        "Flour",
        "Sugar",
        "Eggs",
        "Butter",
        "Vanilla extract",
        "Baking powder",
        "Salt",
        "Milk",
      ],
      instructions:
        "1. Preheat the oven to 350°F (175°C). \n2. In a mixing bowl, combine cocoa, flour, sugar, baking powder, and salt. \n3. Add eggs, butter, vanilla extract, and milk to the dry ingredients. Mix until smooth. \n4. Pour the batter into a greased cake pan. \n5. Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean. \n6. Let the cake cool before serving. Enjoy!",
      category: ["Desserts", "Cakes"],
      imageUrls: [
        "images/recipe1.jpg",
        "images/recipe2.jpg",
        "images/recipe3.jpg",
      ],
    },
    {
      recipeId: "r2",
      title: "Chicken Stir-Fry",
      description: "A quick and flavorful chicken stir-fry...",
      ingredients: [
        "Chicken breast",
        "Broccoli",
        "Bell peppers",
        "Carrots",
        "Onion",
        "Garlic",
        "Ginger",
        "Soy sauce",
        "Oyster sauce",
        "Cornstarch",
        "Vegetable oil",
      ],
      instructions:
        "1. Slice chicken breast and marinate with soy sauce, ginger, and cornstarch. \n2. Heat vegetable oil in a wok or large skillet over high heat. \n3. Add minced garlic and onion, stir-fry until fragrant. \n4. Add marinated chicken and cook until browned. \n5. Add sliced broccoli, bell peppers, and carrots, stir-fry until vegetables are tender. \n6. Season with soy sauce and oyster sauce. \n7. Serve hot with rice or noodles. Enjoy!",
      category: ["Main Dishes", "Asian Cuisine"],
      imageUrls: [
        "images/recipe2.jpg",
        "https://example.com/chicken-stir-fry1.jpg",
        "https://example.com/chicken-stir-fry2.jpg",
      ],
    },
    {
      recipeId: "r3",
      title: "Caprese Salad",
      description:
        "A simple and refreshing salad with tomatoes, mozzarella, and basil...",
      ingredients: [
        "Tomatoes",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Extra virgin olive oil",
        "Balsamic vinegar",
        "Salt",
        "Black pepper",
      ],
      instructions:
        "1. Slice tomatoes and fresh mozzarella cheese into thin slices. \n2. Arrange tomato and mozzarella slices on a plate, alternating with fresh basil leaves. \n3. Drizzle extra virgin olive oil and balsamic vinegar over the salad. \n4. Season with salt and black pepper to taste. \n5. Serve immediately as a side dish or appetizer. Enjoy!",
      category: ["Salads", "Italian Cuisine"],
      imageUrls: [
        "images/recipe3.jpg",
        "https://example.com/caprese-salad1.jpg",
        "https://example.com/caprese-salad2.jpg",
      ],
    },
  ]
}

export function saveRecipesToFile(recipes) {
  try {
    fs.writeFileSync(EVENTS_FILE_PATH, JSON.stringify(recipes, null, 2));
  } catch (error) {
    console.error("Error saving recipes to file:", error);
  }
}

export function getFeaturedRecipes() {
  const recipes = getRecipesFromFile();
  return recipes;
  // return recipes.filter((recipe) => recipe.isFeatured);
  // TODO :这里没有写特色
}

export function getAllRecipes() {
  return getRecipesFromFile();
}

export function getFilteredRecipes(dateFilter) {
  const { year, month } = dateFilter;
  const recipes = getRecipesFromFile();

  return recipes.filter((recipe) => {
    const recipeDate = new Date(recipe.date);
    return (
      recipeDate.getFullYear() === year && recipeDate.getMonth() === month - 1
    );
  });
}

export function getRecipeById(id) {
  const recipes = getRecipesFromFile();
  return recipes.find((recipe) => recipe.recipeId === id);
}

export function addRecipe(newRecipe) {
  const recipes = getRecipesFromFile();
  recipes.push(newRecipe);
  saveRecipesToFile(recipes);
  return recipes;
}
