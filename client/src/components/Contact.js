import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithubSquare, 
  faTwitterSquare, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import content from '../content';

export default function Contact() {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = event.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:3001/contact', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    let result = await response.json();
    alert(result.status);
  }
  return (
    <div id='myContact' className='min-h-screen flex items-center justify-center' style={{
      background: '#3a312c'
    }}>
      <div className='w-4/5 flex flex-col md:flex-row items-center justify-between'>
        <div className='mb-10 text-center p-10 rounded-xl bg-black'>
          <h1 className='text-4xl md:text-5xl font-bold text-yellow-500'>Links</h1>
          <div className='mt-8 space-x-4'>
            <a className='text-gray-500 transition duration-200 hover:text-gray-300' target='_blank' rel='noreferrer' href={content.contact.links.github}><FontAwesomeIcon icon={faGithubSquare} size='4x'/></a>
            <a className='text-gray-500 transition duration-200 hover:text-gray-300' target='_blank' rel='noreferrer' href={content.contact.links.linkedin}><FontAwesomeIcon icon={faLinkedin} size='4x'/></a>
            <a className='text-gray-500 transition duration-200 hover:text-gray-300' target='_blank' rel='noreferrer' href={content.contact.links.twitter}><FontAwesomeIcon icon={faTwitterSquare} size='4x'/></a>
          </div>
          <div className='mt-4'>
            <a href={content.contact.resume} className='text-xl md:text-2xl text-yellow-300 hover:text-yellow-200 transition duration-200' download>
              Download My Resume{' '}
              <FontAwesomeIcon icon={faFileDownload}/>
            </a>
          </div>
        </div>
        <div className='p-10 rounded-xl text-center space-y-4 bg-black'>
          <h1 className='text-4xl md:text-5xl font-bold text-yellow-500'>Contact Me</h1>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name' className='pr-8 text-white'>Name:</label>
              <input className='bg-gray-300 p-3 rounded-lg' type='text' id='name' required/>
            </div>
            <div>
              <label htmlFor='email' className='pr-9 text-white'>Email:</label>
              <input className='bg-gray-300 p-3' type='text' id='email' required/>
            </div>
            <div>
              <label htmlFor='message' className='text-white'>Message:</label>
              <textarea className='bg-gray-300 p-3 w-full h-40' type='text' id='message' required/>
            </div>
            <button type='submit'>{status}</button>
          </form>
        </div>
      </div>
    </div>
  )
}
