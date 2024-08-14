import React from 'react';
import Container from './Container';
import { myImage } from '../assets';

const Herosection = () => {
    return (
          <Container>
            {/* -------- main div ------- */}
              <div className='flex justify-between items-center'> 
                <div>
                    <h5 className='font-medium'>Hey, nice to meet you!</h5>
                    <h1>I'm Hossain</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime, at cupiditate mollitia alias corporis nesciunt! Ut nihil rem cum? Delectus dolorum explicabo ipsam cum totam iure eius reprehenderit itaque?</p>
                </div>
                <div>
                    <img src={myImage} alt="Hossain Mahmud Image" />
                </div>
            </div>
        </Container>
    );
};

export default Herosection;