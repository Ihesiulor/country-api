import React, { useEffect, useContext } from "react";
import Search from "../search";
import List from "../list";
import Pagination from "../pagination";
import Details from "../details";
import Loading from "../loading";

import SiteContext from "../../context/SiteContext";

const Page = () => {
  const { loading, error, details, handleFetch } = useContext(SiteContext);

  useEffect(() => {
    handleFetch();
    // eslint-disable-next-line
  }, [details]);

  if (loading) return <Loading />;
  if (error) return <Loading error={true} />;
  if (!!details) return <Details />;

  return (
    <div className="w-full px-6 flex flex-col" id="list">
      <div className="w-full mb-6 flex flex-col">
        <Search />
      </div>
      <div className="w-full flex flex-col">
        <List />
      </div>
      <Pagination className="w-1/3 px-2 my-6 flex justify-between" />
    </div>
  );
};

export default Page;
