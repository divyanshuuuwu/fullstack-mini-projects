import React from 'react'
import { UserKey } from "lucide-react"
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../components/hooks/useAuth'
import Loginerror from '../../components/ui/Loginerror'
import Loginsuccess from '../../components/ui/Loginsuccess'

const Login = () => {

  const { login, isAuthenticated, loginStatus, setLoginStatus } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {

    const success = await login(data.email, data.password)

    console.log(success)

    if (success) {
      setLoginStatus("success")

      setTimeout(() => {
        navigate("/dashboard", { replace: true })
      }, 2000)
    }
    else {
      setLoginStatus("error")
    }
  }

  return (

    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">

      {/* Login/Error Messages */}
      {loginStatus === "error" && (
        <Loginerror />
      )}

      {loginStatus === "success" && (
        <Loginsuccess />
      )}

      {/* Login Card */}
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#151515] shadow-2xl">

        {/* Header */}
        <div className="flex flex-col items-center px-8 pt-10 pb-6">

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
            <UserKey size={28} />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Sign in to continue to your account
          </p>

        </div>


        {/* Form */}
        <div className="px-8 pb-10">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >

            {/* Email */}
            <div className="flex flex-col gap-2">

              <label className="text-sm font-medium text-gray-300">
                Email
              </label>

              <input
                className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                placeholder="Enter your email"
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />

              {errors.email && (
                <p className="text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}

            </div>


            {/* Password */}
            <div className="flex flex-col gap-2">

              <label className="text-sm font-medium text-gray-300">
                Password
              </label>

              <input
                className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 text-white outline-none placeholder:text-gray-600 focus:border-white/30"
                placeholder="Enter your password"
                type="text"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />

              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}

            </div>


            {/* Forgot Password */}
            <div className="flex justify-end">

              <NavLink
                to="#"
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Forgot password?
              </NavLink>

            </div>


            {/* Login Button */}
            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-white font-semibold text-black transition hover:bg-gray-200 active:scale-[0.98]"
            >
              Login
            </button>


            {/* Create Account */}
            <div className="flex justify-center gap-1 text-sm">

              <span className="text-gray-500">
                Don't have an account?
              </span>

              <NavLink
                to="/register"
                className="font-medium text-white hover:text-gray-300 transition"
              >
                Create account
              </NavLink>

            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Login