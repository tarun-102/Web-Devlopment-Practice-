import { useState, type ReactNode } from "react";

import {
  AuthContext,
  type User,
  type RegisterData,
  type LoginData,
} from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

interface StoredUser extends User {
  password: string;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("authUser");

    if (!storedUser) {
      return null;
    }

    return JSON.parse(storedUser);
  });

  // Register
  const register = (data: RegisterData): boolean => {
    const storedUsers = localStorage.getItem("users");

    const users: StoredUser[] = storedUsers
      ? JSON.parse(storedUsers)
      : [];

    
    const userAlreadyExists = users.some(
      (existingUser) => existingUser.email === data.email
    );

    if (userAlreadyExists) {
      console.log("User already exists");
      return false;
    }

    const newUser: StoredUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    
    users.push(newUser);

  
    localStorage.setItem("users", JSON.stringify(users));

  
    const loggedInUser: User = {
      name: newUser.name,
      email: newUser.email,
    };

    setUser(loggedInUser);

    localStorage.setItem(
      "authUser",
      JSON.stringify(loggedInUser)
    );

    return true;
  };

  
  const login = (data: LoginData): boolean => {
    const storedUsers = localStorage.getItem("users");

    if (!storedUsers) {
      console.log("No registered users");
      return false;
    }

    const users: StoredUser[] = JSON.parse(storedUsers);

    
    const existingUser = users.find(
      (user) => user.email === data.email
    );

    if (!existingUser) {
      console.log("User not registered");
      return false;
    }

    
    if (existingUser.password !== data.password) {
      console.log("Invalid password");
      return false;
    }

    const loggedInUser: User = {
      name: existingUser.name,
      email: existingUser.email,
    };

    setUser(loggedInUser);

    localStorage.setItem(
      "authUser",
      JSON.stringify(loggedInUser)
    );

    return true;
  };

  // Logout
  const logout = () => {
    setUser(null);

    localStorage.removeItem("authUser");
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;