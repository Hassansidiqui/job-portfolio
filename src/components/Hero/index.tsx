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
        A curated collection of creative, development, and design projects from 2017 to 2025.
      </p>
      <Link
        href="/projects"
        className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-semibold transition rounded-lg shadow-md"
      >
        View Projects
      </Link>
    </div>

    <div className={`relative w-full h-[400px] bg-gray-800 rounded-xl shadow-xl overflow-hidden flex items-center justify-center ${styles.fadeInDelay}`}>
      {/* Decorative overlay */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-orange-600 opacity-20 rounded-l-xl"></div>

      {/* Info Text */}
      <div className="absolute bottom-6 left-6 z-10">
        <p className="text-sm text-gray-300">2017–2025</p>
        <h2 className="text-2xl font-bold text-white">Season 9</h2>
      </div>

      <div className="absolute bottom-6 right-6 z-10 text-right text-gray-300 text-xs">
        info@email.com <br />
        www.domain.com
      </div>
    </div>
    
  </div>
</section>

  );
};

export default Hero;
