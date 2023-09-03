import React from "react";
import Comics from "../components/Comics/Comics";
import Brands from "../components/Brands/Brands";
import { useOutletContext } from "react-router-dom";
const HomePage = (props) => {
  const context = useOutletContext();
  return (
    <div>
      <Comics searchTerm={context} />
      <Brands searchTerm={context} />
    </div>
  );
};

export default HomePage;
