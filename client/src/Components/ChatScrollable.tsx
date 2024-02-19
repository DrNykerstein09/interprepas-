import { useContext } from "react";
import ScrollableFeed from "react-scrollable-feed";
import { ChatbotContext } from "../context/chatBotContext";

const ChatScrollable = () => {
  const { chats } = useContext(ChatbotContext);

  return (
    <ScrollableFeed>
      {chats.map((m, i) => {
        return (
          <div className="flex flex-col" key={i}>
            <span
              className="message"
              style={{
                backgroundColor: "#FFD3D3",
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
              {m.querry}
            </span>
            <span
              className="message"
              style={{
                backgroundColor: "#F3F4F6",
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
      })}
    </ScrollableFeed>
  );
};

export default ChatScrollable;
