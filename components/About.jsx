import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          Hello, I'm Roshan Raturi, currently navigating the exciting journey of pursuing my Master's in Computer Applications (MCA) at GEU University. I find myself in the vibrant mix of coding challenges, software exploration, and the ever-evolving world of technology.

Beyond the academic hustle, I'm driven by a proactive approach to learning and a genuine eagerness to apply my knowledge in practical scenarios. Uttarakhand serves as more than just my place of origin; it's a wellspring of inspiration that propels me forward in my academic and personal pursuits.

The future looks promising, and I'm excited about the opportunities that lie ahead. With a passion for innovation, a commitment to continuous learning, and the scenic backdrop of Uttarakhand shaping my perspective, I'm ready to make my mark in the world of technology.
          </p>
          <p className='py-2 text-gray-600'>
          My academic voyage spans the years 2022 to 2024, during which I am immersing myself in the diverse realms of software development and data analysis. GEU University provides me with not just a classroom but a playground for honing my skills, collaborating with peers, and tackling real-world challenges.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
