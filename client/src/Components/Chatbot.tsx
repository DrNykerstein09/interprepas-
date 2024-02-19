/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import useLLM from "usellm";
import { ChatbotContext } from "../context/chatBotContext";
import ErrorAlert from "../helpers/ErrorAlert";
import ChatScrollable from "./ChatScrollable";
import { redirect } from "react-router-dom";

const Chatbot = () => {
  const [fetch, setFetch] = useState(false);
  const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });
  const [alert, setAlert] = useState(false);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const { handleTyping, message, submitQuerry, getMessage, chats } =
    useContext(ChatbotContext);

  const chatBotResponse = async () => {
    const data = await llm.chat({
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    return data.message.content;
  };

  const handleSubmitMessage = async () => {
    if (!message) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      return;
    } else {
      await chatBotResponse()
        .then(async (res) => {
          submitQuerry(res);
          setAlert(false);
          window.location.reload();
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getMessage();
  }, [chats]);

  useEffect(() => {
    getMessage();
  }, []);

  useEffect(() => {
    if (fetch) {
      getMessage();
      setFetch(false);
    }
  }, [fetch]);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chats]);

  const handleLogOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    window.location.reload();
    // redirect("/");
  };

  return (
    <div className="flex flex-col h-screen">
      <nav className="flex items-center bg-primary justify-start p-5 pb-3 pt-3 sticky top-0 z-5">
        <span className="mr-4 ml-2" onClick={handleLogOut}>
          <svg
            className="w-8 h-8 text-[#1e2936]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="#1e2936"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
        </span>
        <section className="flex items-center">
          <img
            src={"/chatbotProfile.jpg"}
            className="w-15 h-15 rounded-full m-2 mt-2 mb-2"
            alt=""
          />
          <h4 className="text-2xl text-black font-medium flex-col">
            Chatbot
          </h4>
        </section>
      </nav>

      <div
        className="flex col overflow-y-scroll messages w-full"
        ref={chatWindowRef}
      >
        {alert && <ErrorAlert message="Debes escribir algo" />}
        <div className="w-full">
          <ChatScrollable />
        </div>
      </div>

      <section className="flex items-center p-4 place-content-around mt-auto ">
        <input
          type="text"
          className="bg-[#ffa1a1] rounded-3xl w-full mr-2 ::placeholder-gray-800 placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-500 p-3"
          value={message}
          placeholder="Escribe algo..."
          onChange={handleTyping}
        />
        <button
          onClick={handleSubmitMessage}
          className="rounded-full bg-[#ffa1a1] w-14 h-12 ml-2"
        >
          <svg
            className="w-7 h-7 text-gray-800 m-auto transform -rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m17 9-2-8-16 8 16 8 2-8Zm0 0H9"
            />
          </svg>
        </button>
      </section>
    </div>
  );
};

export default Chatbot;
