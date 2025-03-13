import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Particles from "./components/background";
import CornerButtonsPage from "./components/CornerButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuyWithMe",
  description: "Buy together, save together",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrapper to contain everything */}
        <div className=" w-full h-screen">
          {/* Particles Component - Background */}
          <div className="absolute inset-0 z-5">
            <Particles
              particleColors={["#84CC16", "#84CC16"]}
              particleCount={200}
              particleSpread={10}
              speed={0.3}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          <CornerButtonsPage />
          {/* Main Content */}
          <main className="relative z-20 flex flex-col items-center justify-center h-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
