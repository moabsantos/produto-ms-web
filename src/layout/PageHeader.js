import React, { useContext } from "react"
import { Outlet } from "react-router-dom";
import Header from "./Header";

import LoadingSpinner from "../components/spinner/spinner"
import spinnerContext from "../components/spinner/spinnnerContext";

const PageHeader = () => {

  const { spinnerAtivo } = useContext(spinnerContext);

  return (
    <>
        <Header />
        
          { spinnerAtivo && <LoadingSpinner /> }
          { !spinnerAtivo && <Outlet /> }
       
    </>
  );
};

export default PageHeader;