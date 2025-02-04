import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);


  return (

        <>
        <div className={`sidebar bg-light ${isOpen ? "open" : "collapsed"}`}>
        <div className= {`${isOpen} ? "d-flex justify-content-end" : "d-flex justify-content-start"`}>
        <button className="btn btn-outline-primary mt-2" onClick={() => setIsOpen(!isOpen)}>
        <div className={`${isOpen ? "bi-arrow-bar-left" : "bi-arrow-bar-right"}`}>
        </div>
        </button>
        </div>
        

        <SidebarMenu isOpen={isOpen} />
        </div>

        </>

  );
};

export default Sidebar;
