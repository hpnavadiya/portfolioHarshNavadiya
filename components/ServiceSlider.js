import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'MERN Stack - Ecommerce Website',
    description: 'Create Ecommerce general store web app with admin and client side validation.',
  },
  {
    icon: <RxPencil2 />,
    title: 'MERN Stack - iNoteBook',
    description: 'In this app user being able to add notes using title and description and modified it.',
  },
  {
    icon: <RxDesktop />,
    title: 'FrontEnd - Social Media Clone',
    description: 'It is similar to Facebook. This project focuses solely on the user interface (UI).',
  },
  {
    icon: <RxReader />,
    title: 'JavaScript - Merge PDF Tool',
    description: 'This project is about allowing users to merge two PDFs, and it will download automatic.',
  },
  {
    icon: <RxRocket />,
    title: 'Personal Portfolio',
    description: 'I create this website using next JS, tailwind css and implement some features to show list of projects.',
  },
];


const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

    }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
              sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
              transition-all duration-300'>
                {/* icon  */}
                <div className='text-4xl text-accent mb-4'>
                  {item.icon}
                </div>
                {/* title and dec  */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='mx-w-[350px] leading-normal'>{item.description}</p>
                </div>
                {/* Arroe  */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45
                  group-hover:text-accent transition-all duration-300'/>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;