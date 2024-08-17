import React from 'react';
import { logo } from '../assets';
import Container from './Container';

const Header = () => {
  // const navigation=[
  //   {title:'Home',link:'/'},
  //   {title:'About',link:'about'},
  //   {title:'Skills',link:'Skills'},
  //   {title:'Contact',link:'contact'},
    
  // ]
    return (
        
          <Container >
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a href='#'><img className='w-[160px]' src={logo} alt="Hossain logo" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>About Me</a></li>
      <li><a>Skills</a></li>
      <li><a>Projects</a></li>
      <li><a>Contact Me</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://www.linkedin.com/in/hossain-m13/' className="w[100px] h-10 bg-#ff9900">Button</a>
  </div>
</div>
          </Container>
        
    );
};

export default Header;