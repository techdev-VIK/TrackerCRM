import { Link, NavLink } from "react-router-dom";

const SidebarMenu = ({isOpen}) => {

    return(
        <>
          
          <ul className="list-unstyled ps-3 mt-3">
          <li className="mt-3">
            <Link to="/dashboard" className="nav-link">
            <span className="fs-4 text-primary bi bi-house-door me-2"></span><span className={isOpen ? "fs-5 visible-text fw-semibold" : "d-none"}>Dashboard</span>
            </Link>
          </li>
          <li className="mt-3">
            <Link to="/lead" className="nav-link">
            <span className="fs-4 text-primary bi bi-people me-2"></span><span className={isOpen ? "fs-5 visible-text fw-semibold" : "d-none"}>Leads</span>
            </Link>
          </li>
          <li className="mt-3">
            <Link to="/agents" className="nav-link">
            <span className="fs-4 text-primary bi bi-headset me-2"></span><span className={isOpen ? "fs-5 visible-text fw-semibold" : "d-none"}>Agents</span>
            </Link>
          </li>
          <li className="mt-3">
            <Link to="/sales" className="nav-link">
            <span className="fs-4 text-primary bi bi-graph-up-arrow me-2"></span><span className={isOpen ? "fs-5 visible-text fw-semibold" : "d-none"}>Sales</span>
            </Link>
          </li>
          <li className="mt-3">
            <Link to="/reports" className="nav-link">
            <span className="fs-4 text-primary bi bi-pie-chart me-2"></span><span className={isOpen ? "fs-5 visible-text fw-semibold" : "d-none"}>Reports</span>
            </Link>
          </li>
        </ul>
        </>
    )
}

export default SidebarMenu;