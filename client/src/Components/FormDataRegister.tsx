import HeaderLogo from "./HeaderLogo";
import { useContext } from "react";
import { UserContext } from "../context/authContext";
import { Navigate } from "react-router-dom";
import ErrorAlert from "../helpers/ErrorAlert";
import CreateAccountButton from "./ComponentsForm/CreateAccount/CreateAccountButton";
// import NextPageButton from "../Components/ComponentsForm/NextPageButton";
// import SelectShift from "./ComponentsForm/SelectShift";
// import SelectGroup2 from "./ComponentsForm/SelectGroup2";
// import SelectGroup1 from "./ComponentsForm/SelectGroup1";
// import SelectBirthDay from "./ComponentsForm/SelectBirthDay";
// import SelectGender from "./ComponentsForm/SelectGender";
// import NextPageButton from "./ComponentsForm/NextPageButton";
// import FielsetGroupMatch from "./ComponentsForm/FielsetGroupMatch";
// import SelectGenderMatch from "./ComponentsForm/SelectGenderMatch";
// import ToggleGroup from "./ComponentsForm/CreateAccount/ToggleGroup";

const styleBtnName =
  "block mx-auto p-3 w-3/4 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-102 focus:outline-none focus:ring focus:ring-hoverPrimary focus:ring-opacity-50 focus:bg-hoverPrimary bg-primary rounded-8 tracking-wide text-white border-none placeholder-white md:text-xl";

const FormDataRegister = () => {
  const { errorLogIn, handleBlurLogIn, handleChangeLogIn, userLogIn, logIn } =
    useContext(UserContext);
  if (
    errorLogIn.mail ||
    errorLogIn.password ||
    userLogIn.mail === "" ||
    userLogIn.password === ""
  ) {
    return <Navigate to="/registrarse" />;
  }

  const { name } = errorLogIn;
  console.log(userLogIn);

  return (
    <div className="w-full py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <HeaderLogo message="Datos Personales" />
      <form className="flex flex-col gap-9 mt-12" onSubmit={logIn}>
        <input
          className={styleBtnName}
          type="text"
          onChange={handleChangeLogIn}
          value={userLogIn.name}
          onBlur={handleBlurLogIn}
          name="name"
          placeholder="Nombre"
        />
        {errorLogIn.name && <ErrorAlert message={name} />}

        <CreateAccountButton />
      </form>
    </div>
  );
};

export default FormDataRegister;
