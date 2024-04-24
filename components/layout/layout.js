import { Fragment, useContext } from "react";

import MainHeader from "./main-header";
import { Nunito } from "next/font/google";
import RecipeLogistics from "../recipe-detail/recipe-logistics";


const font = Nunito({
  subsets: ["latin"],
});

function Layout(props) {
  return (
    <Fragment>
      <div className={font.className}>
        <MainHeader />
        <main>{props.children}</main>
      </div>
      <RecipeLogistics />
    </Fragment>
  );
}

export default Layout;
