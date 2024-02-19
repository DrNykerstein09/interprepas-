import React from 'react'
import { Link } from 'react-router-dom';

const DontHaveAccount = () => {
  return (
    <p
      id="helper-text-explanation"
      className=" mt-2 text-center text-white"
    >
      Si aún no tienes una cuenta
      <br />
      <Link
        to="/registrarse"
        className="font-medium ml-2 text-second text-[#FF8181] hover:underline"
      >
        Regístrate aquí
      </Link>
    </p>
  );
}

export default DontHaveAccount