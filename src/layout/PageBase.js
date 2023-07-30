import React from "react";
import { Outlet } from "react-router-dom";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PageBase = () => {

  return (
    <>
      <ToastContainer position="top-right"/>
      <Outlet />
    </>
  );
};

export default PageBase;