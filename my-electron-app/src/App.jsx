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
} from "./pages/medical-activity-reminder";

import { RootLayout } from "./layout";
import { MedicalActivityReminder, SpeechMode } from "./pages";
import ActivityReminder from "./pages/activity-reminder/activity-reminder";
import { HealthMonthly, HealthToday, HealthWeekly, SocialActivityMonthly, SocialActivityWeekly } from "./pages/activity-reminder";
import { SocialActivityToday } from "./pages/activity-reminder/social-activity-today";

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
          element: <MedicalActivityReminder />,
        },
        {
          path: "/medical-reminder",
          element: <MedicalReminder />,
        },
        {
          path: "/activity-reminder",
          element: <ActivityReminder />,
        },

        // ======================
        // MEDICINE SCHEDULE
        // ======================
        {
          path: "/medicine-schedule-today",
          element: <MyMedicineToday />,
        },
        {
          path: "/medicine-schedule-weekly",
          element: <MyMedicineWeek />,
        },
        {
          path: "/medicine-schedule-monthly",
          element: <MyMedicineMonth />,
        },
        {
          path: "/medicine-schedule-specific-day",
          element: <MyMedicineToday />,
        },

        // ======================
        // DOCTOR APPOINTMENT
        // ======================
        {
          path: "/doctor-appointment-schedule-today",
          element: <DoctorAppointmentToday />,
        },
        {
          path: "/doctor-appointment-schedule-weekly",
          element: <DoctorAppointmentWeek />,
        },
        {
          path: "/doctor-appointment-schedule-monthly",
          element: <DoctorAppointmentMonth />,
        },
        {
          path: "/doctor-appointment-schedule-specific-day",
          element: <DoctorAppointmentToday />,
        },

        // ======================
        // HEALTH
        // ======================
        {
          path: "/health-today",
          element: <HealthToday />,
        },
        {
          path: "/health-weekly",
          element: <HealthWeekly />,
        },
        {
          path: "/health-monthly",
          element: <HealthMonthly />,
        },

        // ======================
        // HEALTH
        // ======================
        {
          path: "/social-activity-today",
          element: <SocialActivityToday />,
        },
        {
          path: "/social-activity-weekly",
          element: <SocialActivityWeekly />,
        },
        {
          path: "/social-activity-monthly",
          element: <SocialActivityMonthly />,
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
