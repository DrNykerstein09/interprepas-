
import Header from "./Header";
import { Link } from "react-router-dom";

const Home = () => {
  const styleBtn =
    "lg:w-2/4 block mx-auto p-3 w-3/4 transition duration-150 ease-in-out transform max-sm:hover:-translate-y-1 max-sm:hover:scale-110 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-50 bg-primary rounded-2xl tracking-wide mb-3 text-textButton";

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-col gap-7 mt-auto mb-35">
          <p className="text-center text-lg font-kufam text-text">
            ¿Ya tienes una cuenta?
          </p>
          <Link to="/iniciar_sesion">
            <button className={styleBtn}>
              <h2 className="text-2xl">Inicia sesión</h2>
            </button>
          </Link>
          <div></div>
          <Link to="/registrarse">
            <button className={styleBtn}>
              <h2 className="text-2xl">Regístrate</h2>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
