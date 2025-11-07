import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DoctorAppointmentWeek = () => {
    const navigate = useNavigate();
  const activeTab = "Week";

  // Data jadwal mingguan
  const schedule = [
    { day: "MON", date: 20, events: [{ title: "Dental Check-up", time: "09:00" }] },
    { day: "TUE", date: 21, events: [{ title: "Eye Examination", time: "11:30" }] },
    { day: "WED", date: 22, events: [{ title: "General Check-up", time: "10:00" }] },
    { day: "THU", date: 23, events: [{ title: "Physiotherapy Session", time: "09:00" }] },
    { day: "FRI", date: 24, events: [] },
    { day: "SAT", date: 25, events: [{ title: "General Check-up", time: "11:30" }] },
    { day: "SUN", date: 26, events: [] },
  ];

  return (
    <div className="min-h-screen bg-[#f9f7f2] flex flex-col items-center py-8 rounded-[2rem] shadow-md max-w-md mx-auto relative">
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
                onClick={()=>{
                    navigate(`/doctor-appointment-${tab.toLowerCase()}`)
                }}
                key={tab}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  activeTab === tab
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

      {/* Week Label */}
      <p className="text-sm text-gray-500 mt-4">Week 43</p>

      {/* Weekly Table */}
      <div className="mt-5 w-full px-4">
        <div className="grid grid-cols-7 bg-[#E8F3F3] rounded-t-xl text-[#0D5C63] font-semibold text-center text-sm">
          {schedule.map((day) => (
            <div key={day.day} className="py-2 border-r border-[#CBEAEA] last:border-none">
              {day.day}
              <div className="text-xs text-gray-500 font-normal">{day.date}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 bg-white rounded-b-xl text-center text-sm shadow">
          {schedule.map((day) => (
            <div
              key={day.date}
              className={`min-h-[110px] p-2 border-r border-[#E0E0E0] last:border-none ${
                day.day === "THU"
                  ? "bg-[#E6F5F5] border border-[#CBEAEA] rounded-lg"
                  : ""
              }`}
            >
              {day.events.length > 0 ? (
                day.events.map((event, i) => (
                  <div
                    key={i}
                    className="bg-[#0D5C63] text-white rounded-lg py-1 px-2 mb-2 text-xs font-medium"
                  >
                    <p>{event.title}</p>
                    <p className="text-[10px] mt-1 opacity-80">{event.time}</p>
                  </div>
                ))
              ) : (
                <div className="text-gray-400 text-xs mt-4">–</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-10 right-6 flex flex-col gap-3">
        <button className="bg-[#0D5C63] p-3 rounded-full shadow-lg text-white">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
