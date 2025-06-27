import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="flex flex-col gap-2 w-full col-span-1 shadow-xl p-3 rounded-xl animate-pulse">
    <div className="aspect-square w-full bg-gray-200 rounded-xl"></div>
    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded w-2/4"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
    <div className="h-8 bg-gray-300 rounded w-24 mt-2"></div>
  </div>
    );
};

export default SkeletonCard;