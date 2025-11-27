import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const MedicalReminder =  () => {
    const navigate = useNavigate();
  return (
    // <div className="flex items-center justify-center min-h-screen bg-[#F9F6ED]">
    <div className="h-screen flex items-center justify-center bg-[#F9F6ED] text-white font-poppins">
      <div className="w-[500px] bg-[#F9F6ED] rounded-3xl shadow-lg p-6 border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <ArrowLeft className="text-[#2D4A53] w-6 h-6 cursor-pointer" />
          <div className="text-center flex-1">
            <h2 className="text-lg font-semibold text-[#2D4A53]">Medical Reminder</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#E4F2ED] p-2 rounded-xl shadow-sm">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                alt="Robot"
                className="w-8 h-8 object-contain"
              />
            </div>
            <Home className="text-[#2D4A53] w-6 h-6 cursor-pointer" />
          </div>
        </div>

        {/* Time Display */}
        <div className="text-[#2D4A53] text-2xl font-bold text-center mb-8">20:20</div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 items-center">
          <button onClick={()=>{navigate("/my-medicine-today")}} className="w-3/4 bg-white rounded-2xl shadow-md p-4 text-[#2D4A53] flex flex-col items-center hover:shadow-lg transition">
            <span className="text-2xl mb-1">💊</span>
            <span className="font-semibold">My Medicine</span>
          </button>

          <button onClick={()=>{navigate("/doctor-appointment-schedule-today")}} className="w-3/4 bg-white rounded-2xl shadow-md p-4 text-[#2D4A53] flex flex-col items-center hover:shadow-lg transition">
            <span className="text-2xl mb-1">🩺</span>
            <span className="font-semibold">Doctor Appointment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
