import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { addUser } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const useAuth = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );
  let {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    localStorage.setItem("users", JSON.stringify(arr));
    toast.success("Registration successful");
  };
  const loginForm = (data) => {
    // 1. Find user
    const user = registeredUsers.find((val) => val.email === data.email);

    // 2. User doesn't exist
    if (!user) {
      toast.error("User not found");
      return;
    }

    // 3. Password is incorrect
    if (user.password !== data.password) {
      toast.error("Incorrect password");
      return;
    }

    // 4. Login successful
    dispatch(addUser(user));
    localStorage.setItem("user", JSON.stringify(user));

    toast.success("Login successful");

    reset();
  };
  return {
    navigate,
    handleSubmit,
    register,
    errors,
    reset,
    registerForm,
    loginForm,
  };
};

export default useAuth;
