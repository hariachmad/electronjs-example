import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import botTalking from "../assets/animations/bot.json";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

const socket = io("http://localhost:3000");
export const SpeechMode = () => {
  const [isTalking, setIsTalking] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsTalking(!isTalking);
    window.electronAPI.sendMessage("Hello Form React");
  };
  useEffect(() => {
    isTalking
      ? socket.emit("recordCommand", "start_recording")
      : socket.emit("recordCommand", "stop_recording");
  }, [isTalking]);

  useEffect(() => {
    window.electronAPI.onReply((data) => {
      console.log("Balasan dari main:", data);
    });

    socket.on("connect", () => {
      console.log("✅ Terhubung ke server:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("❌ Terputus dari server");
    });

    socket.on("receive_message", (data) => {
      console.log("📩 Pesan dari server:", data);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("receive_message");
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white font-poppins">
      <div className="flex flex-col items-center space-y-6 w-full max-w-md">
        <Lottie
          animationData={botTalking}
          loop={isTalking}
          autoplay={isTalking}
          className="w-64 h-64"
        />

        <div className="flex flex-row items-center gap-2">
          <button
            onClick={handleClick}
            className={`px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ${
              isTalking
                ? "bg-red-500 hover:bg-red-600 shadow-red-500/40"
                : "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/40"
            }`}
          >
            {isTalking ? "Stop Talking" : "Start Talking"}
          </button>
          <button
            onClick={() => {
              navigate("/reminder");
            }}
            className="px-6 py-3 rounded-full text-lg font-semibold shadow-lg bg-yellow-500 hover:bg-yellow-600 shadow-yellow-500/40"
          >
            Reminder Page
          </button>
        </div>
      </div>
    </div>
  );
};
