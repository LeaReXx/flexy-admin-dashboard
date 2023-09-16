import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";
import SideMenu from "../../components/side menu/SideMenu";
import PageHeader from "../../components/page header/PageHeader";

export default function Dashboard() {
  const { logOutUser, isLoggedIn } = useAuth();
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
      <main className="w-full">
        <Navbar toggleMobileSideMenu={toggleMobileSideMenu} />
        <div className="m-auto w-full max-w-[1200px] p-4 sm:p-6">
          <PageHeader
            route={[
              { id: 1, title: "Dashboard", src: "/dashboard" },
              { id: 2, title: "Analytical", src: "/dashboard" },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
