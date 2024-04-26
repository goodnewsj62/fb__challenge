import NavAccordion from "./NavAccordion";

const SideBar = () => {
  return (
    <aside className={`fixed top-[72px] w-[280px] left-0`}>
      <nav>
        <NavAccordion title={"category"}>
          <ul></ul>
        </NavAccordion>
      </nav>
    </aside>
  );
};

export default SideBar;
