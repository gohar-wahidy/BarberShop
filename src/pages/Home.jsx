import React from 'react';
import BSImage from '../assets/barbershop.jpg';

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center flex-grow p-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-red-700 mb-4">Welcome to my Barber Shop</h2>
          <p className="text-left">
            Step into tradition at my <b>Barber Shop</b>, where I blend classic barbering with a <b>Euro-style</b> edge. Located at <a href="https://maps.app.goo.gl/DpRsJqfJo86CytDfA" target="_blank" className="redHover">702 South St, Waterloo, IA</a>, 
            I offer classic haircuts and clean straight razor shaves. Whether it’s a sharp fade or a clean shave, it's always <b>$15 cash flat</b>. No appointments — just walk in, sit down, and get fresh just like the good old days.
          </p>
          <img src={BSImage} alt="Barber Shop" className="w-100 h-auto mt-4 rounded-lg shadow-lg block mx-auto" />
        </div>
    </section>
  );
};

export default Home;