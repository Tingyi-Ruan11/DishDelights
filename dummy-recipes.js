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

  // try {
  //   const recipesData = fs.readFileSync(EVENTS_FILE_PATH, 'utf-8');
  //   return JSON.parse(recipesData);
  // } catch (error) {
  //   console.error('Error reading recipes file:', error);
  //   return [];
  // }

  // return [
  //   {
  //     recipeId: "r1",
  //     title: "Chocolate Cake",
  //     description: "Delicious and rich chocolate cake...",
  //     ingredients: [
  //       "Cocoa",
  //       "Flour",
  //       "Sugar",
  //       "Eggs",
  //       "Butter",
  //       "Vanilla extract",
  //       "Baking powder",
  //       "Salt",
  //       "Milk",
  //     ],
  //     instructions:
  //       "1. Preheat the oven to 350°F (175°C). \n2. In a mixing bowl, combine cocoa, flour, sugar, baking powder, and salt. \n3. Add eggs, butter, vanilla extract, and milk to the dry ingredients. Mix until smooth. \n4. Pour the batter into a greased cake pan. \n5. Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean. \n6. Let the cake cool before serving. Enjoy!",
  //     category: ["Desserts", "Cakes"],
  //     imageUrls: [
  //       "images/recipe1.jpg",
  //       "images/recipe2.jpg",
  //       "images/recipe3.jpg",
  //     ],
  //   },
  //   {
  //     recipeId: "r2",
  //     title: "Chicken Stir-Fry",
  //     description: "A quick and flavorful chicken stir-fry...",
  //     ingredients: [
  //       "Chicken breast",
  //       "Broccoli",
  //       "Bell peppers",
  //       "Carrots",
  //       "Onion",
  //       "Garlic",
  //       "Ginger",
  //       "Soy sauce",
  //       "Oyster sauce",
  //       "Cornstarch",
  //       "Vegetable oil",
  //     ],
  //     instructions:
  //       "1. Slice chicken breast and marinate with soy sauce, ginger, and cornstarch. \n2. Heat vegetable oil in a wok or large skillet over high heat. \n3. Add minced garlic and onion, stir-fry until fragrant. \n4. Add marinated chicken and cook until browned. \n5. Add sliced broccoli, bell peppers, and carrots, stir-fry until vegetables are tender. \n6. Season with soy sauce and oyster sauce. \n7. Serve hot with rice or noodles. Enjoy!",
  //     category: ["Main Dishes", "Asian Cuisine"],
  //     imageUrls: [
  //       "images/recipe2.jpg",
  //       "https://example.com/chicken-stir-fry1.jpg",
  //       "https://example.com/chicken-stir-fry2.jpg",
  //     ],
  //   },
  //   {
  //     recipeId: "r3",
  //     title: "Caprese Salad",
  //     description:
  //       "A simple and refreshing salad with tomatoes, mozzarella, and basil...",
  //     ingredients: [
  //       "Tomatoes",
  //       "Fresh mozzarella cheese",
  //       "Fresh basil leaves",
  //       "Extra virgin olive oil",
  //       "Balsamic vinegar",
  //       "Salt",
  //       "Black pepper",
  //     ],
  //     instructions:
  //       "1. Slice tomatoes and fresh mozzarella cheese into thin slices. \n2. Arrange tomato and mozzarella slices on a plate, alternating with fresh basil leaves. \n3. Drizzle extra virgin olive oil and balsamic vinegar over the salad. \n4. Season with salt and black pepper to taste. \n5. Serve immediately as a side dish or appetizer. Enjoy!",
  //     category: ["Salads", "Italian Cuisine"],
  //     imageUrls: [
  //       "images/recipe3.jpg",
  //       "https://example.com/caprese-salad1.jpg",
  //       "https://example.com/caprese-salad2.jpg",
  //     ],
  //   },
  // ]

//   return [
//     {
//       idMeal: "52768",
//       strMeal: "Apple Frangipan Tart",
//       strDrinkAlternate: null,
//       strCategory: "Dessert",
//       strArea: "British",
//       strInstructions:
//         "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, cr\u00e8me fraiche or ice cream.",
//       strMealThumb:
//         "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
//       strTags: "Tart,Baking,Fruity",
//       strYoutube: "https://www.youtube.com/watch?v=rp8Slv4INLk",
//       strIngredient1: "digestive biscuits",
//       strIngredient2: "butter",
//       strIngredient3: "Bramley apples",
//       strIngredient4: "butter, softened",
//       strIngredient5: "caster sugar",
//       strIngredient6: "free-range eggs, beaten",
//       strIngredient7: "ground almonds",
//       strIngredient8: "almond extract",
//       strIngredient9: "flaked almonds",
//       strIngredient10: "",
//       strIngredient11: "",
//       strIngredient12: "",
//       strIngredient13: "",
//       strIngredient14: "",
//       strIngredient15: "",
//       strIngredient16: null,
//       strIngredient17: null,
//       strIngredient18: null,
//       strIngredient19: null,
//       strIngredient20: null,
//       strMeasure1: "175g/6oz",
//       strMeasure2: "75g/3oz",
//       strMeasure3: "200g/7oz",
//       strMeasure4: "75g/3oz",
//       strMeasure5: "75g/3oz",
//       strMeasure6: "2",
//       strMeasure7: "75g/3oz",
//       strMeasure8: "1 tsp",
//       strMeasure9: "50g/1\u00beoz",
//       strMeasure10: "",
//       strMeasure11: "",
//       strMeasure12: "",
//       strMeasure13: "",
//       strMeasure14: "",
//       strMeasure15: "",
//       strMeasure16: null,
//       strMeasure17: null,
//       strMeasure18: null,
//       strMeasure19: null,
//       strMeasure20: null,
//       strSource: null,
//       strImageSource: null,
//       strCreativeCommonsConfirmed: null,
//       dateModified: null,
//     },
//     {
//       idMeal: "52893",
//       strMeal: "Apple & Blackberry Crumble",
//       strDrinkAlternate: null,
//       strCategory: "Dessert",
//       strArea: "British",
//       strInstructions:
//         "Heat oven to 190C/170C fan/gas 5. Tip the flour and sugar into a large bowl. Add the butter, then rub into the flour using your fingertips to make a light breadcrumb texture. Do not overwork it or the crumble will become heavy. Sprinkle the mixture evenly over a baking sheet and bake for 15 mins or until lightly coloured.\r\nMeanwhile, for the compote, peel, core and cut the apples into 2cm dice. Put the butter and sugar in a medium saucepan and melt together over a medium heat. Cook for 3 mins until the mixture turns to a light caramel. Stir in the apples and cook for 3 mins. Add the blackberries and cinnamon, and cook for 3 mins more. Cover, remove from the heat, then leave for 2-3 mins to continue cooking in the warmth of the pan.\r\nTo serve, spoon the warm fruit into an ovenproof gratin dish, top with the crumble mix, then reheat in the oven for 5-10 mins. Serve with vanilla ice cream.",
//       strMealThumb:
//         "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
//       strTags: "Pudding",
//       strYoutube: "https://www.youtube.com/watch?v=4vhcOwVBDO4",
//       strIngredient1: "Plain Flour",
//       strIngredient2: "Caster Sugar",
//       strIngredient3: "Butter",
//       strIngredient4: "Braeburn Apples",
//       strIngredient5: "Butter",
//       strIngredient6: "Demerara Sugar",
//       strIngredient7: "Blackberrys",
//       strIngredient8: "Cinnamon",
//       strIngredient9: "Ice Cream",
//       strIngredient10: "",
//       strIngredient11: "",
//       strIngredient12: "",
//       strIngredient13: "",
//       strIngredient14: "",
//       strIngredient15: "",
//       strIngredient16: "",
//       strIngredient17: "",
//       strIngredient18: "",
//       strIngredient19: "",
//       strIngredient20: "",
//       strMeasure1: "120g",
//       strMeasure2: "60g",
//       strMeasure3: "60g",
//       strMeasure4: "300g",
//       strMeasure5: "30g",
//       strMeasure6: "30g",
//       strMeasure7: "120g",
//       strMeasure8: "\u00bc teaspoon",
//       strMeasure9: "to serve",
//       strMeasure10: "",
//       strMeasure11: "",
//       strMeasure12: "",
//       strMeasure13: "",
//       strMeasure14: "",
//       strMeasure15: "",
//       strMeasure16: "",
//       strMeasure17: "",
//       strMeasure18: "",
//       strMeasure19: "",
//       strMeasure20: "",
//       strSource:
//         "https://www.bbcgoodfood.com/recipes/778642/apple-and-blackberry-crumble",
//       strImageSource: null,
//       strCreativeCommonsConfirmed: null,
//       dateModified: null,
//     },
//     {
//       idMeal: "53049",
//       strMeal: "Apam balik",
//       strDrinkAlternate: null,
//       strCategory: "Dessert",
//       strArea: "Malaysian",
//       strInstructions:
//         "Mix milk, oil and egg together. Sift flour, baking powder and salt into the mixture. Stir well until all ingredients are combined evenly.\r\n\r\nSpread some batter onto the pan. Spread a thin layer of batter to the side of the pan. Cover the pan for 30-60 seconds until small air bubbles appear.\r\n\r\nAdd butter, cream corn, crushed peanuts and sugar onto the pancake. Fold the pancake into half once the bottom surface is browned.\r\n\r\nCut into wedges and best eaten when it is warm.",
//       strMealThumb:
//         "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
//       strTags: null,
//       strYoutube: "https://www.youtube.com/watch?v=6R8ffRRJcrg",
//       strIngredient1: "Milk",
//       strIngredient2: "Oil",
//       strIngredient3: "Eggs",
//       strIngredient4: "Flour",
//       strIngredient5: "Baking Powder",
//       strIngredient6: "Salt",
//       strIngredient7: "Unsalted Butter",
//       strIngredient8: "Sugar",
//       strIngredient9: "Peanut Butter",
//       strIngredient10: "",
//       strIngredient11: "",
//       strIngredient12: "",
//       strIngredient13: "",
//       strIngredient14: "",
//       strIngredient15: "",
//       strIngredient16: "",
//       strIngredient17: "",
//       strIngredient18: "",
//       strIngredient19: "",
//       strIngredient20: "",
//       strMeasure1: "200ml",
//       strMeasure2: "60ml",
//       strMeasure3: "2",
//       strMeasure4: "1600g",
//       strMeasure5: "3 tsp",
//       strMeasure6: "1/2 tsp",
//       strMeasure7: "25g",
//       strMeasure8: "45g",
//       strMeasure9: "3 tbs",
//       strMeasure10: " ",
//       strMeasure11: " ",
//       strMeasure12: " ",
//       strMeasure13: " ",
//       strMeasure14: " ",
//       strMeasure15: " ",
//       strMeasure16: " ",
//       strMeasure17: " ",
//       strMeasure18: " ",
//       strMeasure19: " ",
//       strMeasure20: " ",
//       strSource:
//         "https://www.nyonyacooking.com/recipes/apam-balik~SJ5WuvsDf9WQ",
//       strImageSource: null,
//       strCreativeCommonsConfirmed: null,
//       dateModified: null,
//     },
//     {
//       idMeal: "53050",
//       strMeal: "Ayam Percik",
//       strDrinkAlternate: null,
//       strCategory: "Chicken",
//       strArea: "Malaysian",
//       strInstructions:
//         "In a blender, add the ingredients for the spice paste and blend until smooth.\r\nOver medium heat, pour the spice paste in a skillet or pan and fry for 10 minutes until fragrant. Add water or oil 1 tablespoon at a time if the paste becomes too dry. Don't burn the paste. Lower the fire slightly if needed.\r\nAdd the cloves, cardamom, tamarind pulp, coconut milk, water, sugar and salt. Turn the heat up and bring the mixture to boil. Turn the heat to medium low and simmer for 10 minutes. Stir occasionally. It will reduce slightly. This is the marinade/sauce, so taste and adjust seasoning if necessary. Don't worry if it's slightly bitter. It will go away when roasting.\r\nWhen the marinade/sauce has cooled, pour everything over the chicken and marinate overnight to two days.\r\nPreheat the oven to 425 F.\r\nRemove the chicken from the marinade. Spoon the marinade onto a greased (or aluminum lined) baking sheet. Lay the chicken on top of the sauce (make sure the chicken covers the sauce and the sauce isn't exposed or it'll burn) and spread the remaining marinade on the chicken. Roast for 35-45 minutes or until internal temp of the thickest part of chicken is at least 175 F.\r\nLet chicken rest for 5 minutes. Brush the chicken with some of the oil. Serve chicken with the sauce over steamed rice (or coconut rice).",
//       strMealThumb:
//         "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
//       strTags: null,
//       strYoutube: "https://www.youtube.com/watch?v=9ytR28QK6I8",
//       strIngredient1: "Chicken Thighs",
//       strIngredient2: "Challots",
//       strIngredient3: "Ginger",
//       strIngredient4: "Garlic Clove",
//       strIngredient5: "Cayenne Pepper",
//       strIngredient6: "Turmeric",
//       strIngredient7: "Cumin",
//       strIngredient8: "Coriander",
//       strIngredient9: "Fennel",
//       strIngredient10: "Tamarind Paste",
//       strIngredient11: "Coconut Milk",
//       strIngredient12: "Sugar",
//       strIngredient13: "Water",
//       strIngredient14: "",
//       strIngredient15: "",
//       strIngredient16: "",
//       strIngredient17: "",
//       strIngredient18: "",
//       strIngredient19: "",
//       strIngredient20: "",
//       strMeasure1: "6",
//       strMeasure2: "16",
//       strMeasure3: "1 1/2 ",
//       strMeasure4: "6",
//       strMeasure5: "8",
//       strMeasure6: "2 tbs",
//       strMeasure7: "1 1/2 ",
//       strMeasure8: "1 1/2 ",
//       strMeasure9: "1 1/2 ",
//       strMeasure10: "2 tbs",
//       strMeasure11: "1 can ",
//       strMeasure12: "1 tsp ",
//       strMeasure13: "1 cup ",
//       strMeasure14: " ",
//       strMeasure15: " ",
//       strMeasure16: " ",
//       strMeasure17: " ",
//       strMeasure18: " ",
//       strMeasure19: " ",
//       strMeasure20: " ",
//       strSource:
//         "http://www.curiousnut.com/roasted-spiced-chicken-ayam-percik/",
//       strImageSource: null,
//       strCreativeCommonsConfirmed: null,
//       dateModified: null,
//     },
//   ];
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
  // const recipes = await  fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  // .then((response) => response.json())
  // .then((data) => {
  //   return data.meals;
  // })
  // .catch((error) => {
  //   console.error("Error fetching data:", error);
  // });
  // return recipes;

  // const recipes = await getRecipesFromFile();
  // const recipes = data;
  // return recipes.find((recipe) => recipe.idMeal === id);
}

export function addRecipe(newRecipe) {
  const recipes = getRecipesFromFile();
  recipes.push(newRecipe);
  saveRecipesToFile(recipes);
  return recipes;
}
