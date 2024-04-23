import Link from "next/link";

// import classes from "./main-header.module.css";
import Container from "../container";
import Logo from "./logo";
import Search from "./search";

function MainHeader() {
  return (
    <header>
      <nav className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-3 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <Search />
              <p className="font-bold text-center">Make Every Dish Delightful!</p>
            </div>
          </Container>
        </div>
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
