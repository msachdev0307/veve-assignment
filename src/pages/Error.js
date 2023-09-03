import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import ErrorDetails from "../components/Error/ErrorDetails";
const ErrorPage = () => {
  return (
    <Fragment>
      <Header />
      <ErrorDetails />
    </Fragment>
  );
};

export default ErrorPage;
