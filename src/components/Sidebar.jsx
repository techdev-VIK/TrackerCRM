import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);


  return (

        <>
        <div className={`sidebar bg-light ${isOpen ? "open" : "collapsed"}`}>
        <span className= "d-flex justify-content-start ms-1">
        <button className="btn btn-outline-primary mt-2" onClick={() => setIsOpen(!isOpen)}>
        <span className={`${isOpen ? "bi-arrow-bar-left" : "bi-arrow-bar-right"}`}>
        </span>
        </button>
        </span>
        

        <SidebarMenu isOpen={isOpen} />
        </div>

        </>

  );
};

export default Sidebar;
