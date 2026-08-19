import React from 'react'
import { Check } from "lucide-react";

const Loginsuccess = () => {
  return (
    <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
  <div className="w-87.5 rounded-3xl bg-[#151515] border border-green-500/30 p-6 shadow-2xl text-center">

    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
      <Check size={32} className="text-green-500" />
    </div>

    <h2 className="text-2xl font-bold text-white">
      Login Successful
    </h2>

    <p className="mt-2 text-gray-400">
      Welcome back! Redirecting you to Flowboard...
    </p>

    <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-gray-800">
      <div className="h-full w-full origin-left animate-[shrink_2s_linear] bg-green-500"></div>
    </div>

  </div>
</div>



    </div>
  )
}

export default Loginsuccess