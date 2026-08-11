import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="min-h-screen w-full bg-[#0E0E0E] flex items-center justify-center">
      <Outlet />
    </main>
  );
};

export default AuthLayout;



