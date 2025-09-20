import React, { useEffect, useState } from "react";

export default function Demo({ eventStartTime }) {
  const [timeLeft, setTimeLeft] = useState({
    hour: "00",
    minute: "00",
    second: "00",
  });

  useEffect(() => {
    const CountDown = () => {
      const now = new Date();
      const start = new Date(eventStartTime);
      const diff = start - now;

      if (diff <= 0) {
        setTimeLeft({
          hour: "00",
          minute: "00",
          second: "00",
        });
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({
          hour: `${String(hours).padStart(2, "0")}`,
          minute: `${String(minutes).padStart(2, "0")}`,
          second: `${String(seconds).padStart(2, "0")}`,
        });
      }
    };
    CountDown();
    const interval = setInterval(CountDown, 1000);
    return () => clearInterval(interval);
  }, [eventStartTime]);
  return (
    <div className="flex flex-col items-center justify-center space-y-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen">
  
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white bg-blue-600 px-4 py-2 rounded-lg shadow-lg">
        🎁 Lucky Draw
      </h1>

  
      <div className="flex justify-center items-center space-x-4">
     
        <div className="bg-black text-white font-mono text-4xl md:text-5xl px-6 py-4 rounded-lg shadow-lg">
          {timeLeft.hour}
        </div>

        
        <div className="text-gray-200 font-mono text-4xl md:text-5xl">:</div>


        <div className="bg-black text-white font-mono text-4xl md:text-5xl px-6 py-4 rounded-lg shadow-lg">
          {timeLeft.minute}
        </div>

        
        <div className="text-gray-200 font-mono text-4xl md:text-5xl">:</div>

       
        <div className="bg-black text-white font-mono text-4xl md:text-5xl px-6 py-4 rounded-lg shadow-lg">
          {timeLeft.second}
        </div>
      </div>
    </div>
  );
}
