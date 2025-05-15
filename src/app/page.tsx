"use client";

import { BeamsBackground } from "@/components/ui/beams-background";
import { Navbar } from "@/components/ui/mini-navbar";
import { useEffect, useState } from "react";

export default function Page() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [email, setEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-06-01T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = () => {
    if (!email) return;

    // Get existing emails from local storage or initialize empty array
    const existingEmails = JSON.parse(localStorage.getItem("waitlist") || "[]");

    // Add new email if it doesn't exist
    if (!existingEmails.includes(email)) {
      existingEmails.push(email);
      localStorage.setItem("waitlist", JSON.stringify(existingEmails));
    }

    setShowThankYou(true);
    setEmail("");

    // Hide thank you message after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  return (
    <main className="relative min-h-svh w-screen overflow-hidden">
      <Navbar />
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-3xl w-full px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-6 [text-shadow:_0_0_30px_rgba(255,255,255,0.2)]">
          Tell your computer what to do—and it gets it done
        </h1>
        <p className="text-sm md:text-xl text-gray-300 mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          novaa is your AI teammate that connects to your apps and files to
          perform actions on your behalf. It finds what you need and gets the
          task done instantly.
        </p>
        <div className="flex justify-center gap-8 mb-12">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-gray-400 capitalize">{unit}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-full max-w-md group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 to-red-500/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 group-hover:opacity-75 opacity-50 pointer-events-none"></div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your email"
              className="relative w-full px-6 py-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            />
            <button
              onClick={handleSubmit}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-full hover:from-yellow-600 hover:to-red-600 transition-all duration-200 text-sm font-semibold shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]"
            >
              Join Waitlist
            </button>
          </div>
          {showThankYou ? (
            <p className="text-sm text-green-400 animate-fade-in drop-shadow-[0_0_10px_rgba(74,222,128,0.2)]">
              Thank you for joining the waitlist! We&apos;ll keep you updated.
            </p>
          ) : (
            <p className="text-sm text-gray-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              Join the waitlist to get early access
            </p>
          )}
        </div>
      </div>
      <BeamsBackground intensity="strong" />
    </main>
  );
}
