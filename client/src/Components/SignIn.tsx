import ErrorAlert from "../helpers/ErrorAlert";
import { UserContext } from "../context/authContext";
import { useContext } from "react";
import Mail from "./../Components/ComponentsSignIn/Mail";
import Password from "./../Components/ComponentsSignIn/Password";
import SignInButton from "./../Components/ComponentsSignIn/SignInButton";
import DontHaveAccount from "./../Components/ComponentsSignIn/DontHaveAccount";
import RestoreAccount from "./../Components/ComponentsSignIn/RestoreAccount";

const SignIn = () => {
  const { errorSignIn, signIn, errorServerSignIn} =
    useContext(UserContext);

  return (
    <div className="flex items-center justify-center min-h-screen py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <form className="flex flex-col gap-3 w-3/4 m-auto" onSubmit={signIn}>
        {errorSignIn.message && <ErrorAlert message={errorSignIn.message} />}
        {errorServerSignIn && <ErrorAlert message={errorServerSignIn} />}

        <h1 className="text-center m-auto text-4xl mb-6 font-caprasimo text-[#FFE4E4] w-3/4">
          Inicia sesión
        </h1>

        <Mail />

        <Password />

        <SignInButton />

        <DontHaveAccount />

        <RestoreAccount />
      </form>
    </div>
  );
};

export default SignIn;
