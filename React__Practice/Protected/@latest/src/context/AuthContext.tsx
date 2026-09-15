import { createContext } from "react";

export interface User {
  name: string;
  email: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;

  login: (data: LoginData) => boolean;
  register: (data: RegisterData) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);