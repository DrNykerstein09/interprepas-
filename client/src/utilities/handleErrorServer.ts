import { ErrorsServer } from "../interface/ErrorsServer";

const handleErrorServer = (errors: string) => {
  const error: ErrorsServer = {};
  switch (true) {
    case /mail_1 dup key/.test(errors):
      error.mailError = "El correo ya está registrado";
      break;
    case /instagram_1 dup key/.test(errors):
      error.instagramError = "El usuario ya está registrado";
    default:
      break;
  }
  return error;
};

export default handleErrorServer
