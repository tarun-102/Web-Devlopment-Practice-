import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/slice/userSlice";

function App() {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <h1 className=" text-center">Loading...</h1>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <div className=" p-5">
        <div className="table-responsive shadow-sm rounded border">
          <table className="table table-hover table-striped align-middle mb-0 bg-white">
            <thead className="table-dark">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No.
                </th>
                <th scope="col" className="py-3 px-4">
                  Full Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Username
                </th>
                <th scope="col" className="py-3 px-4">
                  Email
                </th>
                <th scope="col" className="py-3 px-4">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-4">
                    <span className="badge bg-secondary rounded-pill">
                      {user.id}
                    </span>
                  </td>
                  <td className="px-4 fw-bold text-dark">{user.name}</td>
                  <td className="px-4 text-muted">@{user.username}</td>
                  <td className="px-4">{user.email}</td>
                  <td className="px-4">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;