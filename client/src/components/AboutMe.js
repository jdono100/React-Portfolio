import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';

export default function AboutMe() {
  return (
    <div id="aboutMe" className='min-h-screen flex items-center justify-center' style={{
      background: '#362E2A'
    }}>
      <div className='rounded-xl p-4 h-4/5 text-xl text-yellow-600 w-10/12 flex flex-col md:flex-row-reverse items-center justify-between' style= {{ background: '#28221f' }}>
        <div className='w-3/5 md:w-2/5' style={{ 
              opacity: '60%' 
            }}>
          <LazyLoadImage
            src={content.aboutMe.image}
            effect='blur'
            className='rounded-md pl-1'
          />
        </div>
        <div className='text-center md:text-left'>
          <p>{content.aboutMe.paragraphs[0]}</p>
          <p className="pt-3 text-yellow-500">{content.aboutMe.paragraphs[1]}</p>
          <p className="pt-3 text-yellow-400">{content.aboutMe.paragraphs[2]}</p>
          <p className="pt-3 text-yellow-300">{content.aboutMe.paragraphs[3]}</p>
        </div>
      </div>
    </div>
  )
}
