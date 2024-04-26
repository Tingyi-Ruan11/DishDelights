import React, { createContext, useContext, useState,useEffect } from "react";
import {
  getRecipesByCategory,
  getRecipeBySearch,
  getRandomRecipes,
  getCategories
} from "@/dummy-recipes";

const RecipesContext = createContext(null);

export function useRecipes() {
  return useContext(RecipesContext);
}

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [categories,setCategories] = useState([]);
  const [isGetRandom, setIsGetRandom] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
// re-rendered once the data fetch is successful
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
      setSelectedCategory(null)
    } catch (error) {
      console.error("Failed to fetch recipes", error);
    }
  };

  useEffect(() => {
    if(recipes.length == 0){
        fetchRecommandRecipes();
    }
    
    if(categories === undefined || categories.length == 0){
      fetchCategories();
    }
    
  }, []);

  const fetchCategories = async () => {
    const categoriesData = await getCategories();
     
    setCategories(categoriesData);
  };




  const fetchRecipesBySearch = async (query) => {
    const data = await getRecipeBySearch(query);
    setSelectedCategory(null)
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
      value={{ recipes, categories, fetchRecipesBySearch, fetchRecipesByCategory,fetchRecommandRecipes,setIsGetRandom,selectedCategory,setSelectedCategory}}
    >
      {children}
    </RecipesContext.Provider>
  );
};
