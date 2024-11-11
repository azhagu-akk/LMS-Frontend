import React from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/search" && (
        <div
          onClick={() => navigate("/search")}
          className="flex justify-between text-black  p-5 items-center md:hidden w-[300px] h-[30px] rounded-full bg-white cursor-pointer shadow-lg"
        >
          <p>Search Books..</p>
          <IoSearch />
        </div>
      )}
    </>
  );
};

export default SearchBar;
