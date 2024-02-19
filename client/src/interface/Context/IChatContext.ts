import { SearchResult } from "../../components/message/interface/Interfaces";
import { Chat } from "../../components/message/interface/Interfaces";

export type IChatContext = {
  searchBar: boolean;
  setSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
  searchInput: boolean;
  setSearchInput: React.Dispatch<React.SetStateAction<boolean>>;
  clearSearch: boolean;
  setClearSearch: React.Dispatch<React.SetStateAction<boolean>>;
  searchIU: boolean;
  setsearchIU: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchResult: SearchResult[] | [];
  setSearchResult: React.Dispatch<React.SetStateAction<SearchResult[] | []>>;
  chats: Chat[];
  setChats: React.Dispatch<React.SetStateAction<Chat[]>>;
  selectedChat: Chat | undefined;
  setSelectedChat: React.Dispatch<React.SetStateAction<Chat | undefined>>;
  loggedUser: string | null | undefined;
  setLoggedUser: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
  notification: never[] | any;
  setNotification: React.Dispatch<React.SetStateAction<never[] | any>>;
  fetchAgain: boolean;
  setFetchAgain: React.Dispatch<React.SetStateAction<boolean>>;
  onFocusSearch: () => void;
  clearButton: () => void;
  submitSearch: () => void;
  accessChat: (userId: string) => void;
  fetchChats: () => Promise<void>;
  accessChatCard: (userId: string | undefined) => void;
};
