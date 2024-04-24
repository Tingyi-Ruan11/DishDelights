import Image from "next/image";

import Button from "../ui/button";


import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./recipe-item.module.css";
import InformationCircle from "../icons/information-circle";

function RecipeItem(props) {
  const { title, image, recipeId, description, instructions, category } =
    props;

  // const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // });
  // const formattedAddress = location.replace(', ', '\n');
  // console.log("recipeId",recipeId);
  // const recipeIdStr = String(recipeId);
  // console.log("recipeIdStr", recipeIdStr);
  const exploreLink = `/recipes/${recipeId}`;

  return (
    <li className={classes.item}>
      <Image src={'/' + image[0]} alt={title} width={250} height={160} />
      {/* {image.map((image, index) => (
        <Image src={"/" + image} alt={title} width={250} height={160} />
      ))} */}
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2 className="font-bold ">{title}</h2>
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
