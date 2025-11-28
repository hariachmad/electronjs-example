import { createContext, useState, useContext, useEffect } from "react";

export const FallDetectionContext = createContext({});

export const FallDetectionProvider = ({ children }) => {
    const [fallDetected, setFallDetected] = useState(false);

    return (
        <FallDetectionContext.Provider value={{ fallDetected, setFallDetected }}>
            {children}
        </FallDetectionContext.Provider>
    );
}