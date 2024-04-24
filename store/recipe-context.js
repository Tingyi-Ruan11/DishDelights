import React, { createContext, useContext, useState,useEffect } from "react";
import {
  getAllRecipes,
  getTwentyRandomRecipes,
  getRecipesFromFile,
  getRecipesByCategory,
  getRecipeBySearch
} from "@/dummy-recipes";

const RecipesContext = createContext(null);

export function useRecipes() {
  return useContext(RecipesContext);
}

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecommandRecipes = async () => {
    try {
      const data = await getRecipesFromFile();
      setRecipes(data);
    } catch (error) {
      console.error("Failed to fetch recipes", error);
    }
  };

  // Fetch recipes on initial load
  useEffect(() => {
    if(recipes.length == 0){
        fetchRecommandRecipes();
    }
    
  }, []);

  const fetchRecipesBySearch = async (query) => {
    const data = await getRecipeBySearch(query);
     
    setRecipes(data);
  };

  const fetchRecipesByCategory = async (selectedCategory) => {
    const fetchData = async () => {
      const newData = await getRecipesByCategory(selectedCategory);
      return newData;
    };

    if (selectedCategory !== null) {
      const data = await fetchData();
      setRecipes(data);
    }

    // const response = await fetch(`/api/category?id=${categoryId}`);
    // const data = await response.json();
    // setRecipes(data);
  };

  return (
    <RecipesContext.Provider
      value={{ recipes, fetchRecipesBySearch, fetchRecipesByCategory,fetchRecommandRecipes }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
