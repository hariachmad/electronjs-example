import { createContext, useState, useContext, useEffect } from "react";
import io from "socket.io-client";

export const HelpDetectionContext = createContext({});

const socket = io("http://localhost:3000");

export const HelpDetectionProvider = ({ children }) => {
    const [helpDetected, setHelpDetected] = useState(false);
    useEffect(() => {
        socket.on("help-detection", () => {
            setHelpDetected(true);
        });

        socket.on("ok", () => {
            setHelpDetected(false);
        });

        return () => {
        };
    }, [helpDetected]);
    return (
        <HelpDetectionContext.Provider value={{ helpDetected, setHelpDetected }}>
            {children}
        </HelpDetectionContext.Provider>
    );
}