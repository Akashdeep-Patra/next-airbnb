import Image from 'next/image';
import React from 'react';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';
const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          layout='fill'
          objectFit='contain'
          objectPosition='left'
          alt='Logo'
          src='https://links.papareact.com/qd3'
        />
      </div>
      <div className='md:shadow-sm flex items-center md:border-2 rounded-full py-2'>
        <input
          type='text'
          className='text-sm text-gray-600 placeholder-gray-400 pl-5 bg-transparent outline-none flex-grow'
          placeholder='Start your search'
        />
        <SearchIcon className='md:mx-2 hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer' />
      </div>
      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex item-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  );
};

export default Header;
