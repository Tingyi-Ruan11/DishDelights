import { Fragment, useContext } from "react";

import MainHeader from "./main-header";
import { Nunito } from "next/font/google";
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
    </Fragment>
  );
}

export default Layout;
