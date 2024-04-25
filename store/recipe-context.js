import React, { createContext, useContext, useState,useEffect } from "react";
import {
  getRecipesByCategory,
  getRecipeBySearch,
  getRandomRecipes
} from "@/dummy-recipes";

const RecipesContext = createContext(null);

export function useRecipes() {
  return useContext(RecipesContext);
}

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isGetRandom, setIsGetRandom] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    if(isGetRandom){
        fetchRecommandRecipes();
        setIsGetRandom(!isGetRandom)
    }
  }, [isGetRandom]);

  const fetchRecommandRecipes = async () => {
    try {
      const data = await getRandomRecipes();
      setRecipes(data);
    } catch (error) {
      console.error("Failed to fetch recipes", error);
    }
  };

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

  };

  return (
    <RecipesContext.Provider
      value={{ recipes, fetchRecipesBySearch, fetchRecipesByCategory,fetchRecommandRecipes,setIsGetRandom,selectedCategory,setSelectedCategory}}
    >
      {children}
    </RecipesContext.Provider>
  );
};
