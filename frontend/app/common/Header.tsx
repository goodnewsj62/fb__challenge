import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import CenterLgScreen from "./CenterLgScreen";
import HeaderNav from "./HeaderNav";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="">
      <CenterLgScreen>
        <button className="bg-transparent" aria-label="show navbar">
          <FaBars />
        </button>
        <div>
          <Image
            width={40}
            height={40}
            src={"/images/icon-dark.png"}
            alt="logo"
          />
          <h2>Petxirra</h2>
        </div>

        <SearchBar />
        <div>
          <HeaderNav />
        </div>
      </CenterLgScreen>
    </header>
  );
};

export default Header;
