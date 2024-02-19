import { TypeKeys } from "../interface/TypeKeys"

export const getValidationError = (error: any) => {
   const codeMatcher:  TypeKeys <string> = {
      ERR_NETWORK: "Error de conexión"
   }

   return codeMatcher[error]
}