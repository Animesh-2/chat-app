import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://i.pravatar.cc/150?u=fake@pravatar.com"
            alt="Tailwind css chat bubble component"
          />
        </div>
      </div>
      <div className={`chat-bubble text-black bg-blue-500`}>hi! what's up?</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  );
};

export default Message;
