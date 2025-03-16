// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Create a Context
const AuthContext = createContext();

// Create a custom hook to use the Auth context
export const useAuth = () => {
    return useContext(AuthContext);
};

// Create a provider component to wrap the app
export const AuthProvider = ({ children }) => {
    // Check localStorage for persisted login state
    const storedLoginState = localStorage.getItem("isLoggedIn") === "true";
    const [isLoggedIn, setIsLoggedIn] = useState(storedLoginState);

    // Update localStorage whenever the login state changes
    useEffect(() => {
        localStorage.setItem("isLoggedIn", isLoggedIn);
    }, [isLoggedIn]);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
