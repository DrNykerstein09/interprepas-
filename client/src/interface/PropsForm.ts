import { User } from "./User";
import { ErrorsForm } from "./ErrorsForm";
import { ErrorsServer } from "./ErrorsServer";

export default interface Props {
  user: User;
  handleBlur: (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLSelectElement, Element>
      | React.FocusEvent<HTMLTextAreaElement, Element>
  ) => void;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
  response?: boolean | null;
  errorFromServer?: ErrorsServer;
  error: ErrorsForm;
}

