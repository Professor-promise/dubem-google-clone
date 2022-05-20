import React from 'react';
import { headerLinks } from './headerLinks';

const HeaderOptions = () => {
  return (
    <div className='w-full flex space-x-4 items-center border-b text-sm md:text-md text-[#5F6368] px-5 lg:px-36 '>
      <div className='flex items-center space-x-5 pr-16'>
        {headerLinks?.map((item) => (
          <div
            key={item.id}
            className={`flex space-x-1 items-center pb-2  ${
              item.selected ? 'text-blue-700 border-b-4 border-blue-700' : ''
            } `}
          >
            <p className='h-5 w-5 '>{item.icon}</p>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <p className='link hidden md:flex items-center pb-2'>Tools</p>
    </div>
  );
};

export default HeaderOptions;
