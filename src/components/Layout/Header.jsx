import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div style={{width: '200px'}}>
        <img src="./../Logo.png" alt='CheckMinistry'/>
      </div>
      <div className="flex items-center gap-2">
        <span>Anushka Tripathi</span>
        <img 
          src="/hr.jpg" 
          alt="Profile" 
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;