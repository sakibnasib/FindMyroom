// import React from 'react';
// import logo1 from '../assets/WhatsApp Image 2025-05-19 at 23.12.33_174c4461.jpg'
// import logo2 from '../assets/WhatsApp Image 2025-05-19 at 23.26.16_d411be48.jpg'
// import { Typewriter } from 'react-simple-typewriter'
// import { useEffect, useRef, useState } from "react";
// const logos = [logo1, logo2];
// const Banner = () => {
//   const [index, setIndex] = useState(0);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     const next = (index + 1) % logos.length;
//     timeoutRef.current = setTimeout(() => setIndex(next), 2000); // change every 3s

//     return () => clearTimeout(timeoutRef.current);
//   }, [index]);

//     return (
//         <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
//       <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
//         <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
//           <div className="max-w-xl mb-6">
//             <h2 className='max-w-lg mb-6 text-[3rem] font-bold'>
//               The Best & <Typewriter
//               cursor
//               loop={true}
//                typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1000}
//                words={['Faster Roommate Finder ']}/> .
//             </h2>
//             <p className="text-base text-gray-700 md:text-lg">
//               Looking for a roommate,renting out a room, or teaming up to find a new place?<span>FindMyRoom</span>helps you find compatible roommate easily with a safe,hassle-free experience
//             </p>
//           </div>
//           <div className="flex flex-col items-center md:flex-row">
            
//           </div>
//         </div>
//       </div>
//       <div className="inset-y-0 pt-10 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
//         {/*  c*/}
//   <div className="inset-y-0 pt-10 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
//         <div className="relative h-96 w-full overflow-hidden rounded-lg">
//           {logos.map((logo, i) => (
//             <img
//               key={i}
//               src={logo}
//               alt={Slide ${i}}
//               className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
//                 index === i ? 'opacity-100' : 'opacity-0'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//         {/*  */}
//       </div>
//     </div>
//     );
// };

// export default Banner;

import React, { useEffect, useRef, useState } from 'react';
import logo1 from '../assets/WhatsApp Image 2025-05-19 at 23.12.33_174c4461.jpg';
import logo2 from '../assets/WhatsApp Image 2025-05-19 at 23.26.16_d411be48.jpg';
import { Typewriter } from 'react-simple-typewriter';

const logos = [logo1, logo2];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000); // 3 seconds

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className='max-w-lg mb-6 text-[3rem] font-bold'>
              The Best &{' '}
              <Typewriter
                cursor
                loop={true}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                words={['Faster Roommate Finder']}
              />
              
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Looking for a roommate, renting out a room, or teaming up to find a new place? <span className="font-semibold">FindMyRoom</span> helps you find compatible roommates easily with a safe, hassle-free experience.
            </p>
          </div>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="inset-y-0 pt-10 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <div className="relative h-96 w-full overflow-hidden rounded-lg">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Slide ${i}`}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
                index === i ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;