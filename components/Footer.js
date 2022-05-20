import React from 'react';
import Avatar from './Avatar';
import { altLinks, homeLinks } from './links';

const Footer = () => {
  return (
    <footer className='grid w-full bg-[#F2F2F2] text-[#70757A] text-sm divide-y divide-[#afaaaa]'>
      <div className='p-3 md:px-6'>
        <p>Nigeria</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-2 grid-flow-row-dense space-y-4 lg:space-y-0'>
        <div className='flex space-x-1 col-span-1 items-center justify-center  lg:col-start-2 md:col-span-2 lg:col-span-1'>
          <Avatar
            url='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC'
            className='h-6'
          />
          <p className='link'>Carbon neutral since 2007</p>
        </div>
        <div className='flex space-x-3 justify-center md:justify-start items-center '>
          {homeLinks?.map((link) => (
            <p key={link.id} className='link'>
              {link.text}
            </p>
          ))}
        </div>
        <div className='flex space-x-3 justify-center md:justify-end items-center'>
          {altLinks?.map((link) => (
            <p className='link' key={link.id}>
              {link.text}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
