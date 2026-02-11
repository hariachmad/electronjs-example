import { createContext, useContext, useEffect, useState } from "react";

const BrightnessContext = createContext();

export const BrightnessProvider = ({ children }) => {
  const [brightness, setBrightness] = useState(50);

  useEffect(() => {
    if (!window.electronAPI?.onBrightnessChange) return;

    const unsubscribe = window.electronAPI.onBrightnessChange((value) => {
      console.log("setBrightness value", value);
      if (value < 0 || value > 100) {
        return;
      }
      setBrightness(value);
    });
  }, []);

  return (
    <BrightnessContext.Provider value={{ brightness, setBrightness }}>
      {children}
    </BrightnessContext.Provider>
  );
};

export const useBrightnessContext = () => {
  const ctx = useContext(BrightnessContext);
  if (!ctx) throw new Error("useBrightness must be inside BrightnessProvider");
  return ctx;
};
