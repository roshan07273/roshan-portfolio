// import { Link } from 'react-router-dom'
import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Roshan Raturi | Resume</title>
        <meta
          name='description'
          content='I’m a MCA student and Software Developer Passionate , Contact me.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Roshan Raturi.</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/roshanraturi28/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/roshan07273'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
            Software Engineer Passionate <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Fresher | Full Stack Development
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Software Engineer Passionate.</p>
            <p className='py-2'>Web Development</p>
            <p>Fresher || Full Stack Development.</p>
          </div>
        </div>
        <p>
        Hello, I'm Roshan Raturi, currently navigating the exciting journey of pursuing my Master's in Computer Applications (MCA) at GEU University. I find myself in the vibrant mix of coding challenges, software exploration, and the ever-evolving world of technology.
        </p>
        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML5
            <span className='px-2'>|</span>CSS3
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React JS
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>C++
            <span className='px-2'>|</span>Tailwind CSS
            <span className='px-2'>|</span> Python
            <span className='px-2'>|</span> Node jS.
          </p>
          <p className='py-2'>
            <span className='font-bold'>Data Structure and Algorithms.</span>
            <span className='px-2'>|</span>Amazon Web Services ||  
            <a
        href="https://www.overleaf.com/project/6584f0dcd1bdbbd59b13160f"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'underline', color: 'blue' }}
      >
        My Resume Latex.
      </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default resume;
