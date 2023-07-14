import React from 'react';

const LoadingComponent = () => {
    return (
      <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
};

export default LoadingComponent;