import { useState } from "react";
import { ArrowLeft, Home, ChevronUp, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const MyMedicineMonth = () => {
  const [activeTab, setActiveTab] = useState("Month");
  const navigate = useNavigate();

  // Simulasi data minggu dan tanggal
  const calendar = [
    { week: 40, days: [30, 1, 2, 3, 4, 5, 6] },
    { week: 41, days: [7, 8, 9, 10, 11, 12, 13] },
    { week: 42, days: [14, 15, 16, 17, 18, 19, 20] },
    { week: 43, days: [21, 22, 23, 24, 25, 26, 27] },
    { week: 44, days: [28, 29, 30, 31, 1, 2, 3] },
  ];

  const selectedDate = 23;

  return (
    <div className="min-h-screen bg-[#FAF6EB] flex flex-col items-center p-6 rounded-[2rem] shadow-md max-w-md mx-auto relative">
      {/* Header */}
      <div className="w-full flex justify-between items-center">
        <button className="p-2 bg-white rounded-full shadow">
          <ArrowLeft className="text-[#0D5C63]" />
        </button>
        <div className="flex flex-col items-center">
          <span className="text-[#0D5C63] font-semibold text-lg">20:20</span>
          <span className="text-[#0D5C63] font-semibold text-base">
            My Medicine
          </span>
        </div>
        <button className="p-2 bg-white rounded-full shadow">
          <Home className="text-[#0D5C63]" />
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

      {/* Tabs */}
      <div className="flex gap-3 mt-6">
        {["Today", "Week", "Month"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
                setActiveTab(tab);
                navigate(`/my-medicine-${tab.toLowerCase()}`);
            }}
            className={`px-4 py-1 rounded-full border text-sm font-medium ${
              activeTab === tab
                ? "bg-[#0D5C63] text-white"
                : "bg-white text-[#0D5C63]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Month Title */}
      <p className="text-sm text-gray-500 mt-3">October 2025</p>

      {/* Calendar */}
      <div className="w-full mt-6">
        {/* Header */}
        <div className="grid grid-cols-8 bg-[#E6F5F5] rounded-t-lg text-[#0D5C63] font-semibold text-center text-sm">
          <div className="py-2 border-r border-[#CBEAEA]">Week</div>
          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
            <div key={day} className="py-2 border-r border-[#CBEAEA] last:border-r-0">
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
            <div className="py-3 bg-[#E6F5F5] font-medium text-[#0D5C63] border-r border-[#CBEAEA]">
              {week.week}
            </div>
            {week.days.map((date, i) => (
              <div
                key={i}
                className={`py-3 border-r border-[#E0E0E0] last:border-r-0 ${
                  date === selectedDate
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
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
}
