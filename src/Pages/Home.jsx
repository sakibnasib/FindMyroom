import React from 'react';
import FeatturedSction from '../Component/Home/FeatturedSction';
import FeaturesSection from '../Component/Home/FeaturesSection';
import Banner from '../Component/Home/Banner';
import HowItWorks from '../Component/Home/HowToWork';
import Testimonials from '../Component/Home/Testimonials';
import Stat from '../Component/Home/Stat';
import Frequently from '../Component/Home/Freaquently';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatturedSction></FeatturedSction>
            <FeaturesSection/>
           <HowItWorks/>
            <Testimonials/>
           <Stat/>
            <Frequently/>
        </div>
    );
};

export default Home;