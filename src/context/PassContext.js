import { createContext, useState, useContext } from "react";

export const PassContext = createContext();

export const PassProvider = ({ children }) => {
  const userOptions = [
    "Includes capital letters",
    "Includes lowercase letters",
    "Includes numbers",
    "Includes symbols",
  ];
  const [count, setCount] = useState(0);
  const [options, setOptions] = useState(
    new Array(userOptions.length).fill(false)
  );
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  return (
    <PassContext.Provider
      value={{
        count,
        setCount,
        options,
        setOptions,
        userOptions,
        password,
        setPassword,
        level,
        setLevel,
        showNotification,
        setShowNotification,
      }}
    >
      {children}
    </PassContext.Provider>
  );
};

export const usePassContext = () => {
  const context = useContext(PassContext);
  if (context === undefined) {
    throw new Error("PassContext must be used within a PassContexProvider");
  }
  return context;
};
