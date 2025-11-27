import React, { useState } from 'react';
import { Heart, MapPin, ChevronRight } from 'lucide-react';

export const HealthToday = () => {
  const [activeFilter, setActiveFilter] = useState('Today');
  
  const activities = [
    {
      id: 1,
      title: 'Ballroom dance',
      location: 'Community Hall',
      time: '10:00',
      icon: '💃'
    },
    {
      id: 2,
      title: 'Yoga',
      location: 'Wellness Center',
      time: '08:30',
      icon: '🧘'
    },
    {
      id: 3,
      title: 'Gym',
      location: 'Fitness Club',
      time: '16:00',
      icon: '💪'
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="w-10 h-10 rounded-xl border-2 border-gray-300 flex items-center justify-center bg-white">
            <ChevronRight className="w-5 h-5 text-gray-600 rotate-180" />
          </button>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">20:20</div>
            <div className="text-sm font-semibold text-gray-700 mt-1">Health</div>
          </div>
          
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center">
              <div className="w-6 h-6 bg-teal-700 rounded-lg flex items-center justify-center">
                <div className="w-4 h-3 bg-teal-500 rounded-sm"></div>
              </div>
            </button>
            <button className="w-10 h-10 rounded-xl border-2 border-gray-300 flex items-center justify-center bg-white">
              <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 justify-center mb-4">
          {['Today', 'Week', 'Month'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Date */}
        <div className="text-center text-xs text-gray-500 mb-6">
          Tuesday, October 23
        </div>

        {/* Activities List */}
        <div className="space-y-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border-2 border-blue-200">
                  <Heart className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{activity.title}</div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {activity.location}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-sm font-semibold text-gray-700">{activity.time}</div>
                <button className="w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors">
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}