import { toast } from "react-toastify";

function Navbar() {
  return (
    <header className="d-flex justify-content-between align-items-center mb-4">

      <div className="d-flex align-items-center gap-3">

        <button
          className="btn btn-dark d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileSidebar"
          aria-controls="mobileSidebar"
        >
          <i className="bi bi-list fs-5" />
        </button>

        <div>
          <h2 className="fw-bold mb-1">
            Dashboard
          </h2>

          <p className="text-secondary mb-0">
            Welcome back 👋
          </p>
        </div>

      </div>

      <div className="d-flex align-items-center gap-2">

        <button
          className="btn btn-light position-relative"
          onClick={() => {
            toast.info("No new notifications");
          }}
        >
          <i className="bi bi-bell" />

          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3
          </span>
        </button>

        <button
          className="btn btn-primary"
          onClick={() => {
            toast.success("Welcome to DevFlow!");
          }}
        >
          <i className="bi bi-plus-lg me-2" />
          New Project
        </button>

      </div>

    </header>
  );
}

export default Navbar;