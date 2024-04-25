import { useState } from 'react';
import { useRecipes } from "@/store/recipe-context";
import { BiSearch } from "react-icons/bi";
import { useRouter } from 'next/router';

const Search = () => {

  const [inputValue, setInputValue] = useState(''); // 管理输入框的状态
  const { fetchRecipesBySearch } = useRecipes(); // 从 Context 获取搜索方法
  const router = useRouter();

   // 处理输入变化
   const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  
  const handleSearch = () => {
    fetchRecipesBySearch(inputValue);
    router.push('/');
  };

  // 处理按键事件
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="text-sm font-semibold border-[1px] w-1/3 py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center text-justify w-full">
        <input
          type="text"
          placeholder="Find your meal"
          className="border-none w-full focus:outline-none text-center"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <div className="p-2 bg-amber-600 rounded-full text-white hover:bg-amber-700" onClick={handleSearch}>
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  );
};

export default Search;
