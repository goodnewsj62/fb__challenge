import CenterLgScreen from "./CenterLgScreen";

const TopNav = () => {
  return (
    <CenterLgScreen className="bg-white col-span-12 h-fit hidden py-4 lg:block">
      <nav>
        <ul className="gap-6 flex  xl:gap-10">
          <li>Toys</li>
          <li>Veterinary</li>
          <li>Pet facts</li>
          <li>Foods</li>
          <li>Grooming accessories</li>
          <li>Tips/blog</li>
        </ul>
      </nav>
    </CenterLgScreen>
  );
};

export default TopNav;
