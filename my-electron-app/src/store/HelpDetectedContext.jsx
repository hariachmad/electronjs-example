import { createContext, useState, useContext, useEffect } from "react";
import io from "socket.io-client";

export const HelpDetectionContext = createContext({});

const socket = io(window.EncodedVideoChunk.SOCKET_IO_SERVER);

export const HelpDetectionProvider = ({ children }) => {
    const [helpDetected, setHelpDetected] = useState(false);
    useEffect(() => {
        return () => {
        };
    }, [helpDetected]);
    return (
        <HelpDetectionContext.Provider value={{ helpDetected, setHelpDetected }}>
            {children}
        </HelpDetectionContext.Provider>
    );
}