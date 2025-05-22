import React from 'react';

import { Typewriter } from 'react-simple-typewriter';

const Text = () => {
  
    return (
        <div className='bg-violet-300 '>
          
            <h2 className='text-[3rem] font-bold text-center pt-15 pb-15 text-white'>

              <Typewriter
                          cursor
                          loop={true}
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          words={['Finding a great roommate should be hassle free.','A roommate finder for wherever you may go.','A roommate search simplified']}
                        />
            </h2>
  
        </div>
    );
};

export default Text;

 

     