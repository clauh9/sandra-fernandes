import React, { useContext, useEffect, useState, createContext } from "react";
import { app } from "../firebase/config";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    if (pending) {
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
