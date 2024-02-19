import { createContext, useState } from "react";
import { userApi } from "../api/userApi";

interface PropsContext {
  children: React.ReactNode;
}

export interface IChatbotContext {
  response: string;
  setResponse: React.Dispatch<React.SetStateAction<string>>;
  handleTyping: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message: string;
  submitQuerry: (resp: string) => Promise<void>;
  getMessage: () => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setChats: React.Dispatch<React.SetStateAction<never[]>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chats: any[];
}

export const ChatbotContext = createContext({} as IChatbotContext);

export const ChatBotProvider = ({ children }: PropsContext) => {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  

  const userId = localStorage.getItem("userId");

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(message);
    setMessage(e.target.value);
  };

  const submitQuerry = async (resp: string) => {
    if (!message) return;

    const data = {
      userId,
      resp,
      message,
    };
    const res = await userApi
      .post("/api/chatbot/newMessage", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(res);
  };

  const getMessage = async () => {
    if (userId) {
      const config = {
        params: {
          userId,
        },
      };
      await userApi
        .get("/api/chatbot/getMessages", config)
        .then((res) => setChats(res.data.querries));
    } else {
      console.log("No existe el usuario, vuelve a iniciar sesión");
    }
  };

  const values = {
    response,
    handleTyping,
    message,
    setResponse,
    submitQuerry,
    getMessage,
    chats,
    setChats
  };

  return (
    <ChatbotContext.Provider value={values}>{children}</ChatbotContext.Provider>
  );
};
