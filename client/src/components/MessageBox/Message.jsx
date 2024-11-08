import React from "react";

function Message() {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          You very Annoying,
          <br />I have the high ground.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">You underestimate my power!</div>
        <div className=" chat-footer opacity-50 text-xs flex gap-1 items-center">12:34</div>
      </div>
    </div>
  );
}

export default Message;
