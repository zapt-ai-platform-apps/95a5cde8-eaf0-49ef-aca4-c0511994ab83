import React, { useEffect } from 'react';

export default function VampireScene() {
  useEffect(() => {
    console.log("Vampire Scene mounted.");
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Animated Vampire */}
      <img
        src="/assets/vampire.png"
        alt="Vampire"
        className="absolute top-1/2 transform -translate-y-1/2 animate-walk w-32 h-auto"
      />

      {/* Animated Money Symbols */}
      <img
        src="/assets/money.png"
        alt="Money"
        className="absolute top-1/2 left-1/4 transform -translate-y-1/2 animate-float w-16 h-auto"
      />
      <img
        src="/assets/money.png"
        alt="Money"
        className="absolute top-2/3 left-1/3 transform -translate-y-1/2 animate-float w-16 h-auto"
      />

      {/* Animated Sexy Girl Icons */}
      <img
        src="/assets/sexy-girl.png"
        alt="Sexy Girl"
        className="absolute top-1/3 right-1/4 transform -translate-y-1/2 animate-float w-16 h-auto"
      />
      <img
        src="/assets/sexy-girl.png"
        alt="Sexy Girl"
        className="absolute top-1/4 right-1/3 transform -translate-y-1/2 animate-float w-16 h-auto"
      />

      {/* Scene Title */}
      <div className="absolute top-4 left-4 text-white text-3xl font-bold">
        Vampire Scene
      </div>
    </div>
  );
}