import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../supabaseClient";
import addNotifToDom from "../components/notifications/Notifications";
import Loading from "../components/loading/Loading";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfos, setUserInfos] = useState([]);
  const [loading, setLoading] = useState(true);

  const logOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setIsLoggedIn(false);
      addNotifToDom("You are logged out", "success");
      navigate("/");
    } else {
      addNotifToDom("something went wrong, please try again", "error");
    }
  };

  const loginUser = async (email, password) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      addNotifToDom(error.message, "warning");
    } else {
      if (data.user) {
        addNotifToDom("You have successfully logged in", "success");
        setIsLoggedIn(true);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        addNotifToDom("email or password is incorrect", "error");
      }
    }
    setLoading(false);
  };

  const registerUser = async (email, password, userName) => {
    setLoading(true);
    const { data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name: userName },
      },
    });
    if (data) {
      if (data.user?.identities) {
        addNotifToDom("Registration was successful", "success");
        setIsLoggedIn(true);
      } else {
        addNotifToDom(
          "this email address has already been registered",
          "warning"
        );
      }
    } else {
      addNotifToDom("something went wrong, please try again", "error");
    }
    setLoading(false);
  };

  const checkUserStatus = async () => {
    const { data } = await supabase.auth.getUser();
    if (data.user) {
      setUserInfos(data.user);
      setIsLoggedIn(true);
    }
  };
  useEffect(() => {
    checkUserStatus();

    setTimeout(() => setLoading(false), 1000);
  }, [isLoggedIn]);

  const contextData = {
    loading,
    isLoggedIn,
    userInfos,
    logOutUser,
    loginUser,
    registerUser,
  };
  return (
    <AuthContext.Provider value={contextData}>
      <>
        <Loading isActive={loading} />
        {!loading && children}
      </>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
