import { Link } from "react-router-dom";
// import HeaderLogo from "./HeaderLogo";
import ErrorAlert from "../helpers/ErrorAlert";
import { useContext } from "react";
import { UserContext } from "../context/authContext";
import SuccesAlert from "../helpers/SuccesAlert";

const styleBtnMailPsw =
  "block mx-auto p-3 w-3/4 transition duration-150 ease-in-out transform max-sm:hover:-translate-y-1 max-smhover:scale-110 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-50 bg-primary rounded-8 tracking-wide text-white placeholder-white border-none mb-3 sm:text-xl placeholder-text";


const FormRegister = () => {
  const {
    errorLogIn,
    handleBlurLogIn,
    handleChangeLogIn,
    userLogIn,
    response,
  } = useContext(UserContext);
  const { mail, password } = errorLogIn;

  console.log(userLogIn);
  
  return (
    <div className="w-full">
      {response && (
        <SuccesAlert message="Tu cuenta ha sido creada! Revisa tu correo para confirmar tu cuenta" />
      )}
      <form className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex flex-col text-center gap-10 justify-center items-center h-screen ">
        <h1 className="text-center text-4xl mb-6 font-caprasimo text-[#FFE4E4] w-3/4">
          Crea tu cuenta ahora mismo!
        </h1>

        <input
          className={styleBtnMailPsw}
          type="text"
          onChange={handleChangeLogIn}
          onBlur={handleBlurLogIn}
          value={userLogIn.mail}
          name="mail"
          placeholder="Email"
        />

        {errorLogIn.mail && <ErrorAlert message={mail} />}

        <input
          className={styleBtnMailPsw}
          type="password"
          onChange={handleChangeLogIn}
          onBlur={handleBlurLogIn}
          value={userLogIn.password}
          name="password"
          placeholder="Contraseña"
        />

        {errorLogIn.password && <ErrorAlert message={password} />}

        <Link
          to="/registrando_user"
          className="block mx-auto p-3 w-3/4 transition duration-150 ease-in-out transform max-sm:hover:-translate-y-1 max-sm:hover:scale-110 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-50 bg-second bg-gradient rounded-2xl tracking-wide text-white mb-3"
        >
          <button type="button" className="md:text-xl">
            Crear cuenta
          </button>
        </Link>
        <p
          id="helper-text-explanation"
          className="mt-2 text-center text-primary text-white"
        >
          ¿Ya tienes una cuenta?
          <Link
            to="/iniciar_sesion"
            className="font-medium ml-2 md:text-lg hover:underline text-[#FF8181]"
          >
            Inicia sesión
          </Link>
        </p>
      </form>
    </div>
  );
};

export default FormRegister;
