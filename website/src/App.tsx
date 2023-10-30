import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@cloudscape-design/global-styles/index.css";
import { AppLayout } from "@cloudscape-design/components";
import { SideNav } from "./navigation/SideNav";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Education } from "./pages/Education";

function App() {
  return (
    <AppLayout
      navigation={<SideNav />}
      content={
        <HashRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/education" Component={Education} />
          </Routes>
        </HashRouter>
      }
    />
  );
}

export default App;
