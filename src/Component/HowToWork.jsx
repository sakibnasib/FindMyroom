import React from 'react';
import photo1 from '../assets/hiw-1-47e28427d94049344c07f9c6980bf1f6ad45dfb0f82e7dafad2cd5a39641dff5.png';
import photo2 from '../assets/hiw-2-e5804a6ba2fbe5bb7c22ff10488da6faf76e6c7f7b554b38596f326f0d24093e.png';
import photo3 from '../assets/hiw-3-15536a50f0c8f20c14b66eaa5069192428c9df4420bf8411d8e5a295917d63e7.png'
const HowToWork = () => {
    return (
        <div className='mb-10'>
            <h2 className='text-[4rem] font-bold text-center'>How it works</h2>
   <div className="w-9/12 mx-auto space-y-4">
{/* 1 */}
<div className="flex justify-between items-center gap-5">
     <p>Search through thousands of potential roommates and rooms for rent. To make your search more effective, our proprietary algorithm will match your circumstances, lifestyle and preferences with other roommate prospects and display your personalized best prospects on top. You can further refine your roommate search using our filters to tailor it to your specific requirements.</p>
    <img src={photo1} alt="" />
   
</div>
{/* 2 */}
<div className="flex justify-between items-center gap-5">
    <img src={photo2} alt="" />
    <p>Express interest by simply clicking “Like” on roommate profiles that seem as a good fit. They will be then notified and if it’s mutual, they will become a “Match” who you can chat with freely. You can also skip waiting for a "Match" and send an "Instant Message" introducing yourself to speed things up. By setting up a roommate profile you can also receive "Likes" and messages from potential roommates.</p>
</div>
{/* 3 */}
<div className="flex justify-between items-center gap-5">
    <p>Communicate directly and safely with your potential roommate “Matches” within our roommate finder. All your roommate prospects are in one central place, and you don’t need to share your personal contact information until you are ready.</p>
    <img src={photo3} alt="" />
    
</div>


   </div>

        </div>
    );
};

export default HowToWork;