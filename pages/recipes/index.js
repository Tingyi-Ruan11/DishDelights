import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// import { getAllEvents } from '../../helpers/api-util';
import { getAllRecipes } from '@/dummy-recipes';
import RecipeList from '../../components/recipes/recipe-list';
import RecipesSearch from '../../components/recipes/recipe-search';

function AllRecipesPage(props) {
  const router = useRouter();
  const { recipes } = props;

  function findRecipesHandler(category, ingredient,keywords) {
    const fullPath = `/events/${category}/${ingredient}/${keywords}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All my recipes</title>
      </Head>
      <Head>
        <title>All Recipes</title>
        <meta
          name='description'
          content='Find a lot of great recipes...'
        />
      </Head>
      <RecipesSearch onSearch={findRecipesHandler} />
      <RecipeList items={recipes} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const recipes = await getAllRecipes();
  // console.log(recipes);

  return {
    props: {
      recipes: recipes,
    },
    revalidate: 60
  };
}

export default AllRecipesPage;
