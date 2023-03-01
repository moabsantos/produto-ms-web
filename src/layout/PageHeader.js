import { Outlet } from "react-router-dom";
import Header from "./Header";

const PageHeader = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  );
};

export default PageHeader;