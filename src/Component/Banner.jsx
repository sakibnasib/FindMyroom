import React from 'react';
import logo1 from '../assets/WhatsApp Image 2025-05-19 at 23.12.33_174c4461.jpg'
import logo2 from '../assets/WhatsApp Image 2025-05-19 at 23.26.16_d411be48.jpg'
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
    return (
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className='max-w-lg mb-6 text-[3rem] font-bold'>
              The Best & <Typewriter
              cursor
              loop={true}
               typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
               words={['Faster Roommate Finder ']}/> .
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Looking for a roommate,renting out a room, or teaming up to find a new place?<span>FindMyRoom</span>helps you find compatible roommate easily with a safe,hassle-free experience
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            
          </div>
        </div>
      </div>
      <div className="inset-y-0 pt-10 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        {/*  */}
<div className="carousel carousel-vertical rounded-lg h-96 w-full">
  <div className="carousel-item h-full w-full">
    <img src={logo1} />
  </div>
  <div className="carousel-item h-full w-full">
    <img src={logo2} />
  </div>
   </div>

        {/*  */}
      </div>
    </div>
    );
};

export default Banner;

 {/* <div className="carousel carousel-vertical rounded-box h-96 w-full">
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
  </div>
</div> */}