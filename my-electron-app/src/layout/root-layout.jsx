import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { FallDetectionContext } from "../store/FallDetectionContext";
import { Modal } from 'react-responsive-modal';
import FallDetected from "../pages/fall-detection/fall-detected";
import { HelpDetectionContext } from "../store/HelpDetectedContext";
import HelpDetected from "../pages/fall-detection/help-detected";
import { SleepScreenContext } from "../store/SleepScreenContext";
import SleepScreen from "../pages/sleep/sleep-screen";
import { Home, Sun, Volume2, Bot } from 'lucide-react';
import { useVolumeContext } from "../context/volume-context";
import { useBrightnessContext } from "../context/brightness-context";

const socket = io(window.env.SOCKET_IO_SERVER, {
  transports: ["websocket"],
  autoConnect: true,
  auth: {
    userId: "frontend-ui"
  }
});


export const RootLayout = () => {
  const [isTalking, setIsTalking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const navigate = useNavigate();
  const { fallDetected, setFallDetected } = useContext(FallDetectionContext);
  const { helpDetected, setHelpDetected } = useContext(HelpDetectionContext);
  const { sleepScreen, setSleepScreen } = useContext(SleepScreenContext);
  const { volume, setVolume } = useVolumeContext();
  const { brightness, setBrightness } = useBrightnessContext();
  const [ robotStatus, setRobotStatus ] = useState("ready");


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

    socket.on("LISTENING", (data) => {
      console.log("LISTENING : ", data);
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

    socket.on("INCIDENT_FALL_DOWN_DETECTED", (data) => {
      console.log("INCIDENT_FALL_DOWN_DETECTED")
      setFallDetected(true);
      setHelpDetected(false);
    })

    socket.on("INCIDENT_HELP_EVENT_DETECTED", (data) => {
      setFallDetected(false);
      setHelpDetected(true);
      socket.emit("INCIDENT_HELP_EVENT_DETECTED_ACK");
    })

    socket.on("i_am_ok", (data) => {
      console.log("i_am_ok");
      setFallDetected(false);
      setHelpDetected(false);
      socket.emit("i_am_ok_ack");
    })

    socket.on("SLEEP", (data) => {
      setSleepScreen(true);
    })

    socket.on("PING_DEVICE_UP", (data) => {
      setSleepScreen(false);
    })

    socket.on("SPEECH_MODULE_READY", () => {
      console.log("SPEECH_MODULE_READY");
      setRobotStatus("ready");
    });

    socket.on("SPEECH_MODULE_PROCESS", () => {
      console.log("SPEECH_MODULE_PROCESS");
      setRobotStatus("processing");
    })

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("LISTEN");
      socket.off("INCIDENT_FALL_DOWN_DETECTED");
      socket.off("INCIDENT_HELP_EVENT_DETECTED");
      socket.off("i-am-ok");
      socket.off("SLEEP");
      socket.off("PING_DEVICE_UP");
    };
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col justify-between bg-transparent">
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => {
              navigate("/reminder")
            }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Home size={20} />
              <span className="font-medium">Home</span>
            </button>

            <div className="flex items-center gap-6">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${robotStatus === "ready"
                  ? 'bg-green-100 text-green-700'
                  : 'bg-orange-100 text-orange-700'
                }`}>
                <Bot size={20} className={robotStatus === "processing" ? "animate-pulse" : ""} />
                <span className="font-medium">
                  {robotStatus === "ready" ? 'Robot Ready' : 'Processing...'}
                </span>
                <div className={`w-2 h-2 rounded-full ${robotStatus === "ready" ? 'bg-green-500' : 'bg-orange-500 animate-pulse'
                  }`}></div>
              </div>
              <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg">
                <Sun size={20} className="text-yellow-500" />
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={brightness}
                  className="w-32 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
                <span className="text-sm font-medium text-gray-700 w-10">
                  {brightness}%
                </span>
              </div>

              <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg">
                <Volume2 size={20} className="text-blue-500" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  className="w-32 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <span className="text-sm font-medium text-gray-700 w-10">
                  {volume}%
                </span>
              </div>
            </div>
          </div>
        </div>
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
          {
            sleepScreen ? <Modal open={sleepScreen} onClose={() => setSleepScreen(false)} center >
              <SleepScreen />
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
