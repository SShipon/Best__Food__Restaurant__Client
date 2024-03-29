import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Sheared/Loading/Loading";


const PrivetRoute = ({ children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login"
            state={{ form: location }}
            replace
        ></Navigate>
    }
    return children;
   
};

export default PrivetRoute;