'use client';
import { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        if (typeof window === 'undefined') return null;
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    
    const login = (username) => {
        const userData = { username };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };  
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}   