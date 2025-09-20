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
    <div className="flex flex-col items-center mt-10 space-y-6">
  
      <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-500">
        🎁 Lucky Draw
      </h1>

  
      <div className="flex justify-center items-center space-x-4">
     
        <div className="bg-gray-900 text-white font-mono text-4xl md:text-5xl px-6 py-4 rounded-lg shadow-lg">
          {timeLeft.hour}
        </div>

        
        <div className="text-gray-700 font-mono text-4xl md:text-5xl">:</div>


        <div className="bg-gray-900 text-white font-mono text-4xl md:text-5xl px-6 py-4 rounded-lg shadow-lg">
          {timeLeft.minute}
        </div>

        
        <div className="text-gray-700 font-mono text-4xl md:text-5xl">:</div>

       
        <div className="bg-gray-900 text-white font-mono text-4xl md:text-5xl px-6 py-4 rounded-lg shadow-lg">
          {timeLeft.second}
        </div>
      </div>
    </div>
  );
}
