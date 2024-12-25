import React from 'react';
import logo from '../../assets/logo.png'; // Adjust the path based on your project structure
import {CapsuleButton} from '../form/button';

const NavbarPublic: React.FC = () => {
  return (
    <nav className="bg-primary w-full p-4 px-12 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8 w-8" /> {/* Adjust height and width as needed */}
        <h1 className="text-whatsapp-primary text-xl font-bold">WhatsApp</h1>
      </div>
      <CapsuleButton label='Download'/>
    </nav>
  );
};

export default NavbarPublic;
