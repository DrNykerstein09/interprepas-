import { User } from "../User";

export interface IUserProfile {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleEditDesc: () => void;
  updateHiddenGroup: boolean | undefined;
  updateHiddenInstagram: boolean | undefined;
  setUpdateHiddenGroup: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  handleEditPic: () => void;
  handleChangeGroup: (e: React.ChangeEvent<HTMLInputElement>) => void;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  profile: User | undefined;
  setProfile: React.Dispatch<React.SetStateAction<User | undefined>>;
  editDesc: boolean;
  setEditDesc: React.Dispatch<React.SetStateAction<boolean>>;
  editPic: string;
  setEditPic: React.Dispatch<React.SetStateAction<string>>;
  des: {};
  setDes: React.Dispatch<React.SetStateAction<{}>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  fetchUsers: () => Promise<void>;
}
