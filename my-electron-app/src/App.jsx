import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import {
  DoctorAppointmentMonth,
  DoctorAppointmentToday,
  DoctorAppointmentWeek,
  MedicalReminder,
  MyMedicineMonth,
  MyMedicineToday,
  MyMedicineWeek,
  ReminderDashboard,
  SpeechMode,
} from "./pages";

import { RootLayout } from "./layout";

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <SpeechMode />,
        },
        {
          path: "/reminder",
          element: <ReminderDashboard />,
        },
        {
          path: "/medical-reminder",
          element: <MedicalReminder />,
        },
        {
          path: "/my-medicine-today",
          element: <MyMedicineToday />,
        },
        {
          path: "/my-medicine-week",
          element: <MyMedicineWeek />,
        },
        {
          path: "/my-medicine-month",
          element: <MyMedicineMonth />,
        },
        {
          path: "/doctor-appointment-today",
          element: <DoctorAppointmentToday />,
        },
        {
          path: "/doctor-appointment-week",
          element: <DoctorAppointmentWeek />,
        },
        {
          path: "/doctor-appointment-month",
          element: <DoctorAppointmentMonth />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
