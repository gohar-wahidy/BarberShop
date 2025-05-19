import React from 'react';

function Gallery() {
  return (
    <section id="gallery" className="min-h-screen flex items-center justify-center flex-grow p-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#FFD100] mb-4">Gallery</h2>
          <div className="grid grid-cols-2 gap-4">
            <img src="/src/assets/hair1.jpg" alt="Hair Style 1" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="/src/assets/hair2.jpg" alt="Hair Style 2" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="/src/assets/hair3.jpg" alt="Hair Style 3" className="w-full h-auto rounded-lg shadow-lg" />
            <img src="/src/assets/hair4.jpg" alt="Hair Style 4" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
    </section>
  );
}

export default Gallery;