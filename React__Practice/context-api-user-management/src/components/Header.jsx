import React, { useRef } from "react";
import { toast } from "react-toastify";
import Papa from "papaparse";
import Button from "./Button";
import useUser from "../hooks/useUser";
import { exportToCSV } from "../js/exportTocsv";

function Header() {
  const {
    users,
    selectUsers,
    saveUser,
    deleteSelectedUsers,
    clearAllUser,
    setShowForm,
  } = useUser();

  const fileRef = useRef(null);

  const handleImport = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (result) => {
        result.data.forEach((user) => {
          saveUser({
            FullName: user.FullName,
            username: user.Username,
            email: user.Email,
            gender: user.Gender,
            date: user.Date,
            city: user.City,
            country: user.Country,
            condition: user.Condition?.toLowerCase() === "true",
          });
        });

        toast.success("Users imported successfully!");
      },
    });

    e.target.value = "";
  };

  const handleDeleteSelected = () => {
    deleteSelectedUsers();
    toast.success("Selected users deleted successfully!");
  };

  const handleClearAll = () => {
    clearAllUser();
    toast.success("All users cleared successfully!");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <a className="navbar-brand ms-5 fw-bold fs-3 text-white" href="#">
              User Management
            </a>
          </div>

          <div className="d-flex gap-2">
            <Button
              className="btn-dark"
              name="SELECT DELETE USER"
              disabled={selectUsers.length === 0}
              onClick={handleDeleteSelected}
            />

            <Button
              className="btn-success"
              name="IMPORT"
              onClick={() => fileRef.current.click()}
            />

            <input
              type="file"
              accept=".csv"
              ref={fileRef}
              style={{ display: "none" }}
              onChange={handleImport}
            />

            <Button
              className="btn-warning"
              name="EXPORT"
              onClick={() => exportToCSV(users)}
            />

            <Button
              className="btn-primary"
              name="ADD NEW USER"
              onClick={setShowForm}
            />

            <Button
              className="btn-danger"
              name="CLEAR ALL USER"
              onClick={handleClearAll}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;