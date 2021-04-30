import Theme from "../theme";
const Header = ({ className, onClick }) => {
  return (
    <div
      className={`${className} sticky top-0 w-full px-4 py-8 flex justify-between shadow-md`}
    >
      <a href="/" onClick={() => onClick()} className="text-lg font-semibold">
        Where in the world?
      </a>
      <Theme />
    </div>
  );
};
export default Header;
