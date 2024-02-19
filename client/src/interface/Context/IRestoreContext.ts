export type IRestoreContext = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  restoreAccount: (e: React.FormEvent<HTMLFormElement>) => void;
  restoreUser: string;
  alert: boolean;
  errorAlert: boolean;
};
