/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import ScrollableFeed from "react-scrollable-feed";
import useLLM from "usellm";
import { ChatbotContext } from "../context/chatBotContext";
import { userApi } from "../api/userApi";
// import chatBotResponse from "../helpers/chatbotResponse";
// import { getSender, isLastMessage, isSameSender } from "../helpers/Functions";

const Chatbot = () => {
  const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });
  const userId = localStorage.getItem("userId");
  // const lastMessageRef = useRef<HTMLDivElement>(null);
  const { response, handleTyping, message, setResponse, submitQuerry } =
    useContext(ChatbotContext);

  const chatBotResponse = async () => {
    const data = await llm.chat({
      messages: [
        {
          role: "user",
          content: "Hola",
        },
      ],
      stream: true,
      onStream: ({ message }) => {
        setResponse(message.content);
      },
    });
    return data.message.content;
  };
  const handleSubmitMessage = async () => {
    await chatBotResponse().then((resp) => {
      submitQuerry(resp);
    });
  };

  useEffect(() => {
    if (userId) {
      const config = {
        params: {
          userId, // Include userId as a query parameter
        },
      };

      const data = userApi.get("/api/chatbot/getMessages", config);
      console.log(data);
    } else {
      // Handle the case where userId is null
    }
  }, [response]);


  return (
    <div className="flex flex-col h-screen">
      <div className="flex col overflow-y-scroll messages w-full">
        <div className="w-full">
          <ScrollableFeed>
            {/* {chat.map((m, i) => {
              return (
                <div className="flex flex-col" key={i}>
                  <span
                    className="message"
                    style={{
                      backgroundColor: `${i % 2 === 0 ? "#FFD3D3" : "#F3F4F6"}`,
                      width: "fit-content",
                      marginLeft: "auto",
                      marginTop: 10,
                      borderRadius: "20px",
                      padding: "8px 27px",
                      maxWidth: "75%",
                      color: "rgb(31, 41, 55)",
                      overflowWrap: "break-word",
                    }}
                  >
                    {m.query}
                  </span>
                  <span
                    className="message"
                    style={{
                      backgroundColor: `${i % 2 === 0 ? "#FFD3D3" : "#F3F4F6"}`,
                      marginLeft: 0,
                      width: "fit-content",
                      marginTop: 10,
                      borderRadius: "20px",
                      padding: "8px 27px",
                      maxWidth: "75%",
                      color: "rgb(31, 41, 55)",
                      overflowWrap: "break-word",
                    }}
                  >
                    {m.answer}
                  </span>
                </div>
              );
            })} */}
          </ScrollableFeed>
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
          className="rounded-full bg-[#ffa1a1] w-14 h-12 "
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
