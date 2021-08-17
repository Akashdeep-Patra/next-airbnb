import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
        className=''
        layout='fill'
        objectFit='cover'
        src='https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        alt='hero'
      />
      <div className='absolute flex flex-col items-start top-24 sm:top-44 lg:top-60 left-12 lg:left-44 text-center w-2/3'>
        <h1 className='sm:text-lg text-left text-4xl sm:text-5xl font-extrabold text-white'>
          Not sure where to go? Perfect.
        </h1>
        <button
          className='text-white  px-10 py-4 shadow-md 
        rounded-xl cursor-pointer font-bold my-3 transition-all active:scale-90 hover:shadow-xl hover:scale-105 bg-red-400'
        >
          {' '}
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
