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
    return <div className="p-6">Candidate not found</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <img 
            src={candidate.avatar || '/default-avatar.png'} 
            alt={candidate.name}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="text-md font-medium">{candidate.name}</h1>
            <p className="">{candidate.email}</p>
            <p className="">{candidate.contact}</p>
          </div>
        </div>
       
          <a 
            href={candidate.resume} 
            download
            className="flex items-center gap-1"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24"><path fill="#2C2C2C" d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z"/></svg>
            <span>Resume-name.pdf/.doc</span>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#2C2C2C" d="M8 17V15H16V17H8M16 10L12 14L8 10H10.5V7H13.5V10H16M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M5 5V19H19V5H5Z"/></svg>
          </a>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2C2C2C" d="M7,12L12,7V10H16V14H12V17L7,12M21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M19,5H5V19H19V5Z"/></svg>
            Listing page
          </button>
        
      </div>

      <div className="flex gap-6">
        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-md font-medium mb-3">Basic Details</h2>
            <div className="bg-gray-50 rounded p-4 custom-shadow">
              <div className="flex justify-between mb-3">
                <span className="">Applied Position</span>
                <span>{candidate.position}</span>
              </div>
              <div className="flex justify-between">
                <span className="">Application Status</span>
                <span>{candidate.status}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-md font-medium mb-3">Experience Details</h2>
            <div className="flex gap-4 flex-col">
              {/* Current Company */}
              <div className="flex-1 bg-gray-50 rounded p-4 custom-shadow">
                <div className="flex justify-between mb-3">
                  <span className="">Employer 1</span>
                  <span>Great Champ Technology</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="">Duration</span>
                  <span>Jan 2019 to Present</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="">Position</span>
                  <span>Frontend UI Developer</span>
                </div>
                <p className="text-gray-700 bg-white p-4 rounded">
                  Responsibility was to manage the organization's product solutions and design, while also providing guidance and assistance to two junior designers. I designed two mobile apps and multiple responsive websites.
                </p>
              </div>

              {/* Previous Company */}
              <div className="flex-1 bg-gray-50 rounded p-4 custom-shadow">
                <div className="flex justify-between mb-3">
                  <span className="">Employer 2</span>
                  <span>Absas Solutions pvt. ltd</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="">Duration</span>
                  <span>March 2015 to December 2018</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="">Position</span>
                  <span>Web Designer</span>
                </div>
                <p className="text-gray-700 bg-white p-4 rounded">
                  Responsibility was to manage the organization's product solutions and design, while also providing guidance and assistance to two junior designers. I designed two mobile apps and multiple responsive websites.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80">
          <div className="flex gap-2 items-center mb-3">
            <h2 className="text-md font-medium">Additional Notes</h2>
            <button className="text-blue-600">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#2C2C2C" d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z"/></svg>
              
            </button>
          </div>
          <textarea 
            className="w-full h-[calc(100vh-250px)] p-4 border rounded resize-none custom-shadow"
            placeholder="Add notes about the candidate..."
          />
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;