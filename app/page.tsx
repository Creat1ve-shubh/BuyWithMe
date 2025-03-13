import React from "react";
import DecryptedText from "./components/Text";

const Landing = () => {
  return (
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
  );
};

export default Landing;
