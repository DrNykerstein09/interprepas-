import React, { useContext } from 'react'
import { UserContext } from '../../context/authContext';

const Password = () => {
     const { handleChangeSignIn } = useContext(UserContext);
  return (
    <div className="mb-6">
      <label
        htmlFor="password"
        className="block mb-5 mt-5 text-lg font-medium text-white md:text-xl"
      >
        Tu contraseña
      </label>
      <input
        type="password"
        onChange={handleChangeSignIn}
        id="password"
        name="password"
        placeholder="********"
        className="block p-3 w-full transition duration-150 ease-in-out transform max-sm:hover:-translate-y-1 placeholder-text max-sm:hover:scale-110 focus:outline-none focus:ring focus:ring-[#FFA6AF] focus:ring-opacity-50 bg-primary rounded-lg tracking-wide mb-3  text-white border-none md:text-xl"
      />
    </div>
  );
}

export default Password