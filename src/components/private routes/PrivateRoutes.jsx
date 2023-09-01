import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PrivateRoutes = () => {
  const { userInfos } = useAuth();
  return userInfos ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
