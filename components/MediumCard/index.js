import Image from 'next/image';
import React from 'react';

const MediumCard = ({ title, img }) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition-all'>
      <div className='relative h-80 w-80'>
        <Image className='rounded-xl' layout='fill' alt='Card' src={img} />
      </div>
      <h3 className='text-2xl mt-3 font-bold'>{title}</h3>
    </div>
  );
};

export default MediumCard;
{
}
