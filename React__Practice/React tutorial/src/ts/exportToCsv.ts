import { toast } from "react-toastify";
import type { User } from "../store/slice/userSlice"; 

export const exportToCSV = (users: User[]) => {
  if (users.length === 0) {
    alert("No data to export!");
    return;
  }
  const headers = [
    "No.",
    "FullName",
    "Username",
    "Email",
    "Gender",
    "Date",
    "City",
    "Country",
    "Condition",
  ];
  const rows = users.map((u, index) => [
    index + 1,
    u.FullName,
    u.username,
    u.email,
    u.gender,
    u.date,
    u.city,
    u.country,
    u.condition,
  ]);
  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "users_data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  toast.success("User exported successfully!");
};