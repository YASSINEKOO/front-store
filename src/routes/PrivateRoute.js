import {Navigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const {isLoggedIn}=useAuth();
    return children;
};
export  default PrivateRoute;