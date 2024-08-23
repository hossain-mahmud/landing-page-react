import React from 'react';
import Container from './Container';
import { myImage } from '../assets';

const Herosection = () => {
    return (
          <Container>
            {/* -------- main div ------- */}
              <div className='flex justify-between items-center mt-11 flex-wrap pt-[150px] pb-[100px]'> 
                <div className='basis-2/4'>
                    <h5 className='font-medium text-[20px]'>Hey, nice to meet you!</h5>
                    <h1 className='text-[90px] font-bold font-sans'>I'm Hossain</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime, at cupiditate mollitia alias corporis nesciunt! Ut nihil rem cum? Delectus dolorum explicabo ipsam cum totam iure eius reprehenderit itaque?</p>
                </div>
                <div className='basis-2/4 pl-[70px]'>
                    <img className='rounded-[10px]' src={myImage} alt="Hossain Mahmud Image" />
                </div>
            </div>
        </Container>
    );
};

export default Herosection;