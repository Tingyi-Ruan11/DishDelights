// import fs from 'fs';
// import path from 'path';

// const fs = require('fs');
// const path = require('path');

// const EVENTS_FILE_PATH = path.join(__dirname, 'events.json');
// const EVENTS_FILE_PATH = path.join("dummy-recipes.json");
export function getRecipesFromFile() {
  const initialLetter = "d"
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${initialLetter}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log("data.meals here",data);
      return data.meals;
      // 这里可以将数据传递给组件C进行重新渲染
      // 例如，通过props传递给组件A，然后A再传递给C
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export function getCategories() {
  return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then((response) => response.json())
    .then((data) => {
      return data.categories;

    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export function getRandomRecipes() {
  return fetch(`https://www.themealdb.com/api/json/v2/9973533/randomselection.php`)
    .then((response) => response.json())
    .then((data) => {
      // console.log("data.meals here",data);
      return data.meals;
      // 这里可以将数据传递给组件C进行重新渲染
      // 例如，通过props传递给组件A，然后A再传递给C
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export async function getRecipeByIngredient(ingredient) {
  console.log("getRecipeByingredient",ingredient);
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;  
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;  
  }

}

export async function getRecipeByName(name) {
  console.log("getRecipeByName",name);
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    return data.meals;  
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;  
  }

}

export async function getRecipeById(id) {
  console.log("getRecipeById",id);
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    // console.log("getRecipeById", data.meals);
    return data.meals;  // 确保返回 meals 数组或者 null
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;  // 在出错时返回 null，以确保返回值总是可序列化的
  }

}


export async function getRecipesByCategory(selectedCategory) {
  console.log("getRecipesByCategory",selectedCategory);
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
    console.log("selectedCategoryResponse", response);
    const data = await response.json();
    console.log("selectedCategory", data.meals);
    return data.meals;  // 确保返回 meals 数组或者 null
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;  // 在出错时返回 null，以确保返回值总是可序列化的
  }


}

export async function getRecipeBySearch(searchQuery) {
  const fetchByName = getRecipeByName(searchQuery);
  const fetchById = getRecipeById(searchQuery);
  const fetchByCategory = getRecipesByCategory(searchQuery);
  const fetchByIngredient = getRecipeByIngredient(searchQuery);

  try {
      // executes parallel requests
      const results = await Promise.all([fetchByName, fetchById, fetchByCategory, fetchByIngredient]);

      // merging
      const mergedResults = results.flat().filter(item => item != null);
      console.log("flatArray",mergedResults)

      // deduplication
      const uniqueRecipes = mergedResults.reduce((acc, current) => {
          if (!acc.map(recipe => recipe.idMeal).includes(current.idMeal)) {
              acc.push(current);
          }
          return acc;
      }, []);

      return uniqueRecipes;
  } catch (error) {
      console.error("Error fetching recipes:", error);
      return []; 
  }
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

export function addRecipe(newRecipe) {
  const recipes = getRecipesFromFile();
  recipes.push(newRecipe);
  saveRecipesToFile(recipes);
  return recipes;
}
