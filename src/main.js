import App from "./App";
import { createContext, useState } from "react";
import ReactDOM from "react-dom/client";

export const Context = createContext({
  isAuthenticated: false,
});
const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [Post, setPost] = useState([]);
  const [mode, setMode] = useState("dark");
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        Post,
        setPost,
        mode,
        setMode,
      }}
    >
      <App />
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppWrapper />);
