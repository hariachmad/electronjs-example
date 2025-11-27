import React from 'react';
import { Users, Heart, FileText, MapPin } from 'lucide-react';

export const ActivityReminder = () => {
  const activities = [
    { icon: Users, label: 'Social', color: 'text-blue-500' },
    { icon: Heart, label: 'Health', color: 'text-teal-500' },
    { icon: FileText, label: 'Invoice', color: 'text-blue-500' },
    { icon: MapPin, label: 'Visit', color: 'text-teal-500' }
  ];

  return (
    // <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6 flex items-center justify-center">
    <div className="h-screen flex items-center justify-center bg-[#F9F6ED] text-white font-poppins">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center bg-white">
            <span className="text-gray-600 text-xl">←</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">20:20</span>
            <h1 className="text-gray-800 font-semibold text-lg">Activity Reminder</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-lg bg-teal-500 flex items-center justify-center">
              <span className="text-white text-xl">🤖</span>
            </button>
            <button className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center bg-white">
              <span className="text-gray-600 text-lg">📁</span>
            </button>
          </div>
        </div>

        {/* Activity Grid */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border-2 border-dashed border-gray-300">
          <div className="grid grid-cols-2 gap-4">
            {activities.map((activity, index) => (
              <button
                key={index}
                className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <activity.icon className={`w-8 h-8 ${activity.color}`} strokeWidth={2} />
                <span className="text-gray-700 font-medium">{activity.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}