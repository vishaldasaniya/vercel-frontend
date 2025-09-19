import { useEffect, useState } from "react";

function LuckyDraw() {
  const [message, setMessage] = useState("Loading your prize...");

  const apiurl = import.meta.env.VITE_MONGO_APIURL;
  useEffect(() => {
    fetch(`${apiurl}/api/draw`)
      .then((res) => res.json())
      .then((data) => { 
        setMessage(data.message)
      })
      .catch(() => setMessage("⚠️ Error fetching prize"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
      <h1 className="text-3xl font-bold mb-4">🎁 Lucky Draw</h1>
      <p className="text-xl">{message}</p>
    </div>
  );
}

export default LuckyDraw;
