import React from 'react';
import Text from '../Component/Text';
import Banner from '../Component/Banner';
import FeatturedSction from '../Component/FeatturedSction';
import HowToWork from '../Component/HowToWork';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Text></Text>
            <FeatturedSction></FeatturedSction>
            <HowToWork></HowToWork>
        </div>
    );
};

export default Home;