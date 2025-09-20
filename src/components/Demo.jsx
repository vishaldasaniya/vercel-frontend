import React, { useEffect, useState } from 'react'

export default function Demo({eventStartTime}) {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(()=>{

        const now = new Date();
        const start = new Date(eventStartTime);
        const diff = start-now;

        if(diff<=0)
        {
            setTimeLeft("00:00:00");
        }
        else
        {
            const hours = Math.floor(diff/(1000*60*60));
            const minutes = Math.floor((diff%1000*60*60)/1000*60);
            const seconds = Math.floor((diff%1000*60)/1000);
            setTimeLeft(`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`);
        }


    },[eventStartTime]);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
      <h1 className="text-3xl font-bold mb-4">🎁 Lucky Draw</h1>
      <p className="text-xl">`Event not started yet. CountDOwn - ${timeLeft}`</p>
    </div>
  )
}
