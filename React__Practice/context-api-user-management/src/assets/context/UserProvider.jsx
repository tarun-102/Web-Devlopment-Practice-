import { useState } from "react";
import UserContext from "./userContext";

const initialRowData = [
  {
    id: 1,
    FullName: "Rohit Shrma",
    username: "hitman",
    email: "hitman@123",
    gender: "male",
    date: "2025-12-02",
    city: "mumbai",
    country: "uk",
    condition: true,
  },
];

const loadFromLocalStorage = () => {
  const saveUser = localStorage.getItem("userData");
  return saveUser ? JSON.parse(saveUser) : initialRowData;
};

const saveToLocalStorage = (users) => {
  localStorage.setItem("userData", JSON.stringify(users));
};

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(loadFromLocalStorage());
  const [searchUser, setSearchUserData] = useState("");
  const [editUser, setEditUserData] = useState(null);
  const [selectUsers, setSelectUsers] = useState([]);
  const [show, setShow] = useState(false);

  //  Show Form 
  const setShowForm = () => {
    setShow((prev) => !prev);
  };

  // Save User
const saveUser = (user) => {
  setUsers((prev) => {
    const updatedUsers = [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...user,
      },
    ];

    saveToLocalStorage(updatedUsers);
    return updatedUsers;
  });
};

  //  Search
  const setSearchUser = (value) => {
    setSearchUserData(value);
  };

  //  Clear All
  const clearAllUser = () => {
    setUsers([]);
    saveToLocalStorage([]);
  };

  //  Delete 
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    saveToLocalStorage(updatedUsers);
  };

   const setEditUser = (user) => {
    setEditUserData(user);
  };

  //  Update 
  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );

    setUsers(updatedUsers);
    saveToLocalStorage(updatedUsers);
    setEditUserData(null);
  };

  //  Toggle Select 
  const toggleSelectUser = (id) => {
    if (selectUsers.includes(id)) {
      setSelectUsers(selectUsers.filter((userId) => userId !== id));
    } else {
      setSelectUsers([...selectUsers, id]);
    }
  };

  //  Delete Selected 
  const deleteSelectedUsers = () => {
    const updatedUsers = users.filter(
      (user) => !selectUsers.includes(user.id)
    );

    setUsers(updatedUsers);
    saveToLocalStorage(updatedUsers);
    setSelectUsers([]);
  };

  //  Sort A-Z 
  const moveuserup = () => {
    const sortedUsers = [...users].sort((a, b) =>
      a.FullName.localeCompare(b.FullName)
    );

    setUsers(sortedUsers);
    saveToLocalStorage(sortedUsers);
  };

  // Sort Z-A 
  const moveuserdown = () => {
    const sortedUsers = [...users].sort((a, b) =>
      b.FullName.localeCompare(a.FullName)
    );

    setUsers(sortedUsers);
    saveToLocalStorage(sortedUsers);
  };

  //  Select All 
  const selectAllUsers = () => {
    if (selectUsers.length === users.length) {
      setSelectUsers([]);
    } else {
      setSelectUsers(users.map((user) => user.id));
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        searchUser,
        editUser,
        selectUsers,
        show,
        saveUser,
        setSearchUser,
        clearAllUser,
        deleteUser,
        setEditUser,
        updateUser,
        toggleSelectUser,
        deleteSelectedUsers,
        moveuserup,
        moveuserdown,
        selectAllUsers,
        setShowForm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;