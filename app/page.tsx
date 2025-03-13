import Link from "next/link";
import React from "react";
import DecryptedText from "./components/Text";

export default function CornerButtonsPage() {
  return (
    <div className="relative w-screen h-screen">
      <div className="flex items-center justify-center font-thin italic h-full text-7xl font-serif">
        <DecryptedText
          text="Buy Together, Save Together"
          speed={80}
          maxIterations={30}
          sequential={true}
          revealDirection="start"
          useOriginalCharsOnly={false}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
          className=""
          parentClassName=""
          encryptedClassName=""
          animateOn="view"
        />
      </div>
      {/* Top Left */}
      <div className="absolute top-16 left-16 font-serif font-thin text-5xl hover:underline transition-all duration-700 underline-offset-4">
        <Link href="/Home">Home</Link>
      </div>

      {/* Top Right */}
      <div className="absolute top-16 right-16 font-serif font-thin text-5xl hover:underline transition-all duration-700 underline-offset-4">
        <Link href="/Shop"> Shop </Link>
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-16 left-16 font-serif font-thin text-5xl hover:underline transition-all duration-700 underline-offset-4">
        <Link href="/Cart"> Cart </Link>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-16 right-16 font-serif font-thin text-5xl hover:underline transition-all duration-700 underline-offset-4">
        <Link href="/About"> About </Link>
      </div>
    </div>
  );
}
