import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center p-2 sm:p-4 bg-white shadow">
      <div className="w-[150px] sm:w-[200px]">
        <img src="./../Logo.png" alt='CheckMinistry' className="w-full"/>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <span className="text-sm sm:text-base">Anushka Tripathi</span>
        <img 
          src="/hr.jpg" 
          alt="Profile" 
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;