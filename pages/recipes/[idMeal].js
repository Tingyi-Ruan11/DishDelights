import { Fragment } from "react";
import Head from "next/head";
import { getRecipeById } from "@/helpers/api-recipes";
import RecipeLogistics from "../../components/recipe-detail/recipe-logistics";


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
      <RecipeLogistics
        id={recipe.idMeal}
        data = {recipe[0]}
      />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const idMeal = context.params.idMeal;
  const recipe = await getRecipeById(idMeal);

  return {
    props: {
      selectedRecipe: recipe,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default RecipeDetailPage;
