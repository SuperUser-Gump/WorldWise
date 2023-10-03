import { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    const storedAuthState = localStorage.getItem("user");
    if (storedAuthState) {
      const parsedAuthState = JSON.parse(storedAuthState);
      dispatch({ type: "login", payload: parsedAuthState.user });
    }
  }, []);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      const user = FAKE_USER;
      localStorage.setItem("user", JSON.stringify({ user }));
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    localStorage.removeItem("user");
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
