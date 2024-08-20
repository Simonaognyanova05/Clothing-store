import { useState, useEffect, createContext, useContext } from 'react';

export const AuthContext = createContext();

const initialState = {
    _id: '',
    username: '',
};

export const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(() => {
        const storedAdmin = localStorage.getItem('admin');
        return storedAdmin ? JSON.parse(storedAdmin) : initialState;
    });

    const onLoginAdmin = (authData) => {
        setAdmin(authData);
        localStorage.setItem('admin', JSON.stringify(authData));
    }
    return (
        <AuthContext.Provider value={{ admin, onLoginAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    let authResult = useContext(AuthContext);

    return authResult;
}