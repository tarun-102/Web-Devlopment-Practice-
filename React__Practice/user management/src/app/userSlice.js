import { createSlice, nanoid } from "@reduxjs/toolkit";

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
  const saveUSer = localStorage.getItem("userData");
  return saveUSer ? JSON.parse(saveUSer) : initialRowData;
};

const saveToLocalStorage = (users) => {
  localStorage.setItem("userData", JSON.stringify(users));
};

const initialState = {
  users: loadFromLocalStorage(),
  searchUser: "",
  editUser: null,
  selectUsers: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      const user = {
        id: nanoid(),
        ...action.payload,
      };

      state.users.push(user);
      saveToLocalStorage(state.users);
    },

    setSearchUser: (state, action) => {
      state.searchUser = action.payload;
    },

    clearAllUser: (state, action) => {
      state.users = [];
      saveToLocalStorage(state.users);
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      saveToLocalStorage(state.users);
    },

    setEditUser: (state, action) => {
      state.editUser = action.payload;
    },

    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id,
      );

      if (index !== -1) {
        state.users[index] = action.payload;
      }

      saveToLocalStorage(state.users);
      state.editUser = null;
    },

    toggleSelectUser: (state, action) => {
      const id = action.payload;

      if (state.selectUsers.includes(id)) {
        state.selectUsers = state.selectUsers.filter((userId) => userId !== id);
      } else {
        state.selectUsers.push(id);
      }
    },

    deleteSelectedUsers: (state) => {
      state.users = state.users.filter(
        (user) => !state.selectUsers.includes(user.id),
      );

      state.selectUsers = [];
      saveToLocalStorage(state.users);
    },

    moveuserup: (state, action) => {
      state.users.sort((a, b) => a.FullName.localeCompare(b.FullName));

      saveToLocalStorage(state.users);
    },

    moveuserdown: (state, action) => {
      state.users.sort((a, b) => b.FullName.localeCompare(a.FullName));

      saveToLocalStorage(state.users);
    },

    selectAllUsers: (state) => {
      if (state.selectUsers.length === state.users.length) {
        state.selectUsers = [];
      } else {
        state.selectUsers = state.users.map((user) => user.id);
      }
    },
  },
});

export const {
  setSearchUser,
  clearAllUser,
  deleteUser,
  saveUser,
  setEditUser,
  updateUser,
  editUser,
  toggleSelectUser,
  deleteSelectedUsers,
  moveuserup,
  moveuserdown,
  selectAllUsers,
} = userSlice.actions;

export default userSlice.reducer;
