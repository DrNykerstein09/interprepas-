import React from "react";
import { Link } from "react-router-dom";

const NextPageButton = () => {
  return (
    <div className="mb-10">
      <Link to="/creando_cuenta">
        <button className="bg-primary block mx-auto p-3 w-3/4 transition duration-150 ease-in-out transform max-sm:hover:-translate-y-1 max-sm:hover:scale-110 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-50 bg-second rounded-lg tracking-wide text-white mb-3 md:text-xl">
          Siguiente
        </button>
      </Link>

      <p className="text-center w-3/4 m-auto text-xs font-light text-text">
        La información recaudada no será expuesta a ningún usuario
      </p>
    </div>
  );
};

export default NextPageButton;
