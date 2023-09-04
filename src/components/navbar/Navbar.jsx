import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const { userInfos } = useAuth();
  const [currentLang, setCurrentLang] = useState(
    "/src/assets/imgs/flags/uk_flag.png"
  );
  return (
    <nav>
      <div className="flex justify-between items-center p-4">
        <div className="w-10 h-10 hover:bg-gray-300 cursor-pointer flex justify-center items-center rounded-full">
          <FontAwesomeIcon icon="fa-solid fa-bars" className="text-2xl" />
        </div>
        <div className="flex items-center">
          <div className="px-2">
            <div className="w-10 h-10 hover:bg-gray-300 cursor-pointer flex justify-center items-center rounded-full">
              <img src={currentLang} alt="" className="w-7 h-7 rounded-full" />
            </div>
            <div></div>
          </div>
          <div className="px-2">
            <div className="rounded-full hover:bg-gray-300 cursor-pointer w-10 h-10 flex justify-center items-center">
              <FontAwesomeIcon
                icon="fa-solid fa-cart-shopping"
                className="text-2xl"
              />
            </div>
          </div>
          <div className="px-2">
            <div className=" rounded-full hover:bg-gray-300 cursor-pointer w-10 h-10 flex justify-center items-center">
              <FontAwesomeIcon icon="fa-solid fa-bell" className="text-2xl" />
            </div>
          </div>

          <div className="group relative px-2">
            <div className="w-10 rounded-full hover:bg-gray-300 cursor-pointer">
              <img
                src={userInfos.user_metadata.avatar_url}
                alt={userInfos.user_metadata.name}
              />
            </div>
            <div className="group-hover:translate-y-0 translate-y-4 w-[300px] group-hover:opacity-100 opacity-0 group-hover:visible duration-200 origin-top-right invisible overflow-hidden absolute right-0 bg-gray-200">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                quae, et vero veritatis dolore odit magnam? Quae voluptatem
                obcaecati aspernatur, consequatur, pariatur, inventore
                voluptatum sequi quos rem sapiente nemo repudiandae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
