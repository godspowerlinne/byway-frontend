import { Navigate } from "react-router-dom";
import { useAuth } from "../base/Auth";

export const ProtectedRoutes = ({ children }) => {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children; // Return children if user is authenticated
};