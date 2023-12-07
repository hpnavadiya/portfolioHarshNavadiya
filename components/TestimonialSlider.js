// testimonial data
export const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Good learner',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Always try to learn something new with the help of professor.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Good Learner',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';

// icons
import {
  FaQuoteLeft
} from "react-icons/fa";
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center
                relative mx-auto xl:mx-0'>
                {/* avtar name position  */}
                <div className='flex flex-col justify-center text-center'>
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  <div className='text-lg'>{person.name}</div>
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* message  */}
              <div className='bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] 
                xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] 
                  relative xl:pl-20'>
                {/* icon  */}
                <div className='mb-4 '>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message  */}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>

          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default TestimonialSlider;