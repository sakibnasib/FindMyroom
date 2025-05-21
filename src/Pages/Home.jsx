import React from 'react';
import Text from '../Component/Text';
import Banner from '../Component/Banner';
import FeatturedSction from '../Component/FeatturedSction';
import HowToWork from '../Component/HowToWork';
import Review from '../Component/Review';
import Freaquently from '../Component/Freaquently';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Text></Text>
            <FeatturedSction></FeatturedSction>
            <HowToWork></HowToWork>
            <Review></Review>
            <Freaquently></Freaquently>
        </div>
    );
};

export default Home;