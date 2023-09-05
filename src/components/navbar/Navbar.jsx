import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const { userInfos, logOutUser } = useAuth();
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
          {/* Notifications */}
          <div className="group relative px-2">
            <div className=" rounded-full hover:bg-gray-300 cursor-pointer w-10 h-10 flex justify-center items-center">
              <FontAwesomeIcon icon="fa-solid fa-bell" className="text-2xl" />
            </div>
            <div className="group-hover:translate-y-0 text-[#444444] z-20 translate-y-4 w-[340px] p-6 group-hover:opacity-100 opacity-0 group-hover:visible duration-200 origin-top-right invisible overflow-hidden absolute -right-12 sm:right-0 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] rounded-md">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Notifications</span>
                <span className="text-white bg-[#F3A48B] text-xs rounded-full p-1">
                  5 New
                </span>
              </div>
              <div className="my-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-14">
                    <img
                      src="https://flexy-vue3-main-admin.vercel.app/assets/user-1-6d05e3ce.jpg"
                      alt="Roman"
                      className="w-full rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Roman Joined the Team!</p>
                    <span className="text-sm text-[#585858]">
                      Congratulate him
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-14">
                    <img
                      src="https://flexy-vue3-main-admin.vercel.app/assets/user-2-8a001bcb.jpg"
                      alt="Roman"
                      className="w-full rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">New message received</p>
                    <span className="text-sm text-[#585858]">
                      Salma sent you new message
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-14">
                    <img
                      src="https://flexy-vue3-main-admin.vercel.app/assets/user-3-94da4ac7.jpg"
                      alt="Roman"
                      className="w-full rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">New Payment received</p>
                    <span className="text-sm text-[#585858]">
                      Check your earnings
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-14">
                    <img
                      src="https://flexy-vue3-main-admin.vercel.app/assets/user-4-a9b2728d.jpg"
                      alt="Roman"
                      className="w-full rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Jolly completed tasks</p>
                    <span className="text-sm text-[#585858]">
                      Assign her new tasks
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-14">
                    <img
                      src="https://flexy-vue3-main-admin.vercel.app/assets/user-5-77f60b86.jpg"
                      alt="Roman"
                      className="w-full rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">New Payment received</p>
                    <span className="text-sm text-[#585858]">
                      Check your earnings
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button className="border border-[#F3A48B] duration-200 text-[#F3A48B] hover:text-white hover:bg-[#F3A48B] w-full rounded-md py-1">
                  See All Notifications
                </button>
              </div>
            </div>
          </div>
          {/* user profile */}
          <div className="group relative px-2">
            <div className="w-10 rounded-full hover:bg-gray-300 cursor-pointer">
              <img
                src={userInfos.user_metadata.avatar_url}
                alt={userInfos.user_metadata.name}
              />
            </div>
            <div className="group-hover:translate-y-0 text-[#444444] z-20 translate-y-4 w-[360px] p-6 group-hover:opacity-100 opacity-0 group-hover:visible duration-200 origin-top-right invisible overflow-hidden absolute right-0 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] rounded-md">
              <div>
                <span className="text-lg font-medium">User Profile</span>
                <div className="flex gap-2 items-center mt-4">
                  <div className="w-20">
                    <img
                      src={userInfos.user_metadata.avatar_url}
                      alt={userInfos.user_metadata.name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {userInfos.user_metadata.name}
                    </span>
                    <span className="text-sm text-[#585858] -mt-1">
                      Developer
                    </span>
                    <span className="text-sm pt-1">
                      <FontAwesomeIcon
                        icon="fa-regular fa-envelope"
                        className="text-lg align-middle"
                      />{" "}
                      {userInfos.email}
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-10 flex flex-col gap-6">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="bg-[#E5FAFB] p-4 rounded-md">
                    <img
                      src="https://flexy-vue3-main-admin.vercel.app/assets/icon-account-1e8a002e.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm hover:text-[#F3A48B]">
                      My Profile
                    </span>
                    <span className="text-[#585858] text-sm">
                      Account settings
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="bg-[#E5FAFB] p-4 rounded-md">
                    <img
                      src="https://flexy-vue3-main-admin.vercel.app/assets/icon-inbox-3c767c92.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm hover:text-[#F3A48B]">
                      My Inbox
                    </span>
                    <span className="text-[#585858] text-sm">
                      Message & Emails
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="bg-[#E5FAFB] p-4 rounded-md">
                    <img
                      src="https://flexy-vue3-main-admin.vercel.app/assets/icon-tasks-8683ced0.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm hover:text-[#F3A48B]">
                      My Tasks
                    </span>
                    <span className="text-[#585858] text-sm">
                      To-do and Daily tasks
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-[#E5FAFB] flex justify-between w-full rounded-md overflow-hidden">
                <div className="p-4 font-medium">
                  <p>Unlimited</p>
                  <p>Access</p>

                  <button className="bg-[#F3A48B] px-2 py-1 text-white rounded-md">
                    Upgrade
                  </button>
                </div>
                <img
                  src="https://flexy-vue3-main-admin.vercel.app/assets/unlimited-bg-34c15610.png"
                  alt=""
                />
              </div>
              <div className="mt-5">
                <button
                  className="border border-[#F3A48B] text-[#F3A48B] hover:text-white hover:bg-[#F3A48B] w-full rounded-md py-1"
                  onClick={() => logOutUser()}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
