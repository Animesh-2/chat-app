import React from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log("messages:", messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [...Array(4)].map((_, idx) => <MessageSkeleton key={idx} />)}
      
      
      {!loading && messages}
    </div>
  );
};

export default Messages;
