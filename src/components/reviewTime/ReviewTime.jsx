import React from 'react';

const ReviewTime = ({ createdAt }) => {
    console.log(createdAt);
  const getTimeDifference = () => {
    const currentTime = new Date();
    const reviewTime = new Date(createdAt);
    const timeDifference = Math.floor((currentTime - reviewTime) / 1000);

    const minutes = Math.floor(timeDifference / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const seconds = timeDifference;

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  };
  const timeAgo = getTimeDifference();

  return <div className='text-gray-400'> {timeAgo}</div>;
};

export default ReviewTime;
