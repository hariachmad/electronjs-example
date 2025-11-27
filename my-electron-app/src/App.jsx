import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { RootLayout } from "./layout";
import { SpeechMode } from "./pages/speech-mode";
import { MedicalActivityReminder } from "./pages/medical-activity-reminder";
import { MedicalReminder } from "./pages/medical-activity-reminder/medical-reminder";
import { ActivityReminder } from "./pages/activity-reminders/activity-reminder";
import { MyMedicineToday } from "./pages/medical-activity-reminder/my-medicine-today";
import { MyMedicineWeek } from "./pages/medical-activity-reminder/my-medicine-weekly";
import { MyMedicineMonth } from "./pages/medical-activity-reminder/my-medicine-monthly";
import { DoctorAppointmentToday } from "./pages/medical-activity-reminder/doctor-appointment-today";
import { DoctorAppointmentWeek } from "./pages/medical-activity-reminder/doctor-appointment-weekly";
import { DoctorAppointmentMonthly } from "./pages/medical-activity-reminder/doctor-appointment-monthly";
import { HealthToday } from "./pages/activity-reminders/health-today";
import { HealthWeekly } from "./pages/activity-reminders/health-weekly";
import { HealthMonthly } from "./pages/activity-reminders/health-monthly";
import { SocialActivityToday } from "./pages/activity-reminders/social-activity-today";
import { SocialActivityWeekly } from "./pages/activity-reminders/social-activity-weekly";
import { SocialActivityMonthly } from "./pages/activity-reminders/social-activity-monthly";


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
          element: <DoctorAppointmentMonthly />,
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
          path: "/social-activity-monthlys",
          element: <SocialActivityMonthly />,
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
