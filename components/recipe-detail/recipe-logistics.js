import Image from "next/image";

import LogisticsItem from "./logistics-item";
import classes from "./recipe-logistics.module.css";

function RecipeLogistics(props) {
  const {
    title,
    date,
    id,
    description,
    ingredients,
    instructions,
    category,
    image,
    imageAlt,
  } = props;

  // const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // });
  // const addressText = address.replace(", ", "\n");
  const images = image;
  console.log("images", images);
  return (
    <section className={classes.logistics}>
      {/* <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
      </div> */}
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
        <h2>{title}</h2>
        <LogisticsItem>
          <time>{date}</time>
        </LogisticsItem>
        {/* <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem> */}
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
      </ul>
    </section>
  );
}

export default RecipeLogistics;
