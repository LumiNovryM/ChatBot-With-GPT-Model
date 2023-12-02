export function ChatBox() {
  return (
    <>
      <button className="chatbot-toggler fixed right-[40px] bottom-[35px] h-[50px] w-[50px] bg-[#27332D] text-[#03B96B] outline-none border-none rounded-[50%] cursor-pointer flex items-center justify-center">
        <span className="material-symbols-outlined absolute">mode_comment</span>
        <span className="material-symbols-outlined absolute opacity-[0]">close</span>
      </button>
      <div className="chatbot relative bg-[#1f2425] w-[420px] h-[480px] rounded-[15px] overflow-hidden scale-[0.5] opacity-0 pointer-events-none mt-[50px]">
        <header className="bg-[#27332D] py-[16px] text-center">
          <h2 className="text-[#03B96B] text-[1.4rem]">ZyraNova</h2>
        </header>
        <ul id="chatbox" className="chatbox h-[510px] overflow-y-auto pt-[30px] pr-[20px] pl-[20px] pb-[70px]">
          {/* <li className="chat incoming flex ">
            <span className="material-symbols-outlined h-[32px] w-[32px] text-[#03B96B] text-center leading-[32px] rounded-[4px] mr-[10px] mb-[7px] self-end">
              smart_toy
            </span>
            <p className="bg-[#535F59] px-[16px] py-[12px] rounded-tl-[0px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] text-[0.95rem] max-w-[75%]">
              Hi there <br /> How can i help you today?
            </p>
          </li> */}
          {/* <li className="chat outgoing">
            <p className="bg-[#27332D] px-[12px] py-[16px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[0px] rounded-bl-[10px] text-[0.95rem] max-w-[75%] mt-[20px]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </li> */}
        </ul>
        <div className="chat-input flex gap-[5px] absolute bottom-0 py-[5px] px-[20px] bg-[#27332D] w-[100%]">
          <textarea
            id="input-message"
            placeholder="Enter a message..."
            required
            className="border-none outline-none text-[0.95rem] bg-[#27332D] resize-none pt-[16px] pr-[15px] pb-[16px] pl-[0px] h-[55px] w-[100%] text-white"
          ></textarea>
          <span
            id="send-btn"
            className="material-symbols-outlined text-[#03B96B] cursor-pointer self-end h-[55px] invisible"
            style={{ lineHeight: "55px" }}
          >
            send
          </span>
        </div>
      </div>
    </>
  );
}
