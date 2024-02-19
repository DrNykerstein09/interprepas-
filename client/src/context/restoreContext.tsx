import { createContext, useState } from "react";
import { IRestoreContext } from "../interface/Context/IRestoreContext";
import { userApi } from "../api/userApi";
interface propsContext {
  children: React.ReactNode;
}

export const RestoreContext = createContext({} as IRestoreContext);

export const RestoreProvider = ({ children }: propsContext) => {
  const [restoreUser, setRestoreUser] = useState("");
  const [alert, setAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestoreUser(e.target.value);
  };

  const restoreAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = {
        mail: restoreUser,
      };
      await userApi
        .post("/api/auth/forgotPassword", data)
        .then(() => {
          setAlert(true), setTimeout(() => setAlert(false), 5000);
        }).catch((error) => {
          console.log(error);
          setErrorAlert(true), setTimeout(() => setErrorAlert(false), 5000);
        })
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    handleChange,
    restoreAccount,
    restoreUser,
    alert,
    errorAlert,
  };

  return (
    <RestoreContext.Provider value={values}>{children}</RestoreContext.Provider>
  );
};
