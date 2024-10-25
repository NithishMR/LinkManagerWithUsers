import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/signin" />;
};

export default PrivateRoute;