import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="px-3 flex items-center justify-between border rounded-[8px] border-black-300 shadow-custom-1">
      <div className="flex items-center">
        <CiSearch className="text-[2rem] font-medium text-black-500" />
        <input
          className="ring-0 outline-none block w-full p-3 text-base text-black-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
