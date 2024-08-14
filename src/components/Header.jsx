import React from 'react';
import { logo } from '../assets';
import Container from './Container';
import Button from './Button';

const Header = () => {
  const navigation=[
    {title:'Home',link:'/'},
    {title:'About',link:'about'},
    {title:'Skills',link:'Skills'},
    {title:'Contact',link:'contact'},
    
  ]
    return (
        
          <Container >
          <div className='flex justify-between items-center mt-10'>
          <img src={logo} alt="logo" className='w-36' />
          <div className='flex items-center gap-10'>
            <ul className='flex space-x-7 cursor-pointer'>
              
              
            {
              navigation?.map((item)=>(
 <li className='text-xl font-medium hover:text-orange-500 duration-300'>{item.title}</li> 
              ))
            }
            </ul>
            <button className='bg-orange-500 text-xl text-white font-medium px-4 py-2 rounded-lg'>Resume</button>
          </div>
          </div>
          </Container>
        
    );
};

export default Header;