
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Typewriter } from 'react-simple-typewriter';
 import logo1 from '../assets/WhatsApp Image 2025-05-19 at 23.12.33_174c4461.jpg';
import logo2 from '../assets/WhatsApp Image 2025-05-19 at 23.26.16_d411be48.jpg';
import logo3 from '../assets/WhatsApp Image 2025-05-22 at 21.35.24_5c3828dd.jpg'
const slides =[
  {
    id : 1,
     image:logo1,
      title: ' The Best & Faster Roommate Finder .',
      description:'Looking for a roommate, renting out a room, or teaming up to find a new place?'
  },
  {
    id:2 ,
    image:logo2,
     title: 'The roommate finder you can trust.',
     description:'Looking for a roommate, renting out a room, or teaming up to find a new place?'

  },
  {
     id : 1,
     image:logo3,
      title: ' The Best & Faster Roommate Finder .',
     description:'Looking for a roommate, renting out a room, or teaming up to find a new place?'
  }
]
const Banner = () => {
  return (
    <div className="w-full h-[550px] ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover  bg-center flex items-center px-25 justify-start  text-white"
              style={{
                backgroundImage: `url(${slide.image})`,
               backgroundSize: "cover",           // or "100% 100%" if you want to stretch exactly
backgroundPosition: "center",
backgroundRepeat: "no-repeat"
              }}
            >
              <div className=" flex flex-col justify-center text-center items-center bg-opacity-50  gap-3 rounded-lg ">
                <h2 className="text-4xl font-bold text-center text-gray-900">
                 
                   <Typewriter
                cursor
                loop={true}
                typeSpeed={100}
                deleteSpeed={30}
                delaySpeed={1000}
                // words={['Faster Roommate Finder']}
                words={ [slide.title]}
              />
                  </h2>
                <p className="mt-4 text-lg text-center text-gray-700">{slide.description}</p>
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;