import { useState } from "react";
import { ArrowLeft, Home, Pill, Plus, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const MyMedicineToday =  () => {
  const [activeTab, setActiveTab] = useState("Today");
  const navigate = useNavigate();

  const medicines = [
    { name: "Vitamin D", desc: "1 tablet", time: "09:00" },
    { name: "Multivitamin", desc: "1 tablet", time: "09:00" },
    { name: "Blood Pressure", desc: "1 tablet", time: "14:00" },
  ];

  return (
    // <div className="min-h-screen bg-[#FAF6EB] flex flex-col items-center p-6 rounded-[2rem] shadow-md max-w-md mx-auto">
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

      {/* Date */}
      <p className="text-sm text-gray-500 mt-3">Thursday, October 23</p>

      {/* Medicine List */}
      <div className="w-full mt-6 space-y-3">
        {medicines.map((med, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#E6F5F5] p-2 rounded-full">
                <Pill className="text-[#0D5C63]" size={18} />
              </div>
              <div>
                <p className="font-medium text-[#0D5C63]">{med.name}</p>
                <p className="text-sm text-gray-500">{med.desc}</p>
              </div>
            </div>
            <p className="text-[#0D5C63] font-semibold">{med.time}</p>
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
