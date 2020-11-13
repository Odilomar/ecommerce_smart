import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home/Home";

interface SelectedMenu {
  idMenu: number;
  idSubMenu: number;
}

const DEFAULT_SELECTED_MENU: SelectedMenu = {
  idMenu: 1,
  idSubMenu: 2,
};

const SelectedMenuContext = createContext(DEFAULT_SELECTED_MENU);

function App() {
  return (
    <SelectedMenuContext.Provider value={DEFAULT_SELECTED_MENU}>
      <Home />
    </SelectedMenuContext.Provider>
  );
}

export default App;
