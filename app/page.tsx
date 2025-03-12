import Link from "next/link";
import React from "react";

export default function CornerButtonsPage() {
  return (
    <div className="relative w-screen h-screen">
      {/* Top Left */}
      <div className="absolute top-16 left-16 font-serif text-5xl hover:underline transition-all duration-700 underline-offset-4">
        <Link href="/"> Home </Link>
      </div>

      {/* Top Right */}
      <div className="absolute top-16 right-16 font-serif text-5xl hover:underline transition-all duration-700 underline-offset-4">
        <Link href="/Shop"> Shop </Link>
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-16 left-16 font-serif text-5xl hover:underline transition-all duration-700 underline-offset-4">
        <Link href="/Cart"> Cart </Link>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-16 right-16 font-serif text-5xl hover:underline transition-all duration-700 underline-offset-4">
        <Link href="/About"> About </Link>
      </div>
    </div>
  );
}
