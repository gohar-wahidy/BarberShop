// src/components/Footer.jsx
import React from 'react';
import Logo from '../assets/bslogo.png';
import Phone from '../assets/phone.png';

function Footer() {
  return (
    <footer className="flex items-center justify-between p-2 bg-[#c10008] text-white z-50">
      <div className="flex items-center">
        <img src={Logo} alt="Barber Shop Logo" className="h-10 w-10 mr-2 ml-2" />
        <h1 className="text-2xl font-bold mr-2">BARBER SHOP</h1>
      </div>
      <a href='tel:+13192902150' className="hover:opacity-80 transition-opacity">
        <img src={Phone} alt="Phone" className="h-10 w-10 ml-2 mr-2" />
      </a>
    </footer>
  );
}

export default Footer;