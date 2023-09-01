import "./App.css";
import { ThemeProvider } from "@material-tailwind/react";
import { useRoutes } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
library.add(fab, fas, far);
import { ToastContainer } from "react-toastify";
import routes from "./routes";
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import Loading from "./components/loading/Loading";
import addNotifToDom from "./components/notifications/Notifications";
import { useNavigate } from "react-router-dom";
function App() {
  const router = useRoutes(routes);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfos, setUserInfos] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  const logOut = () => {
    async function logOutUser() {
      const { error } = await supabase.auth.signOut();
      if (!error) {
        setIsLoggedIn(false);
        addNotifToDom("You are logged out", "success");
        navigate("/");
      } else {
        addNotifToDom("something went wrong, please try again", "error");
      }
    }
    logOutUser();
  };

  useEffect(() => {
    async function getMe() {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setUserInfos(data.user);
        setIsLoggedIn(true);
      }
      setPageLoading(false);
    }
    getMe();
  }, [isLoggedIn]);
  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          userInfos,
          logOut,
        }}
      >
        <ToastContainer />
        <Loading isActive={pageLoading} />
        <ThemeProvider>{router}</ThemeProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
