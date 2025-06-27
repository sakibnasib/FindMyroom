import React from 'react';

const SkeletonTableRow = () => {
  return (
    <tbody>
      <tr className="border-b border-gray-200 bg-gray-50 animate-pulse">
        <td className="p-3"></td>
        <td className="p-3">
          <div className="rounded-full bg-gray-300 h-12 w-12"></div>
        </td>
        <td className="p-3">
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </td>
        <td className="p-3">
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </td>
        <td className="p-3">
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </td>
        <td className="p-3 text-right">
          <div className="h-4 bg-gray-300 rounded w-16 ml-auto"></div>
        </td>
        <td className="p-3 text-right">
          <div className="flex gap-2 justify-end">
            <div className="h-8 w-16 bg-gray-300 rounded"></div>
            <div className="h-8 w-16 bg-gray-300 rounded"></div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default SkeletonTableRow;
