// src/pages/Services.jsx
import React from 'react';

function Services() {
  return (
    <section id="services" className="min-h-screen flex items-center justify-center flex-grow p-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#005eb8] mb-4">My Services – Always $15</h2>
        <p className='text-left mb-3'>From classic to modern, I got you covered. Every haircut is done with precision detail. No matter the style, I can make it happen.</p>
        <div className="flex flex-col">
          <div className="flex mb-2 items-center">
            <div className="flex-1 text-left pr-4">Buzz Cut</div>
            <div className="border-l-2 border-[#005eb8] h-6 mx-2"></div>
            <div className="flex-1 text-left">One guard length all over. Quick and clean.</div>
          </div>
          <div className="flex mb-2 items-center">
            <div className="flex-1 text-left pr-4">Skin Fade / Bald Fade</div>
            <div className="border-l-2 border-[#005eb8] h-6 mx-2"></div>
            <div className="flex-1 text-left">Tight fade with a clean, skin-level finish.</div>
          </div>
          <div className="flex mb-2 items-center">
            <div className="flex-1 text-left pr-4">Taper Fade</div>
            <div className="border-l-2 border-[#005eb8] h-6 mx-2"></div>
            <div className="flex-1 text-left">Subtle blend around the neckline and sideburns.</div>
          </div>
          <div className="flex mb-2 items-center">
            <div className="flex-1 text-left pr-4">Line-Up / Shape-Up</div>
            <div className="border-l-2 border-[#005eb8] h-6 mx-2"></div>
            <div className="flex-1 text-left">Sharp edges and straight hairlines.</div>
          </div>
          <div className="flex mb-2 items-center">
            <div className="flex-1 text-left pr-4">Beard Trim</div>
            <div className="border-l-2 border-[#005eb8] h-6 mx-2"></div>
            <div className="flex-1 text-left">Even trim and shape-up. (Ask to include with a cut or shave.)</div>
          </div>
          <div className="flex mb-2 items-center">
            <div className="flex-1 text-left pr-4">Razor Shave</div>
            <div className="border-l-2 border-[#005eb8] h-6 mx-2"></div>
            <div className="flex-1 text-left">Hot towel and straight razor treatment.</div>
          </div>
          <div className="flex mb-2 items-center">
            <div className="flex-1 text-left pr-4">Neck Clean-Up</div>
            <div className="border-l-2 border-[#005eb8] h-6 mx-2"></div>
            <div className="flex-1 text-left">Quick touch-up between full cuts.</div>
          </div>
          <div className="flex mb-2 items-center">
            <div className="flex-1 text-left pr-4">Kids Cut</div>
            <div className="border-l-2 border-[#005eb8] h-6 mx-2"></div>
            <div className="flex-1 text-left">Simple and clean styles for younger clients.</div>
          </div>
          <div className="flex mb-2 items-center">
            <div className="flex-1 text-left pr-4">Custom Cuts</div>
            <div className="border-l-2 border-[#005eb8] h-6 mx-2"></div>
            <div className="flex-1 text-left">Got a style in mind? Show us a pic — I can do it.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;