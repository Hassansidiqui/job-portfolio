'use client';
import styles from "./Hero.module.css"; // correct path check karo

import Link from "next/link";

const Hero = () => {
  return (
   <section className={`relative z-10 flex items-center justify-center min-h-screen px-4 ${styles['animated-bg']}`}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
    
    <div className={`text-left space-y-6 ${styles['fade-in']}`}>
      <p className="text-gray-100 uppercase tracking-widest">Portfolio</p>
      <h1 className="text-5xl font-extrabold text-white leading-tight">
        Selective Works of <span className="text-orange-300">Hassan Siddiqui</span>
      </h1>
      <p className="text-gray-200 max-w-md">
        A curated collection of creative, development, and design projects from 2024 to 2025.
      </p>
      <Link
        href="/"
        className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-semibold transition rounded-lg shadow-md"
      >
        View Projects
      </Link>
    </div>

    <div
  className={`relative w-full h-[400px] rounded-xl shadow-xl overflow-hidden flex items-center justify-center ${styles.fadeInDelay}`}
  style={{
    backgroundImage: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')", // apni image ka path yahan do
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay (optional dark layer) */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Info Text */}
  <div className="absolute bottom-6 left-6 z-10">
    <p className="text-sm text-gray-300">2024–2025</p>
    <h2 className="text-2xl font-bold text-white">MHS</h2>
  </div>

  <div className="absolute bottom-6 right-6 z-10 text-right text-gray-300 text-xs">
    hassansiddiquis486@email.com <br />
    www.domain.com
  </div>
</div>

    
  </div>
</section>

  );
};

export default Hero;
