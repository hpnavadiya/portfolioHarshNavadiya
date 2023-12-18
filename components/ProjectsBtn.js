import Link from 'next/link';

import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
  <div className='mx-auto xl:mx-0'>
    <Link href={'/services'} className='relative w-[150px] h-[150px] flex justify-center items-center
      bg-circleStar bg-cover bg-center bg-no-repeat group
    ' >
      <Image
        src={'/rounded-text.png'}
        width={130}
        height={130}
        alt=''
        className='animate-spin-slow w-full h-full max-w-[130px] max-h-[135px]'
      />
      <HiArrowRight className='absolute text-4xl group-hover:translate-x-1
      transition-all duration-300' />
    </Link>
  </div>
  );
};

export default ProjectsBtn;