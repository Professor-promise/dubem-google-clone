import React from 'react';

const Avatar = ({ url, className }) => {
  return (
    <img
      loading='true'
      className={`${className} rounded-full p-1 hover:bg-[#cccccc]  cursor-pointer`}
      src={url}
      alt='profile'
    />
  );
};

export default Avatar;
