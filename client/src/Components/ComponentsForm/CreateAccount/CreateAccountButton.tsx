import React from 'react'

const CreateAccountButton = () => {
  return (
    <button
      type="submit"
      className="bg-primary block mx-auto p-3 w-3/4 transition duration-150 ease-in-out transform max-sm:hover:-translate-y-1 max-sm:hover:scale-110 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-50 bg-second rounded-lg tracking-wide text-white mb-3 md:text-xl"
    >
      Crear cuenta
    </button>
  );
}

export default CreateAccountButton