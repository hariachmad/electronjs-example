import React from 'react';

export default function OkDetected() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-orange-100/80 to-amber-100/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-md w-full border-2 border-orange-200/50">
        {/* Robot Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Left Antenna */}
            <div className="absolute -left-8 top-2 w-6 h-6 bg-red-400 rounded-full shadow-md"></div>
            <div className="absolute -left-6 top-4 w-2 h-8 bg-red-400 rounded-full"></div>
            
            {/* Robot Head */}
            <div className="w-24 h-20 bg-teal-600 rounded-t-3xl rounded-b-2xl flex items-center justify-center shadow-lg relative">
              {/* Eyes */}
              <div className="flex gap-4">
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
              </div>
              
              {/* Mouth */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-800 rounded-full"></div>
            </div>
            
            {/* Right Antenna */}
            <div className="absolute -right-8 top-2 w-6 h-6 bg-red-400 rounded-full shadow-md"></div>
            <div className="absolute -right-6 top-4 w-2 h-8 bg-red-400 rounded-full"></div>
          </div>
        </div>

        {/* Message */}
        <div className="text-center">
          <h2 className="text-teal-600 font-bold text-2xl mb-2">
            Glad to know you're safe.
          </h2>
          <p className="text-gray-500 text-sm">
            Take a moment to rest.
          </p>
        </div>
      </div>
    </div>
  );
}