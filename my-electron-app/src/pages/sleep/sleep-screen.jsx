import React from 'react';

export default function SleepScreen() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-orange-100/80 to-amber-100/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full border-2 border-orange-200/50">
                {/* Moon Icon */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <div className="text-white text-4xl">🌙</div>
                        </div>
                        {/* Stars */}
                        <div className="absolute -top-2 -right-2 text-yellow-300 text-xl">✨</div>
                        <div className="absolute -top-3 -left-1 text-yellow-300 text-sm">⭐</div>
                    </div>
                </div>

                {/* Sleep Text */}
                <h2 className="text-center text-indigo-700 font-bold text-3xl">
                    Sleep
                </h2>
            </div>
        </div>
    );
}