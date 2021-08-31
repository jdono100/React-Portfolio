import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import content from '../content';

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector('.bm-menu-wrap');
  isOpen 
    ? menuWrap.setAttribute('aria-hidden', false) 
    : menuWrap.setAttribute('aria-hidden', true);
  document.querySelector('#logobtn').addEventListener('click', () => {
    isOpen 
      ? menuWrap.setAttribute('aria-hidden', false) 
      : menuWrap.setAttribute('aria-hidden', true);
  });
};

const NavBurger = () => {

  return(
    <Menu right customCrossIcon={ false } onStateChange={ toggleMenu }>
      <ul>
        {content.navbar.links.map((link, i) => {
          return(
            <Link key={i} to={link.to} smooth={true}>
              <li key={i}>
                <button className="py-4 inline-block cursor-pointer hover:text-yellow-800 ">{link.text}</button>
              </li>
            </Link>
          )
        })}
      </ul>
    </Menu>
  );
};

export default NavBurger;