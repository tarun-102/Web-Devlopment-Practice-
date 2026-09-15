import { NavLink } from "react-router-dom";

interface SidebarProps {
  mobile?: boolean;
}

const navItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: "bi-grid",
  },
  {
    name: "Projects",
    path: "/projects",
    icon: "bi-folder",
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: "bi-check2-square",
  },
  {
    name: "Team",
    path: "/team",
    icon: "bi-people",
  },
  {
    name: "Settings",
    path: "/settings",
    icon: "bi-gear",
  },
];

function Sidebar({ mobile = false }: SidebarProps) {
  return (
    <aside
      className={
        mobile
          ? "offcanvas offcanvas-start bg-dark text-white"
          : "col-md-3 col-lg-2 bg-dark text-white p-4 d-none d-md-block"
      }
      tabIndex={-1}
      id={mobile ? "mobileSidebar" : undefined}
    >
      {mobile && (
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold">
            DevFlow
          </h5>

          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
      )}

      <div className={mobile ? "offcanvas-body" : ""}>

        {!mobile && (
          <div className="mb-4">
            <h3 className="fw-bold mb-1">
              DevFlow
            </h3>

            <small className="text-secondary">
              Project Management
            </small>
          </div>
        )}

        <nav>
          <ul className="nav flex-column gap-2">
            {navItems.map((item) => (
              <li
                className="nav-item"
                key={item.path}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link d-flex align-items-center gap-3 ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-white"
                    } rounded px-3 py-2`
                  }
                >
                  <i className={`bi ${item.icon}`} />

                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <hr className="border-secondary my-4" />

        <div className="d-flex align-items-center gap-3">
          <div
            className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
            }}
          >
            <i className="bi bi-person" />
          </div>

          <div>
            <div className="fw-semibold">
              Developer
            </div>

            <small className="text-secondary">
              Online
            </small>
          </div>
        </div>

      </div>
    </aside>
  );
}

export default Sidebar;