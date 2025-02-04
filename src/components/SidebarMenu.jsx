

const SidebarMenu = ({isOpen}) => {

    return(
        <>
          <ul className="list-unstyled ps-3 mt-3">
          <li className="mt-3">
            <span className="bi bi-house-door me-2"></span><span className={isOpen ? "visible-text" : "d-none"}>Dashboard</span>
          </li>
          <li className="mt-3">
            <span className="bi bi-people me-2"></span><span className={isOpen ? "visible-text" : "d-none"}>Leads</span>
          </li>
          <li className="mt-3">
            <span className="bi bi-headset me-2"></span><span className={isOpen ? "visible-text" : "d-none"}>Agents</span>
          </li>
          <li className="mt-3">
            <span className="bi bi-graph-up-arrow me-2"></span><span className={isOpen ? "visible-text" : "d-none"}>Sales</span>
          </li>
          <li className="mt-3">
            <span className="bi bi-pie-chart me-2"></span><span className={isOpen ? "visible-text" : "d-none"}>Reports</span>
          </li>
        </ul>
        </>
    )
}

export default SidebarMenu;