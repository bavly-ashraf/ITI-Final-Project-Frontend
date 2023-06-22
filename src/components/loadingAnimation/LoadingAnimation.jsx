import React from "react";
import "./LoadingAnimation.css";
export default function LoadingAnimation() {
  return (
    <div
      style={{ backgroundColor: "#fbf8f5" }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div className="lds-ring mb-4">
        <div></div>
        <div></div>
      </div>
      <p className="text-2xl font-bold text-orange-500">Loading...</p>
    </div>
  );
}
