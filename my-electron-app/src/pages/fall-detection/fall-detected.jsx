import React, { use, useContext, useState } from 'react';
import { FallDetectionContext } from '../../store/FallDetectionContext';
import { HelpDetectionContext } from '../../store/HelpDetectedContext';

export default function FallDetected() {

    const [countdown, setCountdown] = useState(0);
    const [isOk, setIsOk] = useState(false);
    const { fallDetected, setFallDetected } = useContext(FallDetectionContext);
    const { helpDetected, setHelpDetected } = useContext(HelpDetectionContext);
    const handleImOk = () => {
        setIsOk(true);
        setTimeout(() => {
            setCountdown(0);
            setIsOk(false);
            setFallDetected(false);
        }, 2000);
    };

    const handleHelp = () => {
        setFallDetected(false);
        setHelpDetected(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-orange-100/80 to-amber-100/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full border-2 border-orange-200/50">
                {/* Robot Icon */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="w-20 h-20 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <div className="text-white text-4xl">🤖</div>
                        </div>
                        {/* Antenna */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-orange-400 rounded-full"></div>
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-400 rounded-full"></div>
                    </div>
                </div>

                {/* Alert Text */}
                <h2 className="text-center text-red-500 font-bold text-xl mb-6">
                    Possible Fall Detected
                </h2>

                {/* Countdown Circle */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <svg className="transform -rotate-90 w-24 h-24">
                            <circle
                                cx="48"
                                cy="48"
                                r="44"
                                stroke="#e5e7eb"
                                strokeWidth="8"
                                fill="white"
                                className="drop-shadow-md"
                            />
                            <circle
                                cx="48"
                                cy="48"
                                r="44"
                                stroke="#ef4444"
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray="276.46"
                                strokeDashoffset="0"
                                className="transition-all duration-1000"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl font-bold text-gray-800">{countdown}</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={handleImOk}
                        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        I'm OK
                    </button>
                    <button
                        onClick={handleHelp}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        Help
                    </button>
                </div>

                {/* Status Message */}
                {isOk && (
                    <div className="mt-6 text-center text-teal-600 font-semibold animate-pulse">
                        ✓ Alert cancelled
                    </div>
                )}
            </div>
        </div>
    );
}