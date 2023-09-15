const SideMenu = ({ toggleMobileSideMenu, mobileSideMenu }) => {
  return (
    <div className="z-30">
      <div
        className={`w-screen h-screen fixed top-0 xl:hidden bg-[#49494970] ${
          mobileSideMenu ? "opacity-100 visible" : "invisible opacity-0"
        }`}
        onClick={toggleMobileSideMenu}
      ></div>
      <article className={`bg-[#5900ff] h-screen w-[250px] fixed xl:translate-x-0 xl:static xl:visible top-0 left-0 duration-300 ease ${mobileSideMenu ? 'translate-x-0 visible': '-translate-x-[400px] invisible'}`}></article>
    </div>
  );
};

export default SideMenu;
