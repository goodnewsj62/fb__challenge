import logo from "@/public/images/icon-white.png";
import Image from "next/image";
import AppSocials from "./AppSocials";
import CenterLgScreen from "./CenterLgScreen";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <footer className="bg-primary col-span-12">
      <CenterLgScreen className="py-12 text-white">
        <div className="md:flex">
          <div className="grid gap-2">
            <div className=" flex gap-2 items-center">
              <Image width={40} height={40} src={logo} alt="logo" />
              <h2 className="font-bold text-xl">Petxirra</h2>
            </div>
            <p className="max-w-[80ch]">
              26, Walter Carrington street, off Victoria Island Lagos Nigeria
            </p>
            <div className="italic">
              <span className="mr-1">email:</span>
              <a href="mailto:goodnewsj62@gmail.com">support@petxirra.com</a>
            </div>
            <div>
              <AppSocials />
            </div>
          </div>
          <div className="md:px-16 md:grow lg:px-20">
            <div>
              <NewsLetter />
            </div>
            <div className="md:flex md:justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2">Get to know us</h3>
                <nav>
                  <ul className="grid gap-2">
                    <li>About Petxirra</li>
                    <li>Blog</li>
                    <li>Terms of use</li>
                    <li>Privacy Policy</li>
                    <li>Cookie policy</li>
                  </ul>
                </nav>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Sell on Petxirra</h3>
                <nav>
                  <ul className="grid gap-2">
                    <li>Become a seller</li>
                    <li>Sellers hub</li>
                    <li>Learn about selling</li>
                    <li>Join the dispatch team</li>
                  </ul>
                </nav>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Find Help</h3>
                <nav>
                  <ul className="grid gap-2">
                    <li>Chat with us</li>
                    <li>Help desk</li>
                    <li>Contact us</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div>{/* list of accepted payment method */}</div>
      </CenterLgScreen>
      <div className="bg-theme-shadeblu">
        <CenterLgScreen className="py-1">
          <div>&copy;2024, Petxirra, All right reserved</div>
        </CenterLgScreen>
      </div>
    </footer>
  );
};

export default Footer;
