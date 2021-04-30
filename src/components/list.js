import React, { useContext, useEffect } from "react";
import Item from "./item";

import SiteContext from "../context/SiteContext";

const List = () => {
  const {
    isDark,
    query,
    result,
    index,
    handleDetails,
    handleFetch,
  } = useContext(SiteContext);

  useEffect(() => {
    handleFetch();
    // eslint-disable-next-line
  }, [index, query]);

  return (
    <div className="w-full px-4 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 lg:gap-8">
      {result[index].map((data, i) => (
        <Item
          className={`${
            isDark ? "bg-dark-blue-100" : "bg-dark-white"
          } item`}
          onClick={() => handleDetails(data)}
          key={i}
          data={data}
        />
      ))}
    </div>
  );
};
export default List;
