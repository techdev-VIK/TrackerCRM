import { useState } from "react";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);


  return (

        <>
        <div className={`sidebar bg-light ${isOpen ? "open" : "collapsed"}`}>
    
        <button className="btn btn-outline-primary mt-2" onClick={() => setIsOpen(!isOpen)}>
        <div className={`${isOpen ? "bi-arrow-bar-left" : "bi-arrow-bar-right"}`}>
        </div>
        </button>

        <SidebarMenu isOpen={isOpen} />
        </div>

        </>

  );
};

export default Sidebar;
