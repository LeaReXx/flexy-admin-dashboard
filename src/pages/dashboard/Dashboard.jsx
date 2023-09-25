import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";
import SideMenu from "../../components/side menu/SideMenu";
import PageHeader from "../../components/page header/PageHeader";
import DashboardMain from "../../components/dashboard/home/DashboardMain";

export default function Dashboard() {
  const { isLoggedIn } = useAuth();
  const [mobileSideMenu, setMobileSideMenu] = useState(false);
  const toggleMobileSideMenu = () => setMobileSideMenu(!mobileSideMenu);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-[##F6F6F6] flex">
      <SideMenu
        toggleMobileSideMenu={toggleMobileSideMenu}
        mobileSideMenu={mobileSideMenu}
      />
      <main className="w-full 2xl:pl-[250px] duration-300">
        <Navbar toggleMobileSideMenu={toggleMobileSideMenu} />
        <div className="p-4 sm:p-6">
          <div className="mx-auto w-full max-w-[1200px]">
            <PageHeader
              route={[
                { id: 1, title: "Dashboard", src: "/dashboard" },
                { id: 2, title: "Analytical", src: "/dashboard" },
              ]}
            />
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
