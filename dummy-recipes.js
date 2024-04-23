

// import fs from 'fs';
// import path from 'path';

const fs = require('fs');
const path = require('path');

// const EVENTS_FILE_PATH = path.join(__dirname, 'events.json');
const EVENTS_FILE_PATH = path.join('dummy-recipes.json');
function getRecipesFromFile() {
  try {
    const recipesData = fs.readFileSync(EVENTS_FILE_PATH, 'utf-8');
    return JSON.parse(recipesData);
  } catch (error) {
    console.error('Error reading recipes file:', error);
    return [];
  }
}

export function saveRecipesToFile(recipes) {
  try {
    fs.writeFileSync(EVENTS_FILE_PATH, JSON.stringify(recipes, null, 2));
  } catch (error) {
    console.error('Error saving recipes to file:', error);
  }
}

export function getFeaturedRecipes() {
  const recipes = getRecipesFromFile();
  return recipes
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
    return recipeDate.getFullYear() === year && recipeDate.getMonth() === month - 1;
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
