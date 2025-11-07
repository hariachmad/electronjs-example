import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const RootLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.electronAPI.onNavigate((page) => {
      console.log("Navigating to:", page);
      navigate(page);
    });
  }, [navigate]);

  return <div><Outlet/></div>;
};
