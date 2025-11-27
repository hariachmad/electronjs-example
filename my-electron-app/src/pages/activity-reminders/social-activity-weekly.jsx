import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export const SocialActivityWeekly = () => {
  const [activeView, setActiveView] = useState('Week');
  
  const weekDays = [
    { day: 'MON', date: '21', events: [{ time: '14:00', title: 'Analog' }] },
    { day: 'TUE', date: '22', events: [{ time: '10:30', title: 'Ceramics' }] },
    { day: 'WED', date: '23', events: [{ time: '15:00', title: 'Card games' }] },
    { day: 'THU', date: '24', events: [{ time: '14:00', title: 'Board games' }], active: true },
    { day: 'FRI', date: '25', events: [] },
    { day: 'SAT', date: '26', events: [{ time: '09:00', title: 'Yoga' }] },
    { day: 'SUN', date: '27', events: [{ time: '11:00', title: 'Painting' }] }
  ];

  return (
    // <div className="min-h-screen bg-amber-50 p-4 flex items-center justify-center">
    <div className="h-screen flex items-center justify-center bg-[#F9F6ED] text-white font-poppins">
      <div className="w-full max-w-2xl bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="w-10 h-10 rounded-xl border-2 border-gray-300 flex items-center justify-center bg-white">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
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
              <Calendar className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 justify-center mb-6">
          {['Today', 'Week', 'Month'].map((view) => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeView === view
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              {view}
            </button>
          ))}
        </div>

        {/* Week Info */}
        <div className="text-center text-xs text-gray-500 mb-4">
          Week 43
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`rounded-2xl p-3 min-h-[180px] transition-all ${
                day.active 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-white text-gray-700'
              }`}
            >
              {/* Day Header */}
              <div className="text-center mb-3">
                <div className={`text-xs font-medium mb-1 ${
                  day.active ? 'text-teal-100' : 'text-gray-500'
                }`}>
                  {day.day}
                </div>
                <div className={`text-2xl font-bold ${
                  day.active ? 'text-white' : 'text-gray-800'
                }`}>
                  {day.date}
                </div>
              </div>

              {/* Events */}
              <div className="space-y-2">
                {day.events.map((event, idx) => (
                  <div key={idx} className="text-xs">
                    <div className={`font-medium mb-0.5 ${
                      day.active ? 'text-teal-100' : 'text-gray-500'
                    }`}>
                      {event.time}
                    </div>
                    <div className={`font-semibold ${
                      day.active ? 'text-white' : 'text-gray-700'
                    }`}>
                      {event.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors shadow-md">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors shadow-md">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}