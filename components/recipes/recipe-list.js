import RecipeItem from './recipe-item';
import classes from './recipe-list.module.css';

function RecipeList(props) {
  const { items } = props;
  console.log("items:", items);
  // const firstImage = items

  return (
    <div className='grid grid-cols-1 min-[540px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8'>
      {items && items.length > 0 && items.map((recipe) => (
        <RecipeItem
          key={recipe.idMeal}
          data={recipe}
        />
      ))}
    </div>
  );
}

export default RecipeList;
