import { useRef } from "react";

import Button from "../ui/button";
import classes from "./recipe-search.module.css";

function RecipesSearch(props) {
  const categoryInputRef = useRef();
  const ingredientInputRef = useRef();
  const userInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedCategory = categoryInputRef.current.value;
    const selectedIngredient = ingredientInputRef.current.value;
    const userInput = userInputRef.current.value;

    props.onSearch(selectedCategory, selectedIngredient,userInput);// 将用户输入值传递给父组件的 onSearch 函数
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="category">category</label>
          <select id="category" ref={categoryInputRef}>
            <option value="Chinese">Chinese cuisine</option>
            <option value="Western">Western cuisine</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="ingredient">ingredient</label>
          <select id="ingredient" ref={ingredientInputRef}>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Meats">Meats</option>
            <option value="Seafood">Seafood</option>
            <option value="Carbohydrates">Carbohydrates</option>
            <option value="Seasonings">Seasonings</option>
            <option value="Sauces">Sauces</option>
            <option value="Dairy">Dairy</option>
            <option value="Sweeteners">Sweeteners</option>
            <option value="Grains">Grains</option>
            <option value="Legumes">Legumes</option>
            <option value="Egg">Egg</option>
          </select>
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="userInput">Keywords</label>
        <input type="text" id="userInput" ref={userInputRef} />
      </div>
      <Button>Find Recipe</Button>
    </form>
  );
}

export default RecipesSearch;
