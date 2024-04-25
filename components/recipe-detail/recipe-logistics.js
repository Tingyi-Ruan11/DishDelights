import Image from "next/image";

import LogisticsItem from "./logistics-item";
import classes from "./recipe-logistics.module.css";
import { BiCategoryAlt } from "react-icons/bi";
import { TbMilk } from "react-icons/tb";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { HiOutlineCheck } from "react-icons/hi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FcIdea } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";
import { PiBowlFoodBold } from "react-icons/pi";
import { FaBowlFood } from "react-icons/fa6";

import Container from "../container";
import StepCard from "./stepCard";
import { useState } from 'react';
import ControlButtons from "./controlButton";
import { CgBowl } from "react-icons/cg";

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

  // const data = {
  //   idMeal: "52771",
  //   strMeal: "Spicy Arrabiata Penne",
  //   strDrinkAlternate: null,
  //   strCategory: "Vegetarian",
  //   strArea: "Italian",
  //   strInstructions:
  //     "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
  //   strMealThumb:
  //     "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
  //   strTags: "Pasta,Curry",
  //   strYoutube: "https://www.youtube.com/watch?v=1IszT_guI08",
  //   strIngredient1: "penne rigate",
  //   strIngredient2: "olive oil",
  //   strIngredient3: "garlic",
  //   strIngredient4: "chopped tomatoes",
  //   strIngredient5: "red chile flakes",
  //   strIngredient6: "italian seasoning",
  //   strIngredient7: "basil",
  //   strIngredient8: "Parmigiano-Reggiano",
  //   strIngredient9: "",
  //   strIngredient10: "",
  //   strIngredient11: "",
  //   strIngredient12: "",
  //   strIngredient13: "",
  //   strIngredient14: "",
  //   strIngredient15: "",
  //   strIngredient16: null,
  //   strIngredient17: null,
  //   strIngredient18: null,
  //   strIngredient19: null,
  //   strIngredient20: null,
  //   strMeasure1: "1 pound",
  //   strMeasure2: "1/4 cup",
  //   strMeasure3: "3 cloves",
  //   strMeasure4: "1 tin ",
  //   strMeasure5: "1/2 teaspoon",
  //   strMeasure6: "1/2 teaspoon",
  //   strMeasure7: "6 leaves",
  //   strMeasure8: "spinkling",
  //   strMeasure9: "",
  //   strMeasure10: "",
  //   strMeasure11: "",
  //   strMeasure12: "",
  //   strMeasure13: "",
  //   strMeasure14: "",
  //   strMeasure15: "",
  //   strMeasure16: null,
  //   strMeasure17: null,
  //   strMeasure18: null,
  //   strMeasure19: null,
  //   strMeasure20: null,
  //   strSource: null,
  //   strImageSource: null,
  //   strCreativeCommonsConfirmed: null,
  //   dateModified: null,
  // };
  const data = props.data;
  console.log("data!!!!!",data.strInstructions);

  const ingredientItems = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    const ingredientMeasure = data[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredientItems.push(
        <li key={`ingredients-${i}`} className="mb-2 flex items-center gap-2">
          {/* <HiOutlineCheck /> */}
          <CgBowl />
          {ingredient + ":     " + ingredientMeasure}
        </li>
      );
    }
  }
  const instructionsData = data.strInstructions.split("\r\n");
  const instructionsItems = [];
  for (let j = 0; j < instructionsData.length; j++) {
    const instruction = instructionsData[j];
    const sentences = instruction.split(/(?<=[.!?])\s+/);

    // 每三个句子组合成一个新的指令
    for (let i = 0; i < sentences.length; i += 3) {
        const limitedSentences = sentences.slice(i, i + 3); // 从i开始，取三个句子
        const truncatedInstruction = limitedSentences.join(' ');
        // 将处理后的指令添加到数组
        instructionsItems.push(truncatedInstruction);
    }
  }

  const [currentStep, setCurrentStep] = useState(0);

  const moveSlide = (direction) => {
      const newStep = (currentStep + direction + instructionsItems.length) % instructionsItems.length;
      setCurrentStep(newStep);
  };

  // const images = image;
  // console.log("images", images);
  return (
    <section className={classes.logistics}>
      <div className="flex text-left">
        <h1 className="flex items-center font-bold gap-2 text-xl min-[800px]:text-2xl">
        <PiBowlFoodBold size={23}/>
        <FaBowlFood size={20}/>

        {data.strMeal}
        </h1>
      </div>
      <div className={classes.image}>
        <img
          src={data.strMealThumb}
          alt={data.strMeal}
          // width={400}
          // height={400}
        />
      </div>
      <div className="flex items-center gap-1">
        <BiCategoryAlt />
        <p>
          <strong>Category:</strong> {data.strCategory}
        </p>
      </div>
      {/* <p><strong>Tags:</strong> {data.strTags}</p> */}
      <div className="flex items-center gap-1">
      <TbMilk />
      <h2>
        <strong>Ingredients:</strong>
      </h2>
      </div>

      <ul className="list-none p-0 grid grid-cols-1 min-[700px]:grid-cols-2">{ingredientItems}</ul>
      <div className="flex items-center gap-1">
      <FcIdea />
      <h2>
        <strong>Instructions:</strong>
      </h2>
      </div>
      {/* <div>
        <ul className="list-none p-0">{instructionsItems}</ul>
      </div> */}
      {/* <StepCard step={instructionsItems[currentStep]} index={currentStep} /> */}
      <StepCard
                step={instructionsItems[currentStep]}
                index={currentStep}
                prevStep={() => moveSlide(-1)}
                nextStep={() => moveSlide(1)}
                totalSteps={instructionsItems.length}
            />
      {/* <ControlButtons moveSlide={moveSlide} currentStep={currentStep} totalSteps={instructionsItems.length} /> */}
      {/* <div className={classes.imageGroup}>

        {images.map(
          (
            imageItem,
            index        
          ) => (
            <div key={index} className={classes.image}>

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
       */}
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
