import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CandidateDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const candidate = useSelector(state => 
    state.candidates.candidates.find(c => c.id === parseInt(id))
  );

  if (!candidate) {
    return <div className="p-4 sm:p-6">Candidate not found</div>;
  }

  return (
    <div className="p-4 sm:p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <img 
            src={candidate.avatar || '/default-avatar.png'} 
            alt={candidate.name}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
          />
          <div>
            <h1 className="text-md font-medium">{candidate.name}</h1>
            <p className="text-sm sm:text-base">{candidate.email}</p>
            <p className="text-sm sm:text-base">{candidate.contact}</p>
          </div>
        </div>
        
        <div className="flex gap-4 sm:gap-[235px] w-full sm:w-auto justify-between sm:justify-end">
          <a 
            href={candidate.resume} 
            download
            className="flex items-center gap-1 text-sm sm:text-base text-[#2C2C2C] hover:text-blue-600"
          >
          
            <span >Resume-name.pdf/.doc</span>
            <svg 
    width="24" 
    height="24" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <path 
      fill="currentColor" 
      d="M8 17V15H16V17H8M16 10L12 14L8 10H10.5V7H13.5V10H16M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M5 5V19H19V5H5Z"
      className="group-hover:fill-blue-600 transition duration-300"
    />
  </svg>
          </a>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-sm sm:text-base text-[#2C2C2C] hover:text-blue-600"
          >
              <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="22" 
    height="22" 
    viewBox="0 -960 960 960" 
    fill="currentColor" 
    className="group-hover:fill-blue-600 transition duration-300"
  >
    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
  </svg>
            <span className="hidden sm:inline ">Listing page</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          {/* Basic Details Section */}
          <div className="mb-6">
            <h2 className="text-md font-medium mb-2 text-[#2C2C2C]">Basic Details</h2>
            <div className="bg-gray-50 rounded p-3 sm:p-4 border border-1 border-[#acd0ff]">
              <div className="flex flex-col sm:flex-row justify-between mb-3">
                <span className="text-sm sm:text-base">Applied Position</span>
                <span className="text-sm sm:text-base">{candidate.position}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between">
                <span className="text-sm sm:text-base">Application Status</span>
                <span className="text-sm sm:text-base">{candidate.status}</span>
              </div>
            </div>
          </div>

          {/* Experience Details Section */}
          <div>
            <h2 className="text-md font-medium mb-2 text-[#2C2C2C]">Experience Details</h2>
            <div className="flex gap-4 flex-col">
            <div className="flex-1 bg-white rounded p-3 sm:p-4 border border-1 border-[#acd0ff]">
  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 mb-3">
    <span className="font-medium sm:font-normal">Employer 1</span>
    <span className="text-sm sm:text-base">Great Champ Technology</span>
  </div>
  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 mb-3">
    <span className="font-medium sm:font-normal">Duration</span>
    <span className="text-sm sm:text-base">Jan 2019 to Present</span>
  </div>
  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 mb-3">
    <span className="font-medium sm:font-normal">Position</span>
    <span className="text-sm sm:text-base">Frontend UI Developer</span>
  </div>
  <p className="text-gray-700 bg-gray-50 p-3 sm:p-4 rounded text-sm sm:text-base leading-relaxed">
    Responsibility was to manage the organization's product solutions and design, while also providing guidance and assistance to two junior designers. I designed two mobile apps and multiple responsive websites.
  </p>
</div>

<div className="flex-1 bg-white rounded p-3 sm:p-4 border border-1 border-[#acd0ff]">
  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 mb-3">
    <span className="font-medium sm:font-normal">Employer 2</span>
    <span className="text-sm sm:text-base">Tech Mahindra</span>
  </div>
  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 mb-3">
    <span className="font-medium sm:font-normal">Duration</span>
    <span className="text-sm sm:text-base">March 2015 to Dec 2018</span>
  </div>
  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0 mb-3">
    <span className="font-medium sm:font-normal">Position</span>
    <span className="text-sm sm:text-base">UI Developer</span>
  </div>
  <p className="text-gray-700 bg-gray-50 p-3 sm:p-4 rounded text-sm sm:text-base leading-relaxed">
    Responsibility was to manage the organization's product solutions and design, while also providing guidance and assistance to two junior designers. I designed two mobile apps and multiple responsive websites.
  </p>
</div>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="w-full lg:w-80">
          <div className="flex gap-2 items-center mb-2">
            <h2 className="text-md font-medium text-[#2C2C2C]">Additional Notes</h2>
            <button className="text-[#2C2C2C] hover:text-blue-600">
            <svg 
    width="24" 
    height="24" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    fill="currentColor" 
    className="group-hover:fill-blue-600 transition duration-300"
  >
    <path d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z"/>
  </svg>
            </button>
          </div>
          <textarea 
            className="w-full h-[300px] lg:h-[calc(100vh-250px)] p-4 border rounded resize-none border border-1 border-[#acd0ff] text-sm sm:text-base"
            placeholder="Add notes about the candidate..."
          />
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;