import React from 'react';
import { useNavigate } from 'react-router-dom';

const CandidateRow = ({ candidate }) => {
  const navigate = useNavigate();

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Shortlisted':
        return 'bg-green-100 text-green-800 border border-1 border-[#129855]';
      case 'In Review':
        return 'bg-yellow-100 text-yellow-800 border border-1 border-[#AF8100]';
      case 'Not Chosen':
        return 'bg-red-100 text-red-800 border border-1 border-[#FF7600]';
      case 'On Hold':
        return 'bg-orange-100 text-orange-800 border border-1 border-[#FF7600]';
      default:
        return 'bg-gray-100 text-gray-800 border border-1 border-[#E61515]';
    }
  };

  return (
    <tr 
      className="hover:bg-gray-50 cursor-pointer flex flex-col sm:table-row"
      onClick={() => navigate(`/candidate/${candidate.id}`)}
    >
      <td className="p-2 sm:p-4 text-sm sm:text-base">
        <span className="sm:hidden font-bold mr-2">Name:</span>
        {candidate.name}
      </td>
      <td className="p-2 sm:p-4 text-sm sm:text-base">
        <span className="sm:hidden font-bold mr-2">Email:</span>
        {candidate.email}
      </td>
      <td className="p-2 sm:p-4 text-sm sm:text-base">
        <span className="sm:hidden font-bold mr-2">Position:</span>
        {candidate.position}
      </td>
      <td className="p-2 sm:p-4">
        <span className="sm:hidden font-bold mr-2">Status:</span>
        <span className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm  ${getStatusStyle(candidate.status)}`}>
          {candidate.status}
        </span>
      </td>
    </tr>
  );
};

export default CandidateRow;