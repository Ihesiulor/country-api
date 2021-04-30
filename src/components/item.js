const Item = ({ className, key, onClick, data }) => {
  const { capital, flag, name, population, region } = data;
  return (
    <div
      style={{ "--animation-order": key }}
      onClick={() => onClick()}
      className={`${className} grid grid-rows-2 rounded-lg shadow-md`}
    >
      <div className="w-full min-h-12 overflow-hidden rounded-t-lg">
        <img className="w-full" src={flag} alt={`flag of ${name}`} />
      </div>
      <div className="w-full px-4 flex items-center">
        <div className="w-full h-full flex flex-col justify-evenly">
          <span className="text-xl font-bold">{name}</span>
          <div className="w-full mb-2 flex flex-col text-lg font-thin">
            <p className="">
              <span className="font-semibold">Population:</span> {population}
            </p>
            <p className="">
              <span className="font-semibold">Region:</span> {region}
            </p>
            <p className="">
              <span className="font-semibold">Capital:</span> {capital}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
