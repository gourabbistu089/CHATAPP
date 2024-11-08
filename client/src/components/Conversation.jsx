import React from "react";

function Conversation() {
  return (
    <>
      <div className=" flex gap-2 items-center hover:bg-sky-700 rounded py-1 cursor-pointer p-2 ">
        <div class="avatar online">
          <div class="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      <div className=" flex flex-col flex-1 "> 
        <div className="flex gap-3 justify-between">
            <p className="font-bold text-slate-300 text-lg"> Jonh Doe</p>
            <span className=" text-xl">❤️</span>
        </div>

      </div>
      </div>

      <div className=" divider my-0 py-0 h-1"/>
    </>
  );
}

export default Conversation;