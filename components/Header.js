import React from 'react';
import Image from 'next/image';
import {
  CogIcon,
  MicrophoneIcon,
  SearchIcon,
  ViewGridAddIcon,
  XIcon,
} from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const Header = () => {
  const router = useRouter();
  const searchRef = useRef();

  const search = (e) => {
    e.preventDefault();

    const term = searchRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className='sticky top-0 w-full bg-[#fff] '>
      <div className='flex w-full items-center px-5 py-6 '>
        <Image
          width={100}
          height={35}
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
          className='cursor-pointer'
          onClick={() => router.push('/')}
        />
        <form className='flex items-center border rounded-full px-4 py-1.5 md:px-6 md:py-3  border-[#70757A] text-[#70757A] hover:shadow-lg focus-within:shadow-lg max-w-2xl flex-grow ml-6 mr-3'>
          <input
            type='text'
            ref={searchRef}
            value={router.query.term}
            className='bg-transparent w-full flex-grow outline-none '
          />
          <XIcon
            className='h-7  px-1 cursor-pointer'
            onClick={() => (searchRef.current.value = '')}
          />
          <div className=' text-blue-600 border-l-2 border-[#70757A] px-2 hidden sm:flex cursor-pointer'>
            <MicrophoneIcon className='h-6 mr-1' />
            <SearchIcon className='h-6' />
          </div>
          <button type='submit' className='hidden' onClick={search}>
            search
          </button>
        </form>
        <div className='flex-auto flex items-center justify-end  '>
          <div className='items-center text-[#70757A] hidden sm:flex '>
            <CogIcon className='h-9 p-1 rounded-full hover:bg-[#cbcccc] cursor-pointer' />
            <ViewGridAddIcon className='h-9 p-1 rounded-full hover:bg-[#cbcccc]  cursor-pointer' />
          </div>
          <Avatar url='https://lh3.googleusercontent.com/ogw/ADea4I4EonhM2gzrG1M4VvysYOwLowdOdSbjeImSzylWdA=s32-c-mo' />
        </div>
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
