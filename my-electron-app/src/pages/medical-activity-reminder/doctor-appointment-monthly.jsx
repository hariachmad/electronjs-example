import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DoctorAppointmentMonthly = () => {
  const navigate = useNavigate();
  const activeTab = "Month";
  const selectedDate = 23;

  // Simulasi data bulan Oktober 2025
  const calendar = [
    { week: 40, days: [29, 30, 1, 2, 3, 4, 5] },
    { week: 41, days: [6, 7, 8, 9, 10, 11, 12] },
    { week: 42, days: [13, 14, 15, 16, 17, 18, 19] },
    { week: 43, days: [20, 21, 22, 23, 24, 25, 26] },
    { week: 44, days: [27, 28, 29, 30, 31, 1, 2] },
  ];

  return (
    // <div className="min-h-screen bg-[#f9f7f2] flex flex-col items-center py-8 rounded-[2rem] shadow-md max-w-md mx-auto relative">
    <div className="h-screen flex items-center justify-center bg-[#F9F6ED] text-white font-poppins">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-3">
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
                onClick={() => navigate(`/doctor-appointment/${tab}`)}
                key={tab}
                className={`px-3 py-1 rounded-full text-sm font-medium ${activeTab === tab
                    ? "bg-[#0D5C63] text-white"
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

      {/* Month Label */}
      <p className="text-sm text-gray-500 mt-4">October 2025</p>

      {/* Calendar */}
      <div className="w-full mt-5 px-4">
        {/* Header */}
        <div className="grid grid-cols-8 bg-[#E8F3F3] rounded-t-xl text-[#0D5C63] font-semibold text-center text-sm">
          <div className="py-2 border-r border-[#CBEAEA]">Week</div>
          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
            <div
              key={day}
              className="py-2 border-r border-[#CBEAEA] last:border-none"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Body */}
        {calendar.map((week) => (
          <div
            key={week.week}
            className="grid grid-cols-8 text-center border-b border-[#E0E0E0] text-sm"
          >
            {/* Week Number */}
            <div className="py-3 bg-[#E6F5F5] font-medium text-[#0D5C63] border-r border-[#CBEAEA]">
              {week.week}
            </div>

            {/* Dates */}
            {week.days.map((date, i) => (
              <div
                key={i}
                className={`py-3 border-r border-[#E0E0E0] last:border-none ${date === selectedDate
                    ? "bg-[#0D5C63] text-white rounded-lg font-semibold"
                    : "bg-white text-gray-700"
                  }`}
              >
                {date}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-10 right-6 flex flex-col gap-3">
        <button className="bg-[#0D5C63] p-3 rounded-full shadow-lg text-white">
          <ChevronUp size={20} />
        </button>
        <button className="bg-[#0D5C63] p-3 rounded-full shadow-lg text-white">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
