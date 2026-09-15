
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { 
  FiLogOut, 
  FiShoppingCart, 
  FiBox, 
  FiDollarSign, 
  FiClock, 
  FiUser, 
  FiMail, 
  FiTrendingUp, 
  FiCheckCircle 
} from "react-icons/fi";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast.success("User logged out successfully");
  };

  // કાર્ડ્સ માટે ઇનલાઇન સ્ટાઇલ (તમે આને તમારી CSS ફાઇલમાં પણ મૂકી શકો છો)
  const cardStyle = {
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    cursor: "pointer",
  };

  return (
    <div className="container-fluid bg-light min-vh-100 p-4" style={{ backgroundColor: "#f8f9fa" }}>
      
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-5 bg-white p-4 rounded shadow-sm">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center shadow" style={{ width: "60px", height: "60px", fontSize: "24px" }}>
            {user?.name ? user.name.charAt(0).toUpperCase() : <FiUser />}
          </div>
          <div>
            <h2 className="fw-bold mb-1 text-dark">Dashboard</h2>
            <p className="text-secondary mb-0 fs-5">
              Welcome back, <span className="fw-semibold text-primary">{user?.name}</span> 👋
            </p>
          </div>
        </div>

        <button 
          className="btn btn-danger d-flex align-items-center gap-2 px-4 py-2 shadow-sm"
          onClick={handleLogout}
        >
          <FiLogOut /> Logout
        </button>
      </div>

      <div className="row">
        {/* Left Column: Stats & Activity */}
        <div className="col-lg-8">
          
          {/* Stats Cards */}
          <div className="row g-4 mb-5">
            {/* Total Orders */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 stat-card" style={cardStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div className="card-body p-4 d-flex align-items-center">
                  <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-3 me-3 fs-3">
                    <FiShoppingCart />
                  </div>
                  <div>
                    <p className="text-muted mb-1 fw-semibold">Total Orders</p>
                    <h3 className="fw-bold mb-1">24</h3>
                    <small className="text-success fw-semibold d-flex align-items-center gap-1">
                      <FiTrendingUp /> +12% this month
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Products */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 stat-card" style={cardStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div className="card-body p-4 d-flex align-items-center">
                  <div className="bg-info bg-opacity-10 text-info p-3 rounded-3 me-3 fs-3">
                    <FiBox />
                  </div>
                  <div>
                    <p className="text-muted mb-1 fw-semibold">Total Products</p>
                    <h3 className="fw-bold mb-1">156</h3>
                    <small className="text-success fw-semibold">
                      +8 new products
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 stat-card" style={cardStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div className="card-body p-4 d-flex align-items-center">
                  <div className="bg-success bg-opacity-10 text-success p-3 rounded-3 me-3 fs-3">
                    <FiDollarSign />
                  </div>
                  <div>
                    <p className="text-muted mb-1 fw-semibold">Revenue</p>
                    <h3 className="fw-bold mb-1">₹45,280</h3>
                    <small className="text-success fw-semibold d-flex align-items-center gap-1">
                      <FiTrendingUp /> +18% this month
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Orders */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100 stat-card" style={cardStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div className="card-body p-4 d-flex align-items-center">
                  <div className="bg-warning bg-opacity-10 text-warning p-3 rounded-3 me-3 fs-3">
                    <FiClock />
                  </div>
                  <div>
                    <p className="text-muted mb-1 fw-semibold">Pending Orders</p>
                    <h3 className="fw-bold mb-1">7</h3>
                    <small className="text-warning fw-semibold">
                      Needs attention
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white border-bottom-0 pt-4 pb-0 px-4">
              <h5 className="fw-bold text-dark mb-0">Recent Activity</h5>
            </div>
            <div className="card-body p-4">
              
              <div className="d-flex mb-4">
                <div className="text-success fs-4 me-3 mt-1"><FiCheckCircle /></div>
                <div>
                  <h6 className="mb-1 fw-bold">New order received</h6>
                  <p className="text-muted mb-1">Order #ORD-1024 was placed successfully.</p>
                  <small className="text-black-50">10 minutes ago</small>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="text-primary fs-4 me-3 mt-1"><FiBox /></div>
                <div>
                  <h6 className="mb-1 fw-bold">Product added</h6>
                  <p className="text-muted mb-1">New product "Wireless Headphones" was added.</p>
                  <small className="text-black-50">2 hours ago</small>
                </div>
              </div>

              <div className="d-flex">
                <div className="text-info fs-4 me-3 mt-1"><FiUser /></div>
                <div>
                  <h6 className="mb-1 fw-bold">Profile updated</h6>
                  <p className="text-muted mb-1">Your profile information was updated.</p>
                  <small className="text-black-50">Yesterday</small>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: User Profile */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm sticky-top" style={{ top: "20px" }}>
            <div className="card-body p-4 text-center">
              <div className="mb-4 mt-2">
                <div className="bg-light rounded-circle mx-auto d-flex justify-content-center align-items-center text-primary shadow-sm" style={{ width: "100px", height: "100px", fontSize: "40px" }}>
                  <FiUser />
                </div>
              </div>
              
              <h4 className="fw-bold mb-1">{user?.name || "User Name"}</h4>
              <p className="text-muted mb-4 d-flex align-items-center justify-content-center gap-2">
                <FiMail /> {user?.email || "user@example.com"}
              </p>

              <hr className="text-muted opacity-25 mb-4" />

              <div className="text-start">
                <h6 className="fw-bold mb-3 text-uppercase text-muted" style={{ fontSize: "12px", letterSpacing: "1px" }}>Account Details</h6>
                
                <div className="mb-3">
                  <small className="text-muted d-block mb-1">Full Name</small>
                  <span className="fw-semibold">{user?.name}</span>
                </div>
                
                <div className="mb-3">
                  <small className="text-muted d-block mb-1">Email Address</small>
                  <span className="fw-semibold">{user?.email}</span>
                </div>

                <div>
                  <small className="text-muted d-block mb-1">Account Status</small>
                  <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;