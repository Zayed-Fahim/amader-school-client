import "./App.css";
import Routes from "./Router/Routes/Routes";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Contexts/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

const App = () => {
  
  return (
    <div>
      <Routes />
      <Toaster />
    </div>
  );
};

export default App;
