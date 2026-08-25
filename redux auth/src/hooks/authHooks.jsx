import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
const useAuth = () => {
  let navigate = useNavigate();
  let {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log(data);
  };
  const loginForm = (data) => {
    console.log(data);
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
