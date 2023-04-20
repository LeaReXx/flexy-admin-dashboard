import "./App.css";
import { Navigate } from "react-router-dom";
function App() {
  return <Navigate to="/login" replace={true} />;
}

export default App;
