import { useNavigate, useLocation } from "react-router-dom";
import AppButton from "./AppButton";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div className="d-flex justify-content-between align-items-center p-3 bg-dark border-bottom border-secondary shadow-sm">
      <h3 className="text-white m-0 fs-5">React Projects Dashboard</h3>

      {!isHome && (
        <AppButton
          className="text-white btn-sm"
          style={{ backgroundColor: "#ff007f" }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </AppButton>
      )}
    </div>
  );
};

export default Header;