import "./App.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
library.add(fab, fas, far);
import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./components/private routes/PrivateRoutes";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastContainer />
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
