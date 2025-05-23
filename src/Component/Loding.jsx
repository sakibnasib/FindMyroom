import React from 'react';
import { ClockLoader } from 'react-spinners';
const Loding = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
      {/* <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div> */}
      <ClockLoader color="violet" size={70} />
      
    </div>
    );
};

export default Loding;