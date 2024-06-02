"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Button from "../components/button";

const Popup = dynamic(() => import("../components/popup"), { ssr: false });

export default function Modal() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-slate-900 to-slate-700">
      <h2 className="text-white mb-5">This is Page One.</h2>
      <div className="flex gap-4">
        <Button onClick={handleOpenPopup}>Open Popup</Button>
        {showPopup && <Popup onClose={handleClosePopup} />}
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
}
