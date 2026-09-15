import { useDispatch, useSelector } from "react-redux";
import { setShowForm } from "../../store/slice/showFormSlice";
import { toast } from "react-toastify";
import {
  saveUser,
  clearAllUser,
  deleteSelectedUsers,
} from "../../store/slice/userSlice";
import { exportToCSV } from "../../ts/exportToCsv";
import Papa from "papaparse";
import { useRef, type ChangeEvent } from "react";
import AppButton from "../../components/AppButton";
import type { RootState } from "../../store/store";

function Header() {
  const dispatch = useDispatch();
  const { users, selectUsers } = useSelector((state: RootState) => state.users);
  const fileRef = useRef<HTMLInputElement>(null);

  const formtoggle = () => {
    dispatch(setShowForm());
  };

  const handleImport = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result: any) => {
        result.data.forEach((user: any) => {
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
            })
          );
        });
      },
    });

    toast.success("User imported successfully!");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <span className="navbar-brand ms-5 fw-bold fs-3 text-white">
              User Management
            </span>
          </div>

          <div className="d-flex gap-2">
            <AppButton
              className="btn-dark"
              disabled={selectUsers.length === 0}
              onClick={() => {
                dispatch(deleteSelectedUsers());
                toast.success("Selected users deleted successfully!");
              }}
            >
              SELECT DELETE USER
            </AppButton>

            <AppButton
              className="btn-success"
              onClick={() => fileRef.current?.click()}
            >
              IMPORT
            </AppButton>
            <input
              type="file"
              accept=".csv"
              ref={fileRef}
              style={{ display: "none" }}
              onChange={handleImport}
            />

            <AppButton
              className="btn-warning"
              disabled={users.length === 0}
              onClick={() => exportToCSV(users)}
            >
              EXPORT
            </AppButton>

            <AppButton className="btn-primary" onClick={formtoggle}>
              ADD NEW USER
            </AppButton>

            <AppButton
              className="btn-danger"
              disabled={users.length === 0}
              onClick={() => {
                dispatch(clearAllUser());
                toast.success("ClearAlluser successfully!");
              }}
            >
              CLEAR ALL USER
            </AppButton>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;