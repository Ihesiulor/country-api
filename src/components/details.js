import React, { useContext, useState, useEffect } from "react";
import { Left as Back } from "./icons/left";

import SiteContext from "../context/SiteContext";

const Details = ({ className }) => {
  const [border, setBorder] = useState([]);
  const {
    isDark,
    details,
    handleLoading,
    handleDetails,
    handleError,
  } = useContext(SiteContext);
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    currencies,
    topLevelDomain,
    languages,
    borders,
  } = details;

  useEffect(() => {
    if (borders.length > 0) {
      fetch(
        `https://restcountries.eu/rest/v2/alpha?codes=${borders.join(";")}`,
        { cache: "reload" }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setBorder(data);
        })
        .catch(() => handleError(true))
        .finally(handleLoading(false));
    }
    // eslint-disable-next-line
  });

  return (
    <div className="w-full px-8 flex flex-col">
      <div className="w-full my-6 flex">
        <div
          className={`${
            isDark ? "bg-dark-blue-100" : "bg-dark-white"
          } px-4 py-2 flex items-center justify-center rounded-sm shadow-md cursor-pointer`}
          onClick={() => handleDetails(false)}
        >
          <Back />
          <span className="ml-2">Back</span>
        </div>
      </div>
      <div className="my-6">
        <div
          className={`${className} flex flex-col lg:flex-row lg:justify-between`}
        >
          <div className="w-full lg:w-2/5 my-3 flex items-center overflow-hidden">
            <img src={flag} alt={`flag of ${name}`} />
          </div>
          <div className="w-full lg:w-1/2 my-6 flex flex-col">
            <div className="w-full flex flex-col">
              <span className="my-6 text-2xl font-bold">{name}</span>
              <div className="w-full my-6 flex flex-col lg:flex-row justify-between font-semibold">
                <div className="mb-6 w-full flex flex-col text-lg">
                  <span className="mt-2">
                    Native Name:
                    <span className="font-thin">{nativeName}</span>
                  </span>
                  <span className="mt-2">
                    Population: <span className="font-thin">{population}</span>
                  </span>
                  <span className="mt-2">
                    Region:
                    <span className="font-thin">{region}</span>
                  </span>
                  <span className="mt-2">
                    Sub: <span className="font-thin">{subregion}</span>
                  </span>
                  <span className="mt-2">
                    Capital:
                    <span className="font-thin">{capital}</span>
                  </span>
                </div>
                <div className="w-full my-6 lg:m-0 flex flex-col">
                  <span className="mt-2">
                    Top Level Domain:
                    <span className="font-thin">{topLevelDomain}</span>
                  </span>
                  <span className="mt-2">
                    Currencies:
                    <span className="font-thin">
                      {currencies.map(({ name }) => `${name},`)}
                    </span>
                  </span>
                  <span className="mt-2">
                    Languages:
                    <span className="font-thin">
                      {languages.map(({ name }) => `${name},`)}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-col lg:flex-row">
              <span className="my-3 text-xl font-semibold">
                Border Countries:
              </span>
              <div className="mt-3 lg:ml-6 flex flex-wrap">
                {border.map((data, i) => (
                  <div
                    key={i}
                    onClick={()=>handleDetails(data)}
                    className={`${
                      isDark ? "bg-dark-blue-100" : "bg-dark-white"
                    } mr-3 mb-3 px-4 py-2 flex flex-initial items-center justify-center rounded-md shadow-md`}
                  >
                    <span className="overflow-ellipsis overflow-hidden">
                      {data.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
