import Head from "next/head";
import RecipeList from "../components/recipes/recipe-list";
import Categories from "@/components/ui/categories";
import Container from "@/components/container";
import { useRecipes } from "@/store/recipe-context";
import Footer from "@/components/layout/footer";

function HomePage(props) {

  const { recipes } = useRecipes();

  return (
    <div>
      <Head>
        <title>Dish Delights</title>
        <meta
          name="description"
          content="Find a lot of great Dish that allow you to evolve..."
        />
      </Head>
      <Categories/>
      <Container>
        <div className="mt-0">{recipes ? <RecipeList items={recipes} /> : <p>Loading...</p>}</div>
      </Container>
      <Footer/>
    </div>
  );
}

export default HomePage;

