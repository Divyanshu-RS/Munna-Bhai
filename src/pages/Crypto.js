import React from "react";
import { Outlet } from "react-router-dom";
import Filters from "../components/Filters";
import TableComponent from "../components/TableComponent";

const Crypto = () => {
  return (
    <>
      <section className="w-[80%] h-full flex flex-col lg:mt-16 mt-8 mb-12 relative">
        <Filters />
        <TableComponent />
        <Outlet />
      </section>
        
    </>
  );
};

export default Crypto;
