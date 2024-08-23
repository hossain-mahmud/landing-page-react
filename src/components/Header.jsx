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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a href='#'><img className='w-[160px]' src={logo} alt="Hossain logo" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex space-x-6">
      <li><a>About Me</a></li>
      <li><a>Skills</a></li>
      <li><a>Projects</a></li>
      <li><a>Contact Me</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className='relative w-[100px] h-10 text-white text-[18px] font-medium nded-full overflow-hidden bg-[#ff9900] rounded-full transition-all duration-400 ease-in-out duration-500 hover:scale-105 hover:text-white active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[#333] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0'>Resume</button>
    
  </div>
</div>
          </Container>
        
    );
};

export default Header;