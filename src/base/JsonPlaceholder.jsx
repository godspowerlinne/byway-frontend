import React, { createContext, useContext, useEffect, useState } from "react";

// Implement a global context for accessing core functionalities from any component
const JsonPlaceholderContext = createContext();
const JsonPlaceholder = ({ children }) => {
    // Step 1: Initialize state to store fetched post and track loading status
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    // Step 2: Fetch post data when the component mounts
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((respond) => respond.json())
            .then((data) => {
                console.log(data);
                setPost(data);
                setLoading(false);
            })
            .catch((error) => setLoading(false));
    }, []);

    return <JsonPlaceholderContext.Provider value={{ post, loading }}>
        {children}
    </JsonPlaceholderContext.Provider>;
};

export default JsonPlaceholder;

// Step 3: Create a custom hook to access the context
export const useJsonPlaceholder = () => {
    const context = useContext(JsonPlaceholderContext);
    if (!context) {
        throw new Error("`useJsonPlaceholder` must be used within a `useJsonPlaceholder`");
    }
    return context;
};
