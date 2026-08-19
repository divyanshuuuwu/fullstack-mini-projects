import React from 'react'

import useAuth from '../hooks/useAuth';

const Loginerror = () => {

    const {setLoginStatus} = useAuth()




  return (
    <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
  <div className="w-87.5 rounded-3xl bg-[#151515] border border-red-500/30 p-6 shadow-2xl text-center">

    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
      {/* <X size={32} className="text-red-500" /> */}
    </div>

    <h2 className="text-2xl font-bold text-white">
      Login Failed
    </h2>

    <p className="mt-2 text-gray-400">
      Invalid email or password.
    </p>

    <button
      onClick={() => setLoginStatus(null)}
      className="mt-6 w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:bg-gray-200"
    >
      Try Again
    </button>

  </div>
</div>





    </div>
  )
}

export default Loginerror