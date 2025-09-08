import React from "react";

export const LoadingCard: React.FC = () => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="aspect-square">
        <div className="w-full h-full bg-gray-300 animate-pulse"></div>
      </figure>
      <div className="card-body">
        <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>
      </div>
    </div>
  );
};
