import { useRecipes } from "@/store/recipe-context";
import Container from "../container";
import CategoryBox from "./categoryBox";


const Categories = (props) => {
  const {selectedCategory,setSelectedCategory,categories} = useRecipes();
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category)

  };

  return (
    <Container>
      <div className="pt-8 flex flex-row items-center justify-between overflow-x-auto no-scrollbar ">
        {categories.map((items) => (
          <CategoryBox
            key={items.strCategory}
            lable={items.strCategory}
            description={items.strCategoryDescription}
            iconURL={items.strCategoryThumb}
            isSelected = {items.strCategory === selectedCategory}
            selectedCategory = {selectedCategory}
            onSelectedCategory = {handleSelectedCategory}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
