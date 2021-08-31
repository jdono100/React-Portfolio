import React, { useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import content from '../content';
import NavBurger from './NavBurger';

export default function Navbar() {
  useEffect(() => {
    const menuWrap = document.querySelector('.bm-menu-wrap');
    if (menuWrap) {
      menuWrap.setAttribute('aria-hidden', true);
    }
  }, []);
  return(
    <nav className="w-full fixed z-10" style={{
      background: '#291F1E'
    }}>
      <div className="flex items-center justify-between mx-auto w-11/12 py-3 text-yellow-400">
        <button id='logobtn' onClick={() => scroll.scrollToTop()} className="text-xl font-bold">
          {content.navbar.logo}
        </button>
        <div className='hidden md:flex'>
          {content.navbar.links.map((link, i) => {
            return(
              <Link key={i} to={link.to} smooth={true}>
                <li className="mr-4 inline-block p-4 text-sm hover:text-yellow-800" key={i}>{link.text}</li>
              </Link>
            )
          })}
        </div>
        <div className='md:hidden flex items-center'>
          <NavBurger />
        </div>
      </div>
    </nav>
  );
};
