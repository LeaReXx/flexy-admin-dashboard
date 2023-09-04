import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../supabaseClient";
import addNotifToDom from "../components/notifications/Notifications";
import Loading from "../components/loading/Loading";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfos, setUserInfos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const navigate = useNavigate();
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
        }, 2000);
      } else {
        addNotifToDom("email or password is incorrect", "error");
      }
    }
    setLoading(false);
  };

  const registerUser = async (email, password, userName) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: userName,
          avatar_url:
            "https://vxxglnwztthbhyxxpdfq.supabase.co/storage/v1/object/sign/avatars/avatar_default.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2F2YXRhcl9kZWZhdWx0LnBuZyIsImlhdCI6MTY5MzgxMjI2OSwiZXhwIjoxZSs1MH0.-InoCBWnmEjHd82OdMBy2EJmd3_C8lxrD0F3dyxoIlk&t=2023-09-04T07%3A24%3A30.111Z",
        },
      },
    });
    console.log(data, error);
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
    setLoading(false);
  };
  useEffect(() => {
    checkUserStatus();

    setTimeout(() => setPageLoading(false), 1000);
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
        <Loading isActive={pageLoading} />
        {!pageLoading && children}
      </>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
