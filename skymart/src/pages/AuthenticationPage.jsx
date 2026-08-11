import { Navigate } from "react-router";
import Login from "./Login";
import Register from "./Register";

const AuthenticationPage = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = JSON.parse(localStorage.getItem("user"));

  // Already logged in
  if (user) {
    return <Navigate to="/" replace />;
  }

  // No registered users
  if (users.length === 0) {
    return <Register />;
  }

  // Registered user exists but not logged in
  return <Login />;
};

export default AuthenticationPage;