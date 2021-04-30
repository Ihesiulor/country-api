import React, { useState, useContext } from "react";

import SiteContext from "../context/SiteContext";
const countries = [
  { name: "Africa" },
  { name: "Americas" },
  { name: "Asia" },
  { name: "Europe" },
  { name: "Oceania" },
];
const Search = () => {
  const { isDark, handleSearch } = useContext(SiteContext);
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between z-10">
      <div
        className={`${
          isDark ? "bg-dark-blue-100" : "bg-dark-white"
        } w-full md:w-1/2 pl-4 flex items-center my-6 rounded-lg shadow-md focus-within:ring-2`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="w-full h-4 ml-4 px-4 py-6 bg-transparent focus:outline-none"
          onChange={(e) => handleSearch(e)}
          type="search"
          name="search"
          aria-label="Search"
          placeholder="Search for a country..."
        />
      </div>
      <div
        className={`${
          isDark ? "bg-dark-blue-100" : "bg-dark-white"
        } relative w-4/5 md:w-1/4 my-6 rounded-lg shadow-md focus:outline-none focus:ring-1`}
        onClick={() => setToggle((prev) => !prev)}
      >
        <button type="button" className="relative w-full px-6 py-4">
          <span className="flex items-center justify-between">
            <span className="ml-3 block truncate">
              {selected ? selected : "Filter by Region"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={`${toggle ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}`}
              />
            </svg>
          </span>
        </button>

        <ul
          className={`${toggle ? "" : "hidden"} ${
            isDark ? "bg-dark-blue-100" : "bg-dark-white"
          } absolute w-full mt-2 shadow-md rounded-md py-1 overflow-auto cursor-pointer`}
        >
          {countries.map(({ name }, i) => (
            <li
              key={i}
              className={`${
                isDark ? "hover:bg-dark-blue-200" : "hover:bg-light-gray"
              } relative py-4 pl-3 pr-9`}
              onClick={() => {
                handleSearch({
                  target: {
                    value: name,
                    name,
                  },
                });
                setSelected(name);
              }}
            >
              <div className="flex items-center">
                <span className="ml-3">{name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
