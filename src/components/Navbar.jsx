import { appleImg, bagImg, searchImg } from "../utils/index";
import { navLists } from "../constant";

const Navbar = () => {
  return (
    <header className="w-full !py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="" width={14} height={14} />
        <div className="flex justify-center flex-1 max-sm:hidden ">
          {navLists.map((nav) => {
            return (
              <div
                key={nav}
                className="px-5 text-grayy  text-sm cursor-pointer  hover:text-white"
              >
                {nav}
              </div>
            );
          })}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
