import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("auth") === "true";
  return isAuth ? children : <Navigate to="/Login" replace />;
}

export default ProtectedRoute;