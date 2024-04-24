import { useState } from 'react';
import { useRecipes } from "@/store/recipe-context";
import { BiSearch } from "react-icons/bi";

const Search = () => {

  const [inputValue, setInputValue] = useState(''); // 管理输入框的状态
  const { fetchRecipesBySearch } = useRecipes(); // 从 Context 获取搜索方法

   // 处理输入变化
   const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // 处理点击搜索或输入后的回车键
  const handleSearch = () => {
    fetchRecipesBySearch(inputValue); // 使用当前输入值调用搜索方法
  };

  // 处理按键事件，特别是回车键
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
          placeholder="any name"
          className="border-none w-full focus:outline-none text-center"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <div className="p-2 bg-amber-600 rounded-full text-white">
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  );
};

export default Search;
