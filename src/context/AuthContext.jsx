import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userInfos: null,
  logOut: () => {},
});

export default AuthContext;