import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DoctorAppointmentToday = () => {
  const navigate = useNavigate();
  const appointments = [
    {
      title: "Dental Check-up",
      location: "City Dental Clinic",
      time: "09:00",
    },
    {
      title: "General Check-up",
      location: "City Health Center",
      time: "10:30",
    },
    {
      title: "Eye Examination",
      location: "VisionCare Center",
      time: "11:30",
    },
  ];

  const activeTab = "Today";

  return (
    <div className="min-h-screen bg-[#f9f7f2] flex flex-col items-center py-8 rounded-[2rem] shadow-md max-w-md mx-auto relative">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-2">
        <button className="p-2 bg-white rounded-full shadow">
          <ChevronLeft className="text-gray-600" />
        </button>

        <div className="flex flex-col items-center">
          <span className="text-[#0D5C63] font-semibold text-lg">20:20</span>
          <span className="text-[#0D5C63] font-semibold text-base">
            Doctor Appointment
          </span>

          {/* Tabs */}
          <div className="flex mt-2 bg-gray-100 rounded-full p-1">
            {["Today", "Week", "Month"].map((tab) => (
              <button
                key={tab}
                onClick={()=>navigate(`/my-medicine-${tab.toLowerCase()}`)}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  activeTab === tab
                    ? "bg-[#4db6ac] text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <button className="p-2 bg-white rounded-full shadow">
          <ChevronRight className="text-gray-600" />
        </button>
      </div>

      {/* Robot */}
      <div className="absolute top-4 right-8">
        <img
          src="/robot.png"
          alt="Robot"
          className="w-10 h-10 bg-white rounded-full shadow"
        />
      </div>

      {/* Date */}
      <p className="text-center text-gray-500 mt-3">Thursday, October 23</p>

      {/* Appointment Cards */}
      <div className="mt-6 flex flex-col gap-4 w-full px-4">
        {appointments.map((appt, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center hover:shadow-md transition"
          >
            <div>
              <h3 className="font-semibold text-gray-800">{appt.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                {appt.location}
              </div>
            </div>
            <div className="text-right">
              <Clock className="w-4 h-4 text-gray-400 inline-block mr-1" />
              <span className="font-semibold text-gray-700">{appt.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-10 right-6 flex flex-col gap-3">
        <button className="bg-[#4db6ac] p-3 rounded-full shadow-lg text-white">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
