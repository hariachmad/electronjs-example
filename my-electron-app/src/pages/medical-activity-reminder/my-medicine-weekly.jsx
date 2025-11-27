import { useState } from "react";
import { ArrowLeft, Home, ChevronUp, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const MyMedicineWeek = () => {
  const [activeTab, setActiveTab] = useState("Week");
  const navigate = useNavigate();

  const weekData = [
    {
      day: "MON",
      date: "20",
      meds: [
        { name: "Vitamin D", time: "09:00" },
        { name: "Blood Pressure", time: "16:00" },
      ],
    },
    {
      day: "TUE",
      date: "21",
      meds: [{ name: "Calcium", time: "09:00" }],
    },
    {
      day: "WED",
      date: "22",
      meds: [{ name: "Blood Pressure", time: "16:00" }],
    },
    {
      day: "THU",
      date: "23",
      meds: [
        { name: "Calcium", time: "09:00" },
        { name: "Omega-3", time: "18:00" },
      ],
    },
    {
      day: "FRI",
      date: "24",
      meds: [
        { name: "Vitamin D", time: "09:00" },
        { name: "Blood Pressure", time: "14:00" },
      ],
    },
    {
      day: "SAT",
      date: "25",
      meds: [{ name: "Omega-3", time: "18:00" }],
    },
    {
      day: "SUN",
      date: "26",
      meds: [
        { name: "Aspirin", time: "09:00" },
        { name: "Multivitamin", time: "18:00" },
      ],
    },
  ];

  return (
    // <div className="min-h-screen bg-[#FAF6EB] flex flex-col items-center p-6 rounded-[2rem] shadow-md max-w-md mx-auto relative">
    <div className="h-screen flex items-center justify-center bg-[#F9F6ED] text-white font-poppins">
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
            className={`px-4 py-1 rounded-full border text-sm font-medium ${activeTab === tab
                ? "bg-[#0D5C63] text-white"
                : "bg-white text-[#0D5C63]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Week Title */}
      <p className="text-sm text-gray-500 mt-3">Week 43</p>

      {/* Week Table */}
      <div className="w-full mt-6 grid grid-cols-7 gap-2 text-center text-sm">
        {weekData.map((day) => (
          <div
            key={day.day}
            className={`bg-white rounded-xl p-2 shadow-sm flex flex-col items-center ${day.day === "THU" ? "bg-[#E6F5F5]" : "bg-white"
              }`}
          >
            <p
              className={`font-semibold ${day.day === "THU" ? "text-[#0D5C63]" : "text-gray-700"
                }`}
            >
              {day.day}
            </p>
            <p
              className={`text-xs ${day.day === "THU" ? "text-[#0D5C63]" : "text-gray-500"
                }`}
            >
              {day.date}
            </p>
            <div className="mt-2 space-y-1">
              {day.meds.map((med, idx) => (
                <div
                  key={idx}
                  className="bg-[#F4FAFA] text-[#0D5C63] rounded-lg px-2 py-1 text-xs"
                >
                  <p>{med.name}</p>
                  <p className="text-gray-500">{med.time}</p>
                </div>
              ))}
            </div>
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
