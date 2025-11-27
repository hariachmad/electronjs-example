import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react';

export default function VisitMonthly() {
  const [activeView, setActiveView] = useState('Month');
  
  const weeks = [
    { week: 40, days: [null, null, null, 1, 2, 3, 4] },
    { week: 41, days: [5, 6, 7, 8, 9, 10, 11] },
    { week: 42, days: [12, 13, 14, 15, 16, 17, 18] },
    { week: 43, days: [19, 20, 21, 22, 23, 24, 25] }
  ];

  const dayHeaders = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="min-h-screen bg-amber-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl shadow-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="w-10 h-10 rounded-xl border-2 border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">20:20</div>
            <div className="text-sm font-semibold text-gray-700 mt-1">Visit</div>
          </div>
          
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center hover:bg-teal-700 transition-colors">
              <div className="w-6 h-6 bg-teal-700 rounded-lg flex items-center justify-center">
                <div className="w-4 h-3 bg-teal-500 rounded-sm"></div>
              </div>
            </button>
            <button className="w-10 h-10 rounded-xl border-2 border-gray-300 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors">
              <Lock className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 justify-center mb-6">
          {['Today', 'Week', 'Month'].map((view) => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeView === view
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
              }`}
            >
              {view}
            </button>
          ))}
        </div>

        {/* Month Title */}
        <div className="text-center text-sm font-medium text-gray-600 mb-4">
          October 2025
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          {/* Header Row */}
          <div className="grid grid-cols-8 gap-2 mb-2">
            {/* Week Column Header */}
            <div className="text-center">
              <div className="text-xs font-semibold text-white bg-teal-500 rounded-lg py-2">
                Week
              </div>
            </div>
            
            {/* Day Headers */}
            {dayHeaders.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-xs font-semibold text-gray-600 py-2">
                  {day}
                </div>
              </div>
            ))}
          </div>

          {/* Calendar Rows */}
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-8 gap-2 mb-2">
              {/* Week Number */}
              <div className="flex items-center justify-center">
                <div className="w-full bg-teal-100 rounded-lg py-3 text-center text-sm font-semibold text-teal-700">
                  {week.week}
                </div>
              </div>
              
              {/* Days */}
              {week.days.map((day, dayIndex) => (
                <div key={dayIndex} className="flex items-center justify-center">
                  {day ? (
                    <button
                      className={`w-full rounded-lg py-3 text-center text-sm font-medium transition-all ${
                        day === 23
                          ? 'bg-teal-600 text-white shadow-md hover:bg-teal-700'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {day}
                    </button>
                  ) : (
                    <div className="w-full py-3"></div>
                  )}
                </div>
              ))}
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