import { useEffect, useState } from "react";
import "./App.css";
import { getUserData } from "./utils/fetchuserdata";
import { useNavigate, useParams } from "react-router-dom";
import UserDetails from "./pages/UserDetails";
import { toast } from "react-toastify";
toast
function App() {
  const [data, setData] = useState([]);
  const userId = useParams();
  const navigate = useNavigate()
   const [selectedUser, setSelectedUser] = useState(null); 
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await getUserData();
      setData(result);
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center text-primary fw-bold mb-4">User Details</h1>

      {/* Bootstrap Card for Shadow & Rounded Corners */}
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover table-striped align-middle mb-0">
              <thead className="table-dark text-uppercase text-center">
                <tr>
                  <th scope="col" className="py-3">
                    User ID
                  </th>
                  <th scope="col" className="py-3">
                    Name
                  </th>
                  <th scope="col" className="py-3">
                    Username
                  </th>
                  <th scope="col" className="py-3">
                    Email
                  </th>
                </tr>
              </thead>

              <tbody className="text-center">
                {data.map((user) => (
                  <tr
                    key={user.id}
                    style={{ cursor: "pointer" }}
                    onClick={() =>{ 
                       navigate(`/user/${user.id}`);
                        toast.success("user details open successfully")
                    }  }
                  >
                    <th scope="row">
                      <span className="badge bg-primary rounded-pill px-3 py-2">
                        {user.id}
                      </span>
                    </th>
                    <td className="fw-semibold text-dark">{user.name}</td>
                    <td className="text-primary fw-medium">@{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
              
   
    </div>
  );
}

export default App;
