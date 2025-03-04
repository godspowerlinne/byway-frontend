import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

const url = import.meta.env.VITE_API_BASE_URL; // The base URL for the API endpoint
const Auth = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Checking if the user data is present in the local storage
    // only json, it cannot take objects, when we are storing information nin the local storage we mostly convert the object to JSON by stringifying the object, which mains converting the obj to json: Stringify means converting from object to JSON and "parsing" or "parse" is vice-versa.
    useEffect(() => {
        const userData = localStorage.getItem('userData');
        if (userData) {
            setUser(JSON.parse(userData));
        }
        setLoading(false);
    }, []);

    // Signup Logic 
    const signup = async (userData) => {
        try {
            const { username, firstname, lastname, email, password } = userData;

            // Check if inputs are empty or not
            if (!username || !firstname || !lastname || !email || !password) {
                throw new Error('All fields are required');
            }

            // Request object 
            const reqObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, firstname, lastname, email, password }),
            }
            // Fetch API call
            const response = await fetch(`${url}/signup`, reqObj);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Signup Failed");
            }
            return data;

        } catch (error) {
            setError(error.message);
            throw error;
        }
    }

    // Login Logic
    const login = async (credentials) => {   // Changed userData to credentials for clarity
        try {
            const { email, username, password } = credentials; // Destructure credentials

            // Check if inputs are empty or not
            if ((!email && !username) ||!password) {
                throw new Error('All fields are required');
            }
            // Request object
            const reqObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, username, password }),
            }
            const response = await fetch(`${url}/login`, reqObj);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Login Failed");
            }
            // Store user data in the local storage
            if(data.success && data.user){
                localStorage.setItem('userData', JSON.stringify(data.user));
                setUser(data.user);
            }
            return data;
        } catch (error) {
            setError(error.message);
            throw error;
        }
    }

    // Logout logic 
    const logout = () => {
        setUser(null);
        localStorage.removeItem('userData');
        setError(null);
    }

    // Clear Error logic
    const clearError = () => {
        setError(null);
    }


    // Collect the context value 
    const values = {
        user,
        loading,
        error,
        signup,
        login,
        logout,
        clearError,
        isAuthenticated: !!user,  // Corrected isAuthenticated logic
    };
    
    return (
        <AuthContext.Provider value={values}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
export default Auth;

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within  an AuthProvider");
    }
    return context;  // This will return the context values
 
}