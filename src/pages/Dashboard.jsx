import React from 'react';
import { useSelector } from 'react-redux';
import CandidateRow from '../components/CandidateList/CandidateRow';

const Dashboard = () => {
  // Update the selector to match the state structure
  const candidates = useSelector((state) => state.candidates?.candidates || []);
  const loading = useSelector((state) => state.candidates?.loading);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table className="w-full bg-[#D0E4FE]">
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
  );
};

export default Dashboard;