import { Volume2, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const MedicalActivityReminder = () => {
    const navigate = useNavigate();
  return (
    // <div className="flex items-center justify-center min-h-screen bg-[#F9F6ED]">
    <div className="h-screen flex items-center justify-center bg-[#F9F6ED] text-white font-poppins">
      <div className="w-[500px] bg-[#F9F6ED] rounded-3xl shadow-lg p-6 text-center border border-gray-200">
        {/* Header */}
        <div className="text-[#2D4A53] mb-4">
          <h1 className="text-4xl font-bold">20:20</h1>
          <p className="text-sm text-gray-600">Thursday, October 23 2025</p>
        </div>

        {/* Robot Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#E4F2ED] p-3 rounded-2xl shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
              alt="Robot"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>

        {/* Reminder Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button onClick={()=>{navigate("/medical-reminder")}} className="bg-white rounded-2xl shadow p-4 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#2D4A53] text-xl">💊</span>
              <h2 className="font-semibold text-[#2D4A53]">Medical Reminder</h2>
            </div>
            <p className="text-sm text-gray-600">Omega-3 at 18:00 (1 capsule)</p>
          </button>

          <div className="bg-white rounded-2xl shadow p-4 text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#2D4A53] text-xl">📈</span>
              <h2 className="font-semibold text-[#2D4A53]">Activity Reminder</h2>
            </div>
            <p className="text-sm text-gray-600">Evening Reading at 19:30</p>
          </div>
        </div>

        {/* Volume & Brightness Controls */}
        <div className="flex justify-around items-center text-[#2D4A53]">
          <div className="flex items-center gap-2">
            <Volume2 />
            <input type="range" min="0" max="100" className="w-24 accent-[#2D4A53]" />
          </div>
          <div className="flex items-center gap-2">
            <Sun />
            <input type="range" min="0" max="100" className="w-24 accent-[#2D4A53]" />
          </div>
        </div>
      </div>
    </div>
  );
}
