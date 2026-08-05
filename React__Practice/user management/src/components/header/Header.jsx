import React from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { setShowForm } from "../../app/showFormSlice";
import { toast } from "react-toastify";
import {
  saveUser,
  clearAllUser,
  deleteSelectedUsers,
} from "../../app/userSlice";
import { exportToCSV } from "../../js/exportTocsv";
import Papa from "papaparse";
import { useRef } from "react";
function Header() {
  const dispatch = useDispatch();
  const { users, selectUsers } = useSelector((state) => state.users);
  const formtoggle = () => {
    dispatch(setShowForm());
  };
  const fileRef = useRef(null);
  const handleImport = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (result) => {
        console.log(result.data);

        result.data.forEach((user) => {
          dispatch(
            saveUser({
              FullName: user.FullName,
              username: user.Username,
              email: user.Email,
              gender: user.Gender,
              date: user.Date,
              city: user.City,
              country: user.Country,
              condition: user.Condition?.toLowerCase() === "true",
            }),
          );
        });
      },
    });

      toast.success("user exported successfylly!");

  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary  ">
        <div className="container-fluid ">
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent "
          >
            <a className="navbar-brand ms-5 fw-bold fs-3 text-white" href="#">
              User Management
            </a>
          </div>

          <div className="d-flex gap-2">
            <Button
              className="btn-dark"
              name="SELECT DELETE USSER"
              disabled={selectUsers.length === 0}
              onClick={() =>{
                dispatch(deleteSelectedUsers())
                  toast.success("selected user successfylly!");

              }
              }
            />

            <Button
              className="btn-success"
              name="IMPORT"
              onClick={() => fileRef.current.click()}
            />
            <input
              type="file"
              accept="csv"
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
              onClick={formtoggle}
            />
            <Button
              className="btn-danger"
              onClick={() => { dispatch(clearAllUser())
                  toast.success("ClearAlluser successfylly!");
              }
              }
              name="CLEAR ALL USER"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
