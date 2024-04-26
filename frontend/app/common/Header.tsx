import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import CenterLgScreen from "./CenterLgScreen";
import HeaderNav from "./HeaderNav";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="text-primary h-[72px] sticky top-0 left-0 border-b bg-white z-[1000]">
      <CenterLgScreen className="w-full h-full gap-4 flex items-center">
        <button className="bg-transparent" aria-label="show navbar">
          <FaBars size={22} />
        </button>
        <div className="ml-4 flex gap-2 items-center">
          <Image
            width={40}
            height={40}
            src={"/images/icon-dark.png"}
            alt="logo"
          />
          <h2 className="font-bold text-xl">Petxirra</h2>
        </div>

        <div className=" lg:w-[50%] mx-auto">
          <SearchBar />
        </div>
        <div>
          <HeaderNav />
        </div>
      </CenterLgScreen>
    </header>
  );
};

export default Header;
