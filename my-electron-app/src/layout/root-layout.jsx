import { use, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { FallDetectionContext } from "../store/FallDetectionContext";
import { Modal } from 'react-responsive-modal';
import FallDetected from "../pages/fall-detection/fall-detected";
import { HelpDetectionContext } from "../store/HelpDetectedContext";
import HelpDetected from "../pages/fall-detection/help-detected";

const socket = io("http://localhost:3000", {
  transports: ["websocket"],
  autoConnect: true,
});


export const RootLayout = () => {
  const [isTalking, setIsTalking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const navigate = useNavigate();
  const { fallDetected, setFallDetected } = useContext(FallDetectionContext);
  const { helpDetected, setHelpDetected } = useContext(HelpDetectionContext);

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
    socket.on("connect", () => {
      console.log("Connected to socket:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.log("Socket connect error:", err.message);
    });

    socket.onAny((event, data) => {
      console.log("EVENT MASUK:", event, data);
    });

    socket.on("recordingState", (data) => {
      switch (data) {
        case "ON":
          setIsRecording(true);
          break;
        case "OFF":
          setIsRecording(false);
          break;
        default:
          break;
      }
    });

    socket.on("navigateCommand", (data) => {
      switch (data) {
        case "/fall":
          setFallDetected(true);
          setHelpDetected(false);
          break;
        case "/help":
          setFallDetected(false);
          setHelpDetected(true);
          break;
        case "/i-am-ok":
          setFallDetected(false);
          setHelpDetected(false);
          break;
        default:
          break;
      }
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("fall");
      socket.off("help");
      socket.off("ok");
    };
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col justify-between bg-transparent">
        <div className="">
          {
            fallDetected ? <Modal open={fallDetected} onClose={() => setFallDetected(false)} center >
              <FallDetected />
            </Modal> : <Outlet />
          }
          {
            helpDetected ? <Modal open={helpDetected} onClose={() => setHelpDetected(false)} center >
              <HelpDetected />
            </Modal> : <></>
          }
        </div>
        <div className="fixed bottom-0 left-0 w-full bg-transparent flex justify-center my-5 gap-5">
          <div className={`flex items-center gap-2 px-4 py-3 rounded-lg ${isRecording ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
            }`}>
            <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-gray-400'
              }`}></div>
            <span className="font-medium">
              {isRecording ? 'Recording' : 'Not Recording'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
