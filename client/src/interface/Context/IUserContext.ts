import { ErrorsForm } from "../ErrorsForm";
import { ErrorsServer } from "../ErrorsServer";
import { User } from "../User";
import { UserSignIn } from "../UserSignIn";

export interface IUserContext {
  userLogIn: User;
  errorLogIn: ErrorsForm;
  errorServerLogIn: ErrorsServer;
  loading: boolean;
  response: boolean | null;
  errorSignIn: UserSignIn;
  errorServerSignIn: string;
  isAuth: boolean | string | null;
  setUserLogIn: React.Dispatch<React.SetStateAction<User>>;
  handleChangeLogIn: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleChangeSignIn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlurLogIn: (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLSelectElement, Element>
      | React.FocusEvent<HTMLTextAreaElement, Element>
  ) => void;
  logIn: (e: React.FormEvent<HTMLFormElement>) => void;
  logOut: () => void;
  signIn: (e: React.FormEvent<HTMLFormElement>) => void;
  setResponse: React.Dispatch<React.SetStateAction<boolean | null>>;
}
