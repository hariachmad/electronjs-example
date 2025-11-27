import React, { useState } from 'react';
import { Users, MapPin, ChevronRight, ChevronLeft, Lock } from 'lucide-react';

export default function VisitToday() {
    const [activeFilter, setActiveFilter] = useState('Today');

    const visits = [
        {
            id: 1,
            title: 'My Son',
            location: 'Home',
            time: '17:00'
        },
        {
            id: 2,
            title: 'My Sister',
            location: 'Café Lilla',
            time: '15:30'
        },
        {
            id: 3,
            title: 'My Friends',
            location: 'Park Central',
            time: '19:00'
        }
    ];

    return (
        // <div className="min-h-screen bg-amber-50 p-4 flex items-center justify-center">
        <div className="h-screen flex items-center justify-center bg-[#F9F6ED] text-white font-poppins">
            <div className="w-full max-w-md bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl shadow-lg p-6">
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
                <div className="flex gap-2 justify-center mb-4">
                    {['Today', 'Week', 'Month'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter
                                    ? 'bg-teal-600 text-white shadow-md'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Date */}
                <div className="text-center text-xs text-gray-500 mb-6">
                    Thursday, October 23
                </div>

                {/* Visits List */}
                <div className="space-y-3">
                    {visits.map((visit) => (
                        <div
                            key={visit.id}
                            className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center border-2 border-blue-300">
                                    <Users className="w-5 h-5 text-blue-500" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800 mb-0.5">{visit.title}</div>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <MapPin className="w-3 h-3" />
                                        {visit.location}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="text-base font-semibold text-teal-700">{visit.time}</div>
                                <button className="w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors shadow-md">
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