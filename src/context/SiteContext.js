import React from "react";

export const defaultSiteContext = {
  isDark: false,
  loading: true,
  error: false,
  query: {
    base: "https://restcountries.eu/rest/v2",
    filter: "all?fields=flag;name;nativeName;population;region;subregion;capital;currencies;topLevelDomain;languages;borders",
  },
  details: false,
  data: false,
  index: 0,
  result: [],
  handleToggle: () => {},
  handlePage: () => {},
  handleSearch: () => {},
  handleLoading: () => {},
  handleFetch: () => {},
  handleDetails: () => {},
  handleResult: () => {},
};

export default React.createContext(defaultSiteContext);
