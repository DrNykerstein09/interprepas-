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
}

export const ChatbotContext = createContext({} as IChatbotContext);

export const ChatBotProvider = ({ children }: PropsContext) => {
  const [response, setResponse] = useState("");
  const [message, setMessage] = useState("");

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(message);
    setMessage(e.target.value);
  };

  const submitQuerry = async (resp: string) => {
   if(!message) return;
    setResponse(resp);
    const userId = localStorage.getItem("userId");

    const data = {
      userId,
      response,
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

  const values = {
    response,
    handleTyping,
    message,
    setResponse,
    submitQuerry,
  };

  return (
    <ChatbotContext.Provider value={values}>{children}</ChatbotContext.Provider>
  );
};
