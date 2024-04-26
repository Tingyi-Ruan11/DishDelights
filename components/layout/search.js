import { useState } from 'react';
import { useRecipes } from "@/store/recipe-context";
import { BiSearch } from "react-icons/bi";
import { useRouter } from 'next/router';

const Search = () => {

  const [inputValue, setInputValue] = useState(''); 
  const { fetchRecipesBySearch,setSelectedCategory } = useRecipes(); 
  const router = useRouter();

   const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  
  const handleSearch = () => {
    fetchRecipesBySearch(inputValue);
    setSelectedCategory(null)
    router.push('/');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="text-sm font-semibold border-[1px] w-1/3 py-2 rounded-full shadow-sm hover:shadow-md transition">
      <div className="flex flex-row items-center text-justify w-full">
        <input
          type="text"
          placeholder="Find your meal"
          className="border-none w-full focus:outline-none text-center"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <div className="p-2 bg-amber-600 rounded-full text-white hover:bg-amber-700 cursor-pointer" onClick={handleSearch}>
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  );
};

export default Search;
