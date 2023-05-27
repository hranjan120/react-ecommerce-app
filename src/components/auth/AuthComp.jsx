import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

/*---------------*/
export const RequireAuth = ({ children, redirectTo }) => {
    const { userAuth } = useSelector((state) => state);
    const isAuthenticated = userAuth.isLoggedIn;
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export const NotRequireAuth = ({ children, redirectTo }) => {
    const { userAuth } = useSelector((state) => state);
    const isAuthenticated = userAuth.isLoggedIn;
    return isAuthenticated ? <Navigate to={redirectTo} /> : children;
}

RequireAuth.propTypes = {
    children: PropTypes.node.isRequired,
    redirectTo: PropTypes.node.isRequired,
};
NotRequireAuth.propTypes = {
    children: PropTypes.node.isRequired,
    redirectTo: PropTypes.node.isRequired,
};