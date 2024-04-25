import { useRecipes } from "@/store/recipe-context";
import Image from "next/image";
const CategoryBox = (props) => {

  const {fetchRecipesByCategory} = useRecipes();
  const selected = props.isSelected
  const handleCategoryClick = () => {
    props.onSelectedCategory(props.lable);
    fetchRecipesByCategory(props.lable)
  };
  return (
    <div
      className={`
                flex 
                flex-col 
                items-center 
                justify-center 
                gap-3
                p-3 
                border-b-2 
                hover: text-neutral-950
                hover:font-semibold
                transition 
                curcor-pointer 
                max-w-50 
                min-w-20
                
                ${selected ? `border-b-neutral-800` : `border-transparent` }
                ${selected ? `text-neutral-950 font-semibold` : `text-neutral-500` }
            `}
    onClick={handleCategoryClick}
    >  <div className="h-45 rounded-full bg-transparent hover:ring-4 hover:ring-amber-300 shadow-lg">
        <Image src={props.iconURL} width={45} height={45} className="h-45 rounded-full bg-transparent hover:ring-4 hover:ring-amber-300 shadow-lg"/></div>
        <div className="font-meidum text-sm">{props.lable}</div>

    </div>
  );
};

export default CategoryBox;
