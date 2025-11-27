import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_SOCKET_URL);

export const RootLayout = () => {
  const [isTalking, setIsTalking] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsTalking(!isTalking);
    window.electronAPI.sendMessage("Hello Form React");
  };

  useEffect(() => {
    window.electronAPI.onNavigate((page) => {
      console.log("Navigating to:", page);
      navigate(page);
    });
  }, [navigate]);

  useEffect(() => {
    isTalking
      ? socket.emit("recordCommand", "start_recording")
      : socket.emit("recordCommand", "stop_recording");
  }, [isTalking]);

  useEffect(() => {
    // window.electronAPI.onReply((data) => {
    //   console.log("Balasan dari main:", data);
    // });

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
    <div className="h-screen flex flex-col justify-between bg-transparent">
      <div className="">
        <Outlet />
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-transparent flex justify-center my-5">
        <button
          onClick={handleClick}
          className={`px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 ${isTalking
            ? "bg-red-500 hover:bg-red-600 shadow-red-500/40"
            : "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/40"
            }`}
        >
          Speech
        </button>
      </div>
    </div>
  );
};
