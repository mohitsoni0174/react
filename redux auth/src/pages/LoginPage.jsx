import React from "react";
import useAuth from "../hooks/authHooks";

const Login = () => {
  let { navigate, handleSubmit, register, reset, errors, loginForm } =
    useAuth();
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/30">
              <span className="text-xl font-bold text-white">L</span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Login to your account to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Email
              </label>

              <input
                {...register("email", { required: "Email is required" })}
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:border-slate-600"
              />
              <p className="mt-1 text-xs text-red-500">
                {errors.email && errors.email.message}
              </p>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-200"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-medium text-blue-400 transition-colors hover:text-blue-300 cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 hover:border-slate-600"
              />
              <p className="mt-1 text-xs text-red-500">
                {errors.password && errors.password.message}
              </p>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/30 active:translate-y-0 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-500/30 cursor-pointer"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <div className="mt-7 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <button
              type="button"
              className="font-semibold text-blue-400 transition-colors hover:text-blue-300 hover:underline cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-center text-xs text-slate-500">
          © 2026 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
