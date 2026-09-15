import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string | number;
  FullName: string;
  username: string;
  email: string;
  gender: string;
  date: string;
  city: string;
  country: string;
  condition: boolean;
}

interface UserState {
  users: User[];
  searchUser: string;
  editUser: User | null;
  selectUsers: (string | number)[];
}

const initialRowData: User[] = [
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

const loadFromLocalStorage = (): User[] => {
  const saveUSer = localStorage.getItem("userData");
  return saveUSer ? JSON.parse(saveUSer) : initialRowData;
};

const saveToLocalStorage = (users: User[]) => {
  localStorage.setItem("userData", JSON.stringify(users));
};

// Explicit type aapyo initialState ne
const initialState: UserState = {
  users: loadFromLocalStorage(),
  searchUser: "",
  editUser: null,
  selectUsers: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<Omit<User, "id">>) => {
      const user: User = {
        id: nanoid(),
        ...action.payload,
      };
      state.users.push(user);
      saveToLocalStorage(state.users);
    },

    setSearchUser: (state, action: PayloadAction<string>) => {
      state.searchUser = action.payload;
    },

    clearAllUser: (state) => {
      state.users = [];
      saveToLocalStorage(state.users);
    },

    deleteUser: (state, action: PayloadAction<string | number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
      saveToLocalStorage(state.users);
    },

    setEditUser: (state, action: PayloadAction<User | null>) => {
      state.editUser = action.payload;
    },

    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
      saveToLocalStorage(state.users);
      state.editUser = null;
    },

    toggleSelectUser: (state, action: PayloadAction<string | number>) => {
      const id = action.payload;
      if (state.selectUsers.includes(id)) {
        state.selectUsers = state.selectUsers.filter((userId) => userId !== id);
      } else {
        state.selectUsers.push(id);
      }
    },

    deleteSelectedUsers: (state) => {
      state.users = state.users.filter(
        (user) => !state.selectUsers.includes(user.id)
      );
      state.selectUsers = [];
      saveToLocalStorage(state.users);
    },

    moveuserup: (state) => {
      state.users.sort((a, b) => a.FullName.localeCompare(b.FullName));
      saveToLocalStorage(state.users);
    },

    moveuserdown: (state) => {
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
  toggleSelectUser,
  deleteSelectedUsers,
  moveuserup,
  moveuserdown,
  selectAllUsers,
} = userSlice.actions;

export default userSlice.reducer;