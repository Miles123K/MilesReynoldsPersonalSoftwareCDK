import React from "react";
import "./App.css";
import "@cloudscape-design/global-styles/index.css";
import { AppLayout } from "@cloudscape-design/components";
import { SideNav } from "./navigation/SideNav";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Education } from "./pages/Education";
import { Employment } from "./pages/Employment";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { JiuJitsu } from "./pages/JiuJitsu";
import { Personal } from "./pages/Personal";

function App() {
  return (
    <AppLayout
      navigation={<SideNav />}
      content={
        <HashRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/education" Component={Education} />
            <Route path="/employment" Component={Employment} />
            <Route path="/contact" Component={Contact} />
            <Route path="/projects" Component={Projects} />
            <Route path="/jiu-jitsu" Component={JiuJitsu} />
            <Route path="/personal" Component={Personal} />
          </Routes>
        </HashRouter>
      }
    />
  );
}

export default App;
