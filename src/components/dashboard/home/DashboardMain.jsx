import { useAuth } from "../../../context/AuthContext";
import FinancialReport from "./financial report/FinancialReport";
import ProductSales from "./product sales/ProductSales";

const DashboardMain = () => {
  const { logOutUser, isLoggedIn, userInfos } = useAuth();
  return (
    <div className="mt-4 flex flex-col gap-6">
      <FinancialReport name={userInfos.user_metadata?.name || "Unknown User"} />
      <ProductSales />
    </div>
  );
};

export default DashboardMain;
