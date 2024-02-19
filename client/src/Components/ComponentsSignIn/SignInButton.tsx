import React from 'react'

const SignInButton = () => {
  return (
    <button
      className="block p-3 w-full transition duration-150 ease-in-out transform max-sm:hover:-translate-y-1 max-sm:hover:scale-110 focus:outline-none focus:ring focus:ring-[#FFA6AF] focus:ring-opacity-50 bg-primary rounded-lg tracking-wide mb-3  text-white placeholder-white md:text-xl"
      type="submit"
    >
      Iniciar sesión
    </button>
  );
}

export default SignInButton