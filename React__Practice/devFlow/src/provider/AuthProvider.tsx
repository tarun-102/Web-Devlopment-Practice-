import {
  useEffect,
  useReducer,
  type ReactNode,
} from "react";

import AuthContext from "../context/AuthContext";

import type {
  AuthState,
  AuthAction,
  User,
} from "../types/auth";

interface AuthProviderProps {
  children: ReactNode;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

function getInitialState(): AuthState {
  const storedUser =
    localStorage.getItem("devflow_user");

  if (!storedUser) {
    return initialState;
  }

  try {
    const user: User = JSON.parse(storedUser);

    return {
      user,
      isAuthenticated: true,
    };
  } catch {
    localStorage.removeItem("devflow_user");

    return initialState;
  }
}

function authReducer(
  state: AuthState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
        isAuthenticated: true,
      };

    case "LOGOUT":
      return {
        user: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}

function AuthProvider({
  children,
}: AuthProviderProps) {
  const [state, dispatch] = useReducer(
    authReducer,
    undefined,
    getInitialState
  );

  useEffect(() => {
    if (state.user) {
      localStorage.setItem(
        "devflow_user",
        JSON.stringify(state.user)
      );
    } else {
      localStorage.removeItem("devflow_user");
    }
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;