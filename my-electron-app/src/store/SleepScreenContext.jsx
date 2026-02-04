import { createContext, useState, useContext, useEffect } from "react";

export const SleepScreenContext = createContext({});

export const SleepScreenProvider = ({ children }) => {
    const [sleepScreen, setSleepScreen] = useState(false);

    return (
        <SleepScreenContext.Provider value={{ sleepScreen, setSleepScreen }}>
            {children}
        </SleepScreenContext.Provider>
    );
}