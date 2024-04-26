import Image from "next/image";


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
import { useState } from "react";
import { CgBowl } from "react-icons/cg";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";

function RecipeLogistics(props) {
  const data = props.data;

  const ingredientItems = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    const ingredientMeasure = data[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredientItems.push(
        <li key={`ingredients-${i}`} className="mb-2 flex items-center gap-2">
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
    for (let i = 0; i < sentences.length; i += 3) {
      const limitedSentences = sentences.slice(i, i + 3); 
      const truncatedInstruction = limitedSentences.join(" ");
      if (truncatedInstruction != "") {
        instructionsItems.push(truncatedInstruction);
      }
    }
  }

  const [currentStep, setCurrentStep] = useState(0);

  const moveSlide = (direction) => {
    const newStep =
      (currentStep + direction + instructionsItems.length) %
      instructionsItems.length;
    setCurrentStep(newStep);
  };
  const router = useRouter();

  const handleReturn = () => {
    router.push("/");
  };


  return (
    <section className={classes.logistics}>
      <div className="flex text-left">
        <h1
          
          className="flex items-center font-bold gap-2 text-xl min-[800px]:text-2xl"
        >
          <IoIosArrowBack onClick={handleReturn} color="grey" className="cursor-pointer hover:fill-black"/>
          <PiBowlFoodBold size={23} />
          <FaBowlFood size={20} />

          {data.strMeal}
        </h1>
      </div>
      <div className={classes.image}>
        <img
          src={data.strMealThumb}
          alt={data.strMeal}
        />
      </div>
      <div className="flex items-center gap-1">
        <BiCategoryAlt />
        <p>
          <strong>Category:</strong> {data.strCategory}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <TbMilk />
        <h2>
          <strong>Ingredients:</strong>
        </h2>
      </div>

      <ul className="list-none p-0 grid grid-cols-1 min-[700px]:grid-cols-2">
        {ingredientItems}
      </ul>
      <div className="flex items-center gap-1">
        <FcIdea />
        <h2>
          <strong>Instructions:</strong>
        </h2>
      </div>
      <StepCard
        step={instructionsItems[currentStep]}
        index={currentStep}
        prevStep={() => moveSlide(-1)}
        nextStep={() => moveSlide(1)}
        totalSteps={instructionsItems.length}
      />
    </section>
  );
}

export default RecipeLogistics;
