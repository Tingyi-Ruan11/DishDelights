import Link from "next/link";

import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">DishDelights</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            {/* <button onClick={logoutHandler}>Log out</button> */}
            <button >Log out</button>
          </li>
          <li>
            <Link href='/events'>Browse All Events</Link>
         </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;

// import Link from 'next/link';

// import classes from './main-header.module.css';

// function MainHeader() {
//   return (
//     <header className={classes.header}>
//       <div className={classes.logo}>
//         <Link href='/'>NextEvents</Link>
//       </div>
//       <nav className={classes.navigation}>
//         <ul>
//           <li>
//             <Link href='/events'>Browse All Events</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default MainHeader;
