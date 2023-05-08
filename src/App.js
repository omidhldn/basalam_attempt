import { useState } from "react";
import "./App.css";
import HeaderDesktop from "./component/layout/HeaderDesktop";
import MegaMenu from "./component/layout/MegaMenu";

function App() {
  const [isLogin, setIsLoggedIn] = useState(false);

  return (
    <>
      <HeaderDesktop />
    </>
  );
}

export default App;
