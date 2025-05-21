import React from 'react';
import Logo from '../assets/bslogo.png';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-center p-2 bg-black text-white z-50">
      <div className="flex items-center">
        <img src={Logo} alt="Barber Shop Logo" className="h-10 w-10 mr-2" />
        <h1 className="text-2xl font-bold">BARBER SHOP</h1>
      </div>
    </header>
  );
}

export default Header;