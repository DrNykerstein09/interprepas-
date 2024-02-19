import { User } from "../User";

export interface ICardContext {
  pages: number;
  users: User[];
  slideRight: boolean;
  slideLeft: boolean;
  setPages: React.Dispatch<React.SetStateAction<number>>;
  setSlideRight: React.Dispatch<React.SetStateAction<boolean>>;
  setSlideLeft: React.Dispatch<React.SetStateAction<boolean>>;
  fetchUsers: () => Promise<void>;
  handleNext: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handlePrev: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleMenu: () => void;
  handleMessage: () => void;
  handleNothing: () => void;
  idUserLiked: string | undefined;
  setIdUserLiked: React.Dispatch<React.SetStateAction<string | undefined>>;
}
