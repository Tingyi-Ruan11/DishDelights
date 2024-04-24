import { Fragment } from "react";
import Head from "next/head";

// import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import { getRecipeById, getFeaturedRecipes } from "@/dummy-recipes";
import RecipeSummary from "../../components/recipe-detail/recipe-summary";
import RecipeLogistics from "../../components/recipe-detail/recipe-logistics";
import RecipeContent from "../../components/recipe-detail/recipe-content";
// import ErrorAlert from "../../components/ui/error-alert";
// import Comments from "../../components/input/comments";

function RecipeDetailPage(props) {
  const recipe = props.selectedRecipe;

  if (!recipe) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{recipe.strMeal}</title>
        <meta name="description" content={recipe.description} />
      </Head>
      <RecipeSummary title={recipe.title} />
      <RecipeLogistics id={recipe.idMeal} data={recipe[0]} />
      <RecipeContent>
        <p>{recipe.description}</p>
      </RecipeContent> */}
      {/* <Comments recipeId={recipe.recipeId} /> */}
    </Fragment>
  );
}

export async function getStaticProps(context) {
  // console.log("StaticRecipe", context.params);
  const idMeal = context.params.idMeal;
  // console.log("idMealgetStaticProps",idMeal);
  // const data = context.params.data
  // const recipeId = context.params;

  const recipe = await getRecipeById(idMeal);

  return {
    props: {
      selectedRecipe: recipe,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const recipes = await getFeaturedRecipes();
  // console.log("recipesPath",recipes);

  const paths = recipes.map((recipe) => ({
    params: { idMeal: recipe.idMeal, data: recipe },
  }));
  // console.log("recipesPath", paths);
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default RecipeDetailPage;
