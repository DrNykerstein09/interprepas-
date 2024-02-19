import React from 'react'
import { Link } from 'react-router-dom';

const RestoreAccount = () => {
  return (
    <p id="helper-text-explanation" className=" mt-2 text-center text-white">
      Si has olvidado tu contraseña
      <br />
      <Link
        to="/resetablecer_cuenta"
        className="font-medium ml-2 text-second text-[#FF8181] hover:underline"
      >
        Restablece tu cuenta aquí
      </Link>
    </p>
  );
}

export default RestoreAccount