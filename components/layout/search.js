import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="text-sm font-semibold border-[1px] w-1/3 py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center text-justify w-full">
        <input
          type="text"
          placeholder="any name"
          className="border-none w-full focus:outline-none text-center"
        />
        <div className="p-2 bg-amber-600 rounded-full text-white">
          <BiSearch size={18} />
        </div>
      </div>
    </div>
  );
};

export default Search;
