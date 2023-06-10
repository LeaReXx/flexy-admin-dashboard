import "./App.css";
import { ThemeProvider } from "@material-tailwind/react";
import { useRoutes } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
library.add(fab, fas, far);
import { ToastContainer } from "react-toastify";
import routes from "./routes";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <ToastContainer />
      <ThemeProvider>{router}</ThemeProvider>
    </>
  );
}

export default App;
