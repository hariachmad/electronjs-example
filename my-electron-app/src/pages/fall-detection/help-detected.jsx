import React from 'react';

export default function HelpDetected() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-orange-100 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-rose-100/80 to-orange-100/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-md w-full border-2 border-orange-200/50 relative">
        {/* Ripple Effect Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 bg-orange-200/30 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
          <div className="absolute w-64 h-64 bg-orange-200/20 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
          <div className="absolute w-80 h-80 bg-orange-200/10 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Robot Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* Left Antenna */}
              <div className="absolute -left-8 top-2 w-6 h-6 bg-red-400 rounded-full shadow-md"></div>
              <div className="absolute -left-6 top-4 w-2 h-8 bg-red-400 rounded-full"></div>
              
              {/* Robot Head */}
              <div className="w-24 h-20 bg-teal-600 rounded-t-3xl rounded-b-2xl flex items-center justify-center shadow-xl relative">
                {/* Eyes */}
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                </div>
                
                {/* Mouth - worried expression */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                  <svg width="32" height="8" viewBox="0 0 32 8" fill="none">
                    <path d="M4 4 Q16 0 28 4" stroke="#1f2937" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
              
              {/* Right Antenna */}
              <div className="absolute -right-8 top-2 w-6 h-6 bg-red-400 rounded-full shadow-md"></div>
              <div className="absolute -right-6 top-4 w-2 h-8 bg-red-400 rounded-full"></div>
            </div>
          </div>

          {/* Message */}
          <div className="text-center">
            <h2 className="text-red-500 font-bold text-2xl mb-2">
              Help is on the way
            </h2>
            <p className="text-gray-500 text-sm">
              Stay calm, help is coming
            </p>
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}