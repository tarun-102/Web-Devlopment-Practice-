import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center py-5">
      <h1 className="display-1 fw-bold">
        404
      </h1>

      <h2 className="fw-bold mb-3">
        Page Not Found
      </h2>

      <p className="text-secondary mb-4">
        Sorry, the page you are looking for
        does not exist.
      </p>

      <Link
        to="/"
        className="btn btn-primary"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;