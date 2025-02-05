import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);


  return (

        <>
        <div className={`sidebar mt-2 bg-light ${isOpen ? "open" : "collapsed"}`}>
        <div className= "d-flex justify-content-around">
        
        <NavLink className="work-sans-normal" to="/"><span className={isOpen ? "visible-text" : "d-none"}>Tracker</span></NavLink>

        <button className="btn btn-outline-primary" onClick={() => setIsOpen(!isOpen)}>
        <span className={`${isOpen ? "bi-arrow-bar-left" : "bi-arrow-bar-right"}`}>
        </span>
        </button>
        </div>
        

        <SidebarMenu isOpen={isOpen} />
        </div>

        </>

  );
};

export default Sidebar;
