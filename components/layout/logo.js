import { useRecipes } from "@/store/recipe-context";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { setIsGetRandom, setSelectedCategory } = useRecipes();
  const handleClick = () => {
    setSelectedCategory(null);
    setIsGetRandom(true);
  };

  return (
    <div
      className="flex flex-row items-center justify-between gap-2"
      onClick={handleClick}
    >
      <Image
        href="/"
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height="40"
        width="40"
        src="/logo.svg"
      />
      <Link href="/" className="font-bold">
        Dish Delights
      </Link>
    </div>
  );
};

export default Logo;
