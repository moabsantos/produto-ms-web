import { Outlet } from "react-router-dom";
import LoadingSpinner from "../components/spinner/spinner";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PageBase = () => {
  return (
    <>
      <ToastContainer position="top-right"/>
      <LoadingSpinner />
      <Outlet />
    </>
  );
};

export default PageBase;