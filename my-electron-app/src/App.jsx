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
import VisitToday from "./pages/activity-reminders/visit-today";
import VisitWeekly from "./pages/activity-reminders/visit-weekly";
import VisitMonthly from "./pages/activity-reminders/visit-monthly";


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
          path: "/SHOW_MEDICINE_SCHEDULE_SPECIFIC_DAY",
          element: <MyMedicineToday />,
        },
        {
          path: "/SHOW_MEDICINE_SCHEDULE_WEEK",
          element: <MyMedicineWeek />,
        },
        {
          path: "/SHOW_MEDICINE_SCHEDULE_MONTH",
          element: <MyMedicineMonth />,
        },

        // ======================
        // DOCTOR APPOINTMENT
        // ======================
        {
          path: "/SHOW_APPOINTMENT_SCHEDULE_SPECIFIC_DAY",
          element: <DoctorAppointmentToday />,
        },
        {
          path: "SHOW_APPOINTMENT_SCHEDULE_WEEK",
          element: <DoctorAppointmentWeek />,
        },
        {
          path: "/SHOW_APPOINTMENT_SCHEDULE_MONTH",
          element: <DoctorAppointmentMonthly />,
        },

        // ======================
        // HEALTH
        // ======================
        {
          path: "/SHOW_HEALTH_ACTIVITY_SPECIFIC_DAY",
          element: <HealthToday />,
        },
        {
          path: "/SHOW_HEALTH_ACTIVITY_WEEK",
          element: <HealthWeekly />,
        },
        {
          path: "/SHOW_HEALTH_ACTIVITY_MONTH",
          element: <HealthMonthly />,
        },

        // ======================
        // HEALTH
        // ======================
        {
          path: "/SHOW_SOCIAL_ACTIVITY_SPECIFIC_DAY",
          element: <SocialActivityToday />,
        },
        {
          path: "/SHOW_SOCIAL_ACTIVITY_WEEK",
          element: <SocialActivityWeekly />,
        },
        {
          path: "/SHOW_SOCIAL_ACTIVITY_MONTH",
          element: <SocialActivityMonthly />,
        },

        // ======================
        // VISIT
        // ======================

        {
          path: "/SHOW_VISITS_WEEK",
          element: <VisitToday />,
        },
        {
          path: "/SHOW_VISITS_MONTH",
          element: <VisitWeekly />,
        },
        {
          path: "/SHOW_VISITS_SPECIFIC_DAY",
          element: <VisitMonthly />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
