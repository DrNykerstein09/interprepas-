import HeaderLogo from "./HeaderLogo";
import { Link, Navigate } from "react-router-dom";
import ErrorAlert from "../helpers/ErrorAlert";
import Loading from "../helpers/Loading";
import SuccesAlert from "../helpers/SuccesAlert";
import { UserContext } from "../context/authContext";
import { useContext } from "react";
import CreateAccountButton from "../Components/ComponentsForm/CreateAccount/CreateAccountButton";

const CreateAccount = () => {
  const { errorLogIn, userLogIn, errorServerLogIn, response, loading, logIn } =
    useContext(UserContext);

  if (
    errorLogIn.name ||
    userLogIn.name === ""
  ) {
    return <Navigate to="/registrando_user" />;
  }

  console.log(userLogIn);

  const { mailError } = errorServerLogIn ?? {};
  const { instagramError } = errorServerLogIn ?? {};

  return (
    <form
      onSubmit={logIn}
      className="w-full py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
    >
      <Link to="/">
        <HeaderLogo message="Datos públicos" />
      </Link>
      <div className="flex flex-col gap-8 mt-10">
        {mailError && <ErrorAlert message={mailError} />}
        {instagramError && <ErrorAlert message={instagramError} />}
        {response && (
          <SuccesAlert message="Usuario registrado! Revisa tu correo que diste de alta para confirmar tu cuenta." />
        )}

        <CreateAccountButton />

        {loading && <Loading />}
      </div>
    </form>
  );
};

export default CreateAccount;
