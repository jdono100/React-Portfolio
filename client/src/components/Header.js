import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Typical from 'react-typical';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';

export default function Header() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
    <div className='min-h-screen flex items-center justify-center' style={{
      background: '#292320'
    }}>
      <div className='w-10/12 flex flex-col md:flex-row-reverse items-center justify-between'>
        <div className='w-full md:w-2/5' style={{ opacity: '60%' }}>
          <LazyLoadImage 
            src={content.header.img} 
            effect="blur"
            className='rounded-lg z-0'
          />
        </div>
        <div className='text-yellow-400 text-center md:text-left'>
          <h2 className={`${animated ? '' : 'translate-y-10 opacity-0'} transform transition duration-1000 ease-in-out text-3xl md:text-4xl lg:text-5xl font-bold`}>
            {content.header.text[0]}
            <br/>
            {content.header.text[1]}
          </h2>
          <h2 className={`${animated ? '' : 'translate-y-10 opacity-0'} transform transition duration-1000 ease-in-out font-bold text-xl text-yellow-300`}>
            {content.header.text[2]}{' '}
            <Typical 
              steps={content.header.typical}
              loop={Infinity}
              className='inline-block'
              /> 
          </h2>
          <ScrollLink to='aboutMe' smooth={true}>
            <button className='bg-gradient-to-r text-gray-900 from-yellow-400 via-orange-500 to-red-500 px-10 py-3 text-xl mt-5 rounded-lg'>{content.header.btnText}</button>
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}
