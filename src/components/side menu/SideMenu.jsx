import logo from "../../assets/imgs/logo.svg";

const SideMenu = ({ toggleMobileSideMenu, mobileSideMenu }) => {
  return (
    <div className="z-30 h-screen fixed">
      <div
        className={`w-screen h-screen fixed top-0 xl:hidden bg-[#49494970] ${
          mobileSideMenu ? "opacity-100 visible" : "invisible opacity-0"
        }`}
        onClick={toggleMobileSideMenu}
      ></div>
      <article
        className={`bg-white shadow-md p-4 h-screen w-[260px] fixed xl:translate-x-0 xl:static xl:visible top-0 left-0 duration-300 ease ${
          mobileSideMenu
            ? "translate-x-0 visible"
            : "-translate-x-[400px] invisible"
        }`}
      >
        <div>
          <img src={logo} alt="Main Logo" />
        </div>
        <div className="text-[#727272] my-14">
          <div className="text-sm py-2">
            <span className="text-xs font-medium pb-2 block uppercase">
              home
            </span>
            <div>
              <ul className="text-sm">
                <li className=" rounded-md py-3 bg-[#58CAD6] text-[#F6F6F6] my-1 cursor-pointer">
                  <i className="fa-regular fa-house fa-fw mx-2 text-[16px]"></i>
                  Dashboard
                </li>
                <li className="hover:bg-[#F6F6F6] hover:text-[#58cad6] rounded-md py-3 my-1 cursor-pointer">
                  <i className="fa-regular fa-cart-shopping fa-fw mx-2 text-[16px]"></i>
                  eCommerce
                </li>
                <li className="hover:bg-[#F6F6F6] hover:text-[#58cad6] rounded-md py-3 my-1 cursor-pointer">
                  <i className="fa-regular fa-sparkles fa-fw mx-2 text-[16px]"></i>
                  Modern
                </li>
              </ul>
            </div>
          </div>
          <div className="text-sm py-2">
            <span className="text-xs font-medium pb-2 block uppercase">
              apps
            </span>
            <div>
              <ul className="text-sm">
                <li className="hover:bg-[#F6F6F6] hover:text-[#58cad6] rounded-md py-3 my-1 cursor-pointer">
                  <i className="fa-regular fa-address-book fa-fw mx-2 text-[16px]"></i>
                  Contact
                </li>
                <li className="hover:bg-[#F6F6F6] hover:text-[#58cad6] rounded-md py-3 my-1 cursor-pointer">
                  <i className="fa-regular fa-message-lines fa-fw mx-2 text-[16px]"></i>
                  Chats
                </li>
                <li className="hover:bg-[#F6F6F6] hover:text-[#58cad6] rounded-md py-3 my-1 cursor-pointer">
                  <i className="fa-regular fa-blog fa-fw mx-2 text-[16px]"></i>Blog
                </li>
                <li className="hover:bg-[#F6F6F6] hover:text-[#58cad6] rounded-md py-3 my-1 cursor-pointer">
                  <i className="fa-regular fa-notes fa-fw mx-2 text-[16px]"></i>
                  Notes
                </li>
                <li className="hover:bg-[#F6F6F6] hover:text-[#58cad6] rounded-md py-3 my-1 cursor-pointer">
                  <i className="fa-regular fa-user fa-fw mx-2 text-[16px]"></i>
                  Profile
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SideMenu;
