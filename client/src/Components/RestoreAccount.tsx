import { useContext } from "react";
import { Link } from "react-router-dom";
// import RestoreButton from "../Components/ComponentsRestore/RestoreButton";
import Mail from "../Components/ComponentsRestore/Mail";
import { RestoreContext } from "../context/restoreContext";
import SuccesAlert from "../helpers/SuccesAlert";
import ErrorAlert from "../helpers/ErrorAlert";

const RestoreAccount = () => {
  const { restoreAccount, alert, errorAlert } = useContext(RestoreContext);
  return (
    <div className="flex items-center justify-center min-h-screen py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <form
        className="flex flex-col gap-3 w-3/4 m-auto"
        onSubmit={restoreAccount}
      >
        {alert && (
          <SuccesAlert message="Se ha enviado un correo para restablecer tu cuenta" />
        )}
        {errorAlert && <ErrorAlert message="Correo no encontrado" />}
        <h1 className="text-center m-auto text-4xl mb-6 font-caprasimo text-[#FFE4E4] w-3/4">
          Restablecer cuenta
        </h1>
        <Mail />
        <button
          className="block p-3 w-full transition duration-150 ease-in-out transform max-sm:hover:-translate-y-1 max-sm:hover:scale-110 focus:outline-none focus:ring focus:ring-[#FFA6AF] focus:ring-opacity-50 bg-primary rounded-lg tracking-wide mb-3  text-white placeholder-white md:text-xl"
          type="submit"
        >
          Enviar correo de recuperación
        </button>
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
      </form>
    </div>
  );
};

export default RestoreAccount;
