import React, { useContext } from "react";

import SiteContext from "../context/SiteContext";

const Loading = ({ error } = { error: false }) => {
  const { isDark } = useContext(SiteContext);

  if (error) {
    return (
      <div class="w-full h-screen flex items-center justify-center">
        <span>
          Something went wrong, please <a href="/">reload</a>.
        </span>
      </div>
    );
  }
  return (
    <div class="w-full h-screen flex items-center justify-center">
      <div class="dots">
        <div
          className={`${isDark ? "bg-dark-white" : "bg-dark-blue-100"}`}
        ></div>
        <div
          className={`${isDark ? "bg-dark-white" : "bg-dark-blue-100"}`}
        ></div>
        <div
          className={`${isDark ? "bg-dark-white" : "bg-dark-blue-100"}`}
        ></div>
      </div>
    </div>
  );
};
export default Loading;
