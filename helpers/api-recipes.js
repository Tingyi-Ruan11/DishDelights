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
      return data.meals;
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
    return data.meals;  
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;  
  }

}


export async function getRecipesByCategory(selectedCategory) {
  console.log("getRecipesByCategory",selectedCategory);
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
    console.log("selectedCategoryResponse", response);
    const data = await response.json();
    console.log("selectedCategory", data.meals);
    return data.meals;  
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;  
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
