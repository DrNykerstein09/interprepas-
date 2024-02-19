import { createContext, useState } from "react";
import { User } from "../interface/User";
import { ErrorsForm } from "../interface/ErrorsForm";
import { ErrorsServer } from "../interface/ErrorsServer";
import { userApi } from "../api/userApi";
import handleErrorServer from "../utilities/handleErrorServer";
import { Navigate } from "react-router-dom";
import { INITIAL_STATE_logIn } from "../helpers/INITIAL_STATE/INITIAL_STATE_logIn";
import { INITIAl_STATE_signIn } from "../helpers/INITIAL_STATE/INITIAL_STATE_signIn";
import { IUserContext } from "../interface/Context/IUserContext";

interface propsContext {
  children: React.ReactNode;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: propsContext) => {
  const [isAuth, setIsAuth] = useState<boolean | string | null>(
    window.localStorage.getItem("isAuth")
  );

  const [userLogIn, setUserLogIn] = useState<User>(INITIAL_STATE_logIn);
  const [errorLogIn, setErrorLogIn] = useState({});
  const [errorServerLogIn, setErrorServerLogIn] = useState<ErrorsServer>({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<boolean | null>(null);

  const [userSignIn, setUserSignIn] = useState(INITIAl_STATE_signIn);
  const [errorServerSignIn, setErrorServerSignIn] = useState<string>("");
  const [errorSignIn, setErrorSignIn] = useState({ message: "" });

  const handleChangeLogIn = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserLogIn({ ...userLogIn, [name]: value });
  };

  const handleChangeSignIn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserSignIn({ ...userSignIn, [name]: value });
  };

  const validateFormLogIn = (user: User) => {
    const regexMail = /^\d{9}@alumno\.enp\.unam\.mx$/;
    /^[a-zA-Z0-9](?!.*?\.\.)(?!.*?\.$)(?!.*?_$)[a-zA-Z0-9_.]{0,28}[a-zA-Z0-9]$/;
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,18}$/;

    // eslint-disable-next-line prefer-const
    let errors: ErrorsForm = {};

    if (!user.mail.trim()) {
      errors.mail = "El correo es requerido";
    } else if (!regexMail.test(user.mail.trim())) {
      errors.mail = "El correo debe ser de la preparatoria";
    } else if (!user.password.trim()) {
      errors.password = "La contraseña es requerida";
    }

    if (!user.name.trim()) {
      errors.name = "El nombre es requerido";
    } else if (!regexName.test(user.name.trim())) {
      errors.name =
        "El nombre no puede contener números ni caracteres especiales y debe de tener una longitud máxima de 18 caracteres";
    }
    return errors;
  };

  const handleBlurLogIn = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLSelectElement, Element>
      | React.FocusEvent<HTMLTextAreaElement, Element>
  ) => {
    handleChangeLogIn(e);
    setErrorLogIn(validateFormLogIn(userLogIn));
  };

  const logIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorLogIn(validateFormLogIn(userLogIn));

    if (Object.keys(errorLogIn).length === 0) {
      setLoading(true);
      await userApi
        .post("/api/auth/signup", userLogIn)
        .then((res) => {
          setErrorServerLogIn({});
          setLoading(false);
          setResponse(true);
          localStorage.setItem("token", res.data.token);
          setUserLogIn(INITIAL_STATE_logIn);
          setTimeout(() => setResponse(null), 8000);
        })
        .catch(function (error) {
          setLoading(false);
          setErrorServerLogIn(handleErrorServer(error.response.data.error));
        });
    } else {
      return;
    }
  };

  const logOut = async () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("token");
    setIsAuth(false);
    return <Navigate to={"/"} />;
  };

  async function signIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (userSignIn.mail === "" || userSignIn.password === "") {
        setErrorSignIn({ message: "Todos los campos son obligatorios" });
        return;
      } else {
        setErrorSignIn({ message: "" });
        if (errorSignIn.message === "") {
          await userApi
            .post("/api/auth/signin", userSignIn)
            .then((res) => {
              setErrorServerSignIn("");
              setUserSignIn(INITIAl_STATE_signIn);
              localStorage.setItem("userId", res.data.user._id);
              localStorage.setItem("token", res.data.token);
            })
            .then(() => {
              localStorage.setItem("isAuth", "true");
              setIsAuth(true);
              return <Navigate to={"/private"} />;
            })
            .catch(function (error) {
              setErrorServerSignIn(error.response.data);
            });
        } else {
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const values = {
    userLogIn,
    errorLogIn,
    errorServerLogIn,
    loading,
    response,
    errorSignIn,
    errorServerSignIn,
    isAuth,
    setUserLogIn,
    handleChangeSignIn,
    handleBlurLogIn,
    handleChangeLogIn,
    logOut,
    logIn,
    signIn,
    setResponse,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
