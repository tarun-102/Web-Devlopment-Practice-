export interface User {
  id: number;
  name: string;
  email: string;
  role: "user" | "admin";
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export type AuthAction =
  | {
      type: "LOGIN";
      payload: User;
    }
  | {
      type: "LOGOUT";
    };

export interface LoginForm {
  email: string;
  password: string;
}