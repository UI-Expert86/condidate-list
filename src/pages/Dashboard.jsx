import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CandidateRow from '../components/CandidateList/CandidateRow';

const Dashboard = () => {
  const navigate = useNavigate();
  const candidates = useSelector((state) => state.candidates?.candidates || []);
  const loading = useSelector((state) => state.candidates?.loading);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full bg-[#D0E4FE]">
        {/* Mobile View */}
        <div className="sm:hidden">
          {candidates.map(candidate => (
            <div 
              key={candidate.id} 
              className="bg-white mb-2 p-4 shadow cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/candidate/${candidate.id}`)}
            >
              <div className="mb-2">
                <div className="font-bold text-[#1863dc]">Name</div>
                <div>{candidate.name}</div>
              </div>
              <div className="mb-2">
                <div className="font-bold text-[#1863dc]">Email</div>
                <div className="text-sm">{candidate.email}</div>
              </div>
              <div className="mb-2">
                <div className="font-bold text-[#1863dc]">Position</div>
                <div>{candidate.position}</div>
              </div>
              <div>
                <div className="font-bold text-[#1863dc]">Status</div>
                <div>{candidate.status}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <table className="hidden sm:table w-full">
          <thead className="bg-[#1863dc] text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Position Applied For</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(candidate => (
              <CandidateRow key={candidate.id} candidate={candidate} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;