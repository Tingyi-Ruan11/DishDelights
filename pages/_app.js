import Head from "next/head";

import Layout from "../components/layout/layout";

import "../styles/globals.css";
import { RecipesProvider } from "@/store/recipe-context";

function MyApp({ Component, pageProps }) {
  return (
    <RecipesProvider>
      <Layout>
        <Head>
          <title>Dish Delight</title>
          <meta name="description" content="Dish Delight" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </RecipesProvider>
  );
}

export default MyApp;
