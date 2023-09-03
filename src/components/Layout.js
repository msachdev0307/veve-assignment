import React, { useState } from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  return (
    <div className="layout">
      <Header searchTerm={searchTerm} onSearch={searchHandler} />
      <div className="bodyLayout">
        <Outlet context={searchTerm} />
      </div>
    </div>
  );
};

export default Layout;
