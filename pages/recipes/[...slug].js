import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Head from "next/head";

// import { getFilteredEvents } from '../../helpers/api-util';
// import { getFilteredEvents } from "@/dummy-data";
import RecipeList from "../../components/recipes/recipe-list";
import ResultsTitle from "../../components/recipes/results-title";
import Button from "../../components/ui/button";
// import ErrorAlert from "../../components/ui/error-alert";

function FilteredRecipesPage(props) {
  const [loadedRecipes, setLoadedRecipes] = useState();
  const router = useRouter();

  const filterData = router.query.slug;
  // TODO: 把filter逻辑写到dummy里，再import
  const { data, error } = useSWR(
    "https://nextjs-course-c81cc-default-rtdb.firebaseio.com/events.json"
  );

  useEffect(() => {
    if (data) {
      const recipes = [];

      for (const key in data) {
        recipes.push({
          id: key,
          ...data[key],
        });
      }

      setLoadedRecipes(recipes);
    }
  }, [data]);

  let pageHeadData = (
    <Head>
      <title>Filtered Recipes</title>
      <meta name="description" content={`A list of filtered recipes.`} />
    </Head>
  );

  if (!loadedRecipes) {
    return (
      <Fragment>
        {pageHeadData}
        <p className="center">Loading...</p>
      </Fragment>
    );
  }

  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  // pageHeadData = (
  //   <Head>
  //     <title>Filtered Recipes</title>
  //     <meta
  //       name='description'
  //       content={`All events for ${numMonth}/${numYear}.`}
  //     />
  //   </Head>
  // );

  // if (
  //   isNaN(numYear) ||
  //   isNaN(numMonth) ||
  //   numYear > 2030 ||
  //   numYear < 2021 ||
  //   numMonth < 1 ||
  //   numMonth > 12 ||
  //   error
  // ) {
  //   return (
  //     <Fragment>
  //       {pageHeadData}
  //       <ErrorAlert>
  //         <p>Invalid filter. Please adjust your values!</p>
  //       </ErrorAlert>
  //       <div className='center'>
  //         <Button link='/events'>Show All Recipes</Button>
  //       </div>
  //     </Fragment>
  //   );
  // }

  // const filterRecipes = loadedRecipes.filter((recipe) => {
  //   const recipeDate = new Date(recipe.date);
  //   return (
  //     recipeDate.getFullYear() === numYear &&
  //     recipeDate.getMonth() === numMonth - 1
  //   );

  // });

  const filterRecipes = loadedRecipes;
  // if (!filterRecipes || filterRecipes.length === 0) {
  if (!filterRecipes || filterRecipes.length === 0) {
    return (
      <Fragment>
        {pageHeadData}
        <ErrorAlert>
          <p>No recipes found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/recipes">Show All Recipes</Button>
        </div>
      </Fragment>
    );
  }

  const category = filterData[0];
  const ingredient = filterData[1];
  const keywords = filterData[2];
  // const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      {pageHeadData}
      <ResultsTitle
        category={category}
        ingredient={ingredient}
        keywords={keywords}
      />
      <RecipeList items={filterRecipes} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const { params } = context;

//   const filterData = params.slug;

//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: { hasError: true },
//       // notFound: true,
//       // redirect: {
//       //   destination: '/error'
//       // }
//     };
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year: numYear,
//         month: numMonth,
//       },
//     },
//   };
// }

export default FilteredRecipesPage;
