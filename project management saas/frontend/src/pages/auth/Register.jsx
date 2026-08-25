import React from "react"
import { UserPlus, Eye, EyeOff } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Register = () => {

  const [showPassword, setShowPassword] = useState(false)

  return (

    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center px-4 py-10">

      {/* Background Glow */}
      <div className="pointer-events-none fixed left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[120px]" />


      {/* Register Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#151515] shadow-2xl">

        {/* Header */}
        <div className="flex flex-col items-center px-8 pt-10 pb-6">

          {/* Icon */}
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black">
            <UserPlus size={28} strokeWidth={2} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Create your account
          </h1>

          <p className="mt-2 text-center text-sm text-gray-400">
            Start managing your projects with Flowboard
          </p>

        </div>


        {/* Form */}
        <div className="px-8 pb-10">

          <form className="flex flex-col gap-5">


            {/* Name */}
            <div className="flex flex-col gap-2">

              <label className="text-sm font-medium text-gray-300">
                Full name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 text-white outline-none placeholder:text-gray-600 transition focus:border-white/30 focus:ring-2 focus:ring-white/5"
              />

            </div>


            {/* Email */}
            <div className="flex flex-col gap-2">

              <label className="text-sm font-medium text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 text-white outline-none placeholder:text-gray-600 transition focus:border-white/30 focus:ring-2 focus:ring-white/5"
              />

            </div>


            {/* Password */}
            <div className="flex flex-col gap-2">

              <label className="text-sm font-medium text-gray-300">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="h-12 w-full rounded-xl border border-white/10 bg-black px-4 pr-12 text-white outline-none placeholder:text-gray-600 transition focus:border-white/30 focus:ring-2 focus:ring-white/5"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 transition hover:text-gray-300"
                >
                  {showPassword
                    ? <EyeOff size={18} />
                    : <Eye size={18} />
                  }
                </button>

              </div>

            </div>


            {/* Terms */}
            <div className="flex items-start gap-3">

              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-white/10 bg-black accent-white"
              />

              <p className="text-xs leading-5 text-gray-500">

                I agree to the{" "}
                <NavLink
                  to="#"
                  className="text-gray-300 hover:text-white"
                >
                  Terms of Service
                </NavLink>
                {" "}and{" "}
                <NavLink
                  to="#"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </NavLink>

              </p>

            </div>


            {/* Register Button */}
            <button
              type="submit"
              className="mt-1 h-12 w-full rounded-xl bg-white font-semibold text-black transition hover:bg-gray-200 active:scale-[0.98]"
            >
              Create account
            </button>


            {/* Login */}
            <div className="flex justify-center gap-1 text-sm">

              <span className="text-gray-500">
                Already have an account?
              </span>

              <NavLink
                to="/login"
                className="font-medium text-white transition hover:text-gray-300"
              >
                Log in
              </NavLink>

            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Register