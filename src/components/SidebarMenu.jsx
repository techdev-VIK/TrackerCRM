import { Link, NavLink } from "react-router-dom";

const SidebarMenu = ({isOpen}) => {

    return(
        <>
          <NavLink className="work-sans-normal m-3" to="/"><span className={isOpen ? "visible-text" : "d-none"}>Tracker</span></NavLink>
          <ul className="list-unstyled ps-3 mt-3">
          <li className="mt-3">
            <Link to="/dashboard" className="nav-link">
            <span className="bi bi-house-door me-2"></span><span className={isOpen ? "visible-text" : "d-none"}>Dashboard</span>
            </Link>
          </li>
          <li className="mt-3">
            <Link to="/lead" className="nav-link">
            <span className="bi bi-people me-2"></span><span className={isOpen ? "visible-text" : "d-none"}>Leads</span>
            </Link>
          </li>
          <li className="mt-3">
            <Link to="/agents" className="nav-link">
            <span className="bi bi-headset me-2"></span><span className={isOpen ? "visible-text" : "d-none"}>Agents</span>
            </Link>
          </li>
          <li className="mt-3">
            <Link to="/sales" className="nav-link">
            <span className="bi bi-graph-up-arrow me-2"></span><span className={isOpen ? "visible-text" : "d-none"}>Sales</span>
            </Link>
          </li>
          <li className="mt-3">
            <Link to="/reports" className="nav-link">
            <span className="bi bi-pie-chart me-2"></span><span className={isOpen ? "visible-text" : "d-none"}>Reports</span>
            </Link>
          </li>
        </ul>
        </>
    )
}

export default SidebarMenu;