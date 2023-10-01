import { createContext, useContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  function login(email, password) {}

  function logout() {}

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

function useAuht() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside AuthProvider");
  }
}
