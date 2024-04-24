import Image from "next/image";

import Button from "../ui/button";


import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./recipe-item.module.css";

function RecipeItem(props) {
  // const { title, image, recipeId, description, instructions, category } =
  //   props;


  const data = props.data;

  const exploreLink = `/recipes/${data.idMeal}`;

  return (
    <li className={classes.item}>
      <Image src={data.strMealThumb} alt={data.strMeal} width={250} height={160} />
      {/* {image.map((image, index) => (
        <Image src={"/" + image} alt={title} width={250} height={160} />
      ))} */}
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2 className="font-bold ">{data.strMeal}</h2>
          {/* <div className={classes.address}>
            <div>{`Category:`+category}</div>
          </div> */}
          {/* <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div> */}
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default RecipeItem;
