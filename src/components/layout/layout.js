import React, { useState } from "react";
import Header from "./header";

import SiteContext, { defaultSiteContext } from "../../context/SiteContext";
import {twoDArray} from '../../utils/helper'

const Layout = ({ className, children }) => {
  const [toggle, setToggle] = useState(defaultSiteContext.isDark);
  const [query, setQuery] = useState(defaultSiteContext.query);
  const [result, setResult] = useState(defaultSiteContext.result);
  const [loading, setLoading] = useState(defaultSiteContext.loading);
  const [error, setError] = useState(defaultSiteContext.error);
  const [details, setDetails] = useState(defaultSiteContext.details);
  const [index, setIndex] = useState(defaultSiteContext.index);

  const handleSearch = ({ target }) => {
    let { name, value } = target;

    if (!!value) {
      if (name === "search") {
          return setQuery((prev) => ({ ...prev, filter: `name/${value}` }));
        }
        return setQuery((prev) => ({ ...prev, filter: `region/${value}` }));
    }
    return setQuery((prev) => ({
      ...prev,
      filter: defaultSiteContext.query.filter,
    }));
  };

  const handlePage = (value) => {
    if (value === "next") {
      return setIndex((prev) =>
        prev + 1 > result.length - 1 ? result.length - 1 : prev + 1
      );
    }
    return setIndex((prev) => (prev - 1 <= 0 ? 0 : prev - 1));
  };

  const handleFetch=()=>{
       fetch(`${query.base}/${query.filter}`,{cache: 'reload'})
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setResult(twoDArray(data, 25)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }

  const siteContext = {
    ...defaultSiteContext,
    isDark: toggle,
    loading,
    error,
    query,
    result,
    index,
    details,
    handleToggle: () => setToggle((prev) => !prev),
    handlePage: (value) => handlePage(value),
    handleSearch: (e) => handleSearch(e),
    handleLoading: (value) => setLoading(value),
    handleError: (value) => setError(value),
    handleFetch: (value) => handleFetch(),
    handleDetails: (value) => setDetails(value),
    handleResult: (value) => setResult(value),
  };

  return (
    <SiteContext.Provider value={siteContext}>
      <div
        className={`${className} ${
          toggle
            ? "bg-dark-blue-200 text-dark-white"
            : "bg-light-gray text-light-blue"
        } relative w-screen h-screen flex flex-col overflow-hidden font-sans fill-current`}
      >
        <Header
          onClick={() => handleSearch({ target: { value: false } })}
          className={`${toggle ? "bg-dark-blue-100" : "bg-dark-white"}`}
        />
        <main className="w-full mt-2 flex flex-col overflow-auto">
          {children}
        </main>
      </div>
    </SiteContext.Provider>
  );
};
export default Layout;
