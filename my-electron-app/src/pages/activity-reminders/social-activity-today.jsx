import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

export const SocialActivityToday =  () => {
  const [activeFilter, setActiveFilter] = useState('Today');
  
  const events = [
    {
      id: 1,
      title: 'Bingo',
      location: 'Community Center',
      time: '14:00',
      icon: '🎲'
    },
    {
      id: 2,
      title: 'Board games',
      location: 'Recreation Hall',
      time: '10:30',
      icon: '🎲'
    },
    {
      id: 3,
      title: 'Card games',
      location: 'Community Center',
      time: '15:00',
      icon: '🎲'
    }
  ];

  return (
    // <div className="min-h-screen bg-amber-50 p-4 flex items-center justify-center">
    <div className="h-screen flex items-center justify-center bg-[#F9F6ED] text-white font-poppins">
      <div className="w-full max-w-md bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="w-10 h-10 rounded-xl border-2 border-gray-300 flex items-center justify-center bg-white">
            <Calendar className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">20:20</div>
            <div className="text-sm font-semibold text-gray-700 mt-1">Social</div>
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
        <div className="flex gap-2 mb-4">
          {['Today', 'Week', 'Month'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
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
        <div className="text-xs text-gray-500 mb-4 px-1">
          *Tentative, October 23
        </div>

        {/* Events List */}
        <div className="space-y-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                  {event.icon}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{event.title}</div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-sm font-semibold text-gray-700">{event.time}</div>
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