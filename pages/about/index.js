import React, { useState } from 'react';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaServer,
  FaNodeJs,
  FaDatabase,
  FaGit,
  FaGithub
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaNodeJs />,
          <SiNextdotjs />,
          <FaServer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'DataBase Development',
        icons: [<FaDatabase />],
      },
      {
        title: 'Frontend Development',
        icons: [<SiTailwindcss />],
      },
      {
        title: 'Version Control',
        icons: [<FaGit />, <FaGithub />],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'certificate',
    info: [
      {
        title: 'Full-Stack Development',
        stage: 'University of Helsinki',
      },
    ],
  },
  // {
  //   title: 'experience',
  //   info: [
  //     {
  //       title: 'UX/UI Designer - XYZ Company',
  //       stage: '2012 - 2023',
  //     },
  //     {
  //       title: 'Web Developer - ABC Agency',
  //       stage: '2010 - 2012',
  //     },
  //     {
  //       title: 'Intern - DEF Corporation',
  //       stage: '2008 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - Conestoga College, Brantford, ON, CA',
        stage: ['CGPA 3.95',' Dec-2023'],
      },
      {
        title: 'Bachelor of Computer Science - Gujarat Technological University, Gujarat, IND',
        stage: ['CGPA 8.45',' June-2022'],
      },
    ],
  },
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import CountUp from 'react-countup';

const About = () => {

  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* Avtar img  */}
      <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[275px] max-h-[450px] max-w-[500px]'
      >
        <Avatar />
      </motion.div>

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>

        <div className='flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 mt-10'>
            Captivating <span className='text-accent'>stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            Hello! My name is Harsh Navdiya, and I enjoy creating things that live on the internet. My interest in web development started when I tried to convert my ideas into the real world.
            I value simple content structure, clean design patterns and thoughtful interactions.
            I genuinely care about people, and love helping fellow designers work on their craft.
          </motion.p>
          {/* Counters  */}
          <motion.div 
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6 ml-10'>
              {/* experience */}
              <div className='relative after:w-[2px] after:h-full
                  after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[2px] leading-[1.4] max-w-[100px] after:ml-10'>
                  Projects
                </div>
              </div>
              {/* client  */}
              {/* <div className='relative flex-1 after:w-[1px] after:h-full
                  after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Info  */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]  mt-20'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    } cursor-pointer capitalize xl:text-lg relative after:w-8
                        after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}

                </div>
              );
            })}
          </div>

          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 
                          items-center text-white/60'
                >
                  {/* titlr */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icon  */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div >
  );
};

export default About;