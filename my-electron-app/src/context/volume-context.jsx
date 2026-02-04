import { createContext, useContext, useEffect, useState } from "react";

export const VolumeContext = createContext();

export const VolumeProvider = ({ children }) => {
  const [volume, setVolume] = useState(20);

  useEffect(() => {
    if (!window.electronAPI?.onVolumeChange) return;

    const unsubscribe = window.electronAPI.onVolumeChange((value) => {
      if (value < 0 || value >100) {
        return;
      }
      setVolume(value);
    });

  }, []);

  return (
    <VolumeContext.Provider value={{ volume, setVolume }}>
      {children}
    </VolumeContext.Provider>
  );
};

export const useVolumeContext = () => {
  const ctx = useContext(VolumeContext);
  if (!ctx) throw new Error("useVolumeContext must be inside VolumeProvider");
  return ctx;
};
