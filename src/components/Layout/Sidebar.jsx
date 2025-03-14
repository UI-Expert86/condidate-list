// ... existing imports ...
import React from 'react';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="w-10 sm:w-60 bg-[#1f2a37] h-screen h-[100%]">
      <NavLink 
        to="#" 
        className='bg-[#1f2a37] text-white flex items-center gap-2 p-3 sm:p-4 text-sm sm:text-base'
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill='#fff' d="M19,5V7H15V5H19M9,5V11H5V5H9M19,13V19H15V13H19M9,17V19H5V17H9M21,3H13V9H21V3M11,3H3V13H11V3M21,11H13V21H21V11M11,15H3V21H11V15Z"/>
        </svg> 
        <span className='hidden sm:inline'>Dashboard</span>
      </NavLink>
      <NavLink 
        to="/" 
        className="flex items-center gap-2 p-3 sm:p-4 bg-[#D0E4FE] text-[#1863dc] font-semibold text-sm sm:text-base"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#1863dc]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z"/>
        </svg> 
       <span className='hidden sm:inline'>Condidates</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;