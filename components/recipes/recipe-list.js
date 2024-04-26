import RecipeItem from './recipe-item';

function RecipeList(props) {
  const { items } = props;
  console.log("items:", items);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8'>
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
