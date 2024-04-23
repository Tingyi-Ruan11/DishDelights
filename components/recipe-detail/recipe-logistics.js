import Image from "next/image";

import LogisticsItem from "./logistics-item";
import classes from "./recipe-logistics.module.css";

function RecipeLogistics(props) {
  // const {
  //   title,
  //   date,
  //   id,
  //   description,
  //   ingredients,
  //   instructions,
  //   category,
  //   image,
  //   imageAlt,
  // } = props;

  // const { ...data } = props;

  const data = {
    idMeal: "52771",
    strMeal: "Spicy Arrabiata Penne",
    strDrinkAlternate: null,
    strCategory: "Vegetarian",
    strArea: "Italian",
    strInstructions:
      "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    strTags: "Pasta,Curry",
    strYoutube: "https://www.youtube.com/watch?v=1IszT_guI08",
    strIngredient1: "penne rigate",
    strIngredient2: "olive oil",
    strIngredient3: "garlic",
    strIngredient4: "chopped tomatoes",
    strIngredient5: "red chile flakes",
    strIngredient6: "italian seasoning",
    strIngredient7: "basil",
    strIngredient8: "Parmigiano-Reggiano",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: "1 pound",
    strMeasure2: "1/4 cup",
    strMeasure3: "3 cloves",
    strMeasure4: "1 tin ",
    strMeasure5: "1/2 teaspoon",
    strMeasure6: "1/2 teaspoon",
    strMeasure7: "6 leaves",
    strMeasure8: "spinkling",
    strMeasure9: "",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null,
    strSource: null,
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  };

  const ingredientitems = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    const ingredientMeasure = data[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredientitems.push(
        <LogisticsItem key={`ingredients-${i}`}>
          {classes.longText}
        {ingredient+":"+ingredientMeasure}</LogisticsItem>
      );
    }
  }

  const images = image;
  console.log("images", images);
  return (
    <section className={classes.logistics}>
      <div className={classes.imageGroup}>
        {images.map(
          (
            imageItem,
            index // 迭代 images 数组，为每个 URL 创建一个 Image 组件
          ) => (
            <div key={index} className={classes.image}>
              {" "}
              {/* 使用数组索引作为 key，但如果有更独特的标识符更好 */}
              <Image
                src={`/${imageItem}`}
                alt={imageAlt || `Image ${index}`}
                width={400}
                height={400}
              />
            </div>
          )
        )}
      </div>
      <ul className={classes.list}>
        {ingredientitems}
      </ul>
      {/* <ul className={classes.list}>
        <LogisticsItem>
          <time>{date}</time>
        </LogisticsItem>
        <LogisticsItem>
          <div className={classes.longText}>{description}</div>
        </LogisticsItem>
        <LogisticsItem>
          <div className={classes.longText}>{instructions}</div>
        </LogisticsItem>
        {ingredients.map((ingredients, index) => (
          <LogisticsItem key={`ingredients-${index}`}>
            {ingredients}
          </LogisticsItem>
        ))}

        {category.map((categoryItem, index) => (
          <LogisticsItem key={`category-${index}`}>
            {categoryItem}
          </LogisticsItem>
        ))}
      </ul> */}
    </section>
  );
}

export default RecipeLogistics;
