import React, { useContext } from "react";
import { Left as Prev, Right as Next } from "./icons";

import SiteContext from "../context/SiteContext";

const Pagination = ({ className }) => {
  const { index, result, handlePage } = useContext(SiteContext);

  return (
    <div className={className}>
      <div className="w-1/3 flex justify-between">
        <a href="#list">
          <Prev onClick={() => handlePage("prev")} />
        </a>
        <a href="#list">
          <Next onClick={() => handlePage("next")} />
        </a>
      </div>
      <div className="">
        Page <span>{index + 1}</span> of <span>{result.length}</span>
      </div>
    </div>
  );
};
export default Pagination;
