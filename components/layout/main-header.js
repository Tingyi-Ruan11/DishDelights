import Link from "next/link";
import Container from "../container";
import Logo from "./logo";
import Search from "./search";
import { PiSmileyWinkFill } from "react-icons/pi";
import { FaRegSmileWink } from "react-icons/fa";

function MainHeader() {
  return (
    <header>
      <nav className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-3 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <Search />
              <div className="flex items-center gap-1">
              <p className="font-bold text-center ">Make Every Dish Delightful!</p>
              <PiSmileyWinkFill size={30} className=" hidden md:block" />
              <FaRegSmileWink size={26} className=" hidden md:block" /></div>
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
}

export default MainHeader;

