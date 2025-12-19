import React from 'react';
import HeroSlider from '../Home Components/Heroslider';
import Banner from '../Home Components/Banner';
import Newsletter from '../Home Components/Newsletter';

const Home = () => {
    return (
        <div>
           {/* <Banner></Banner> */}
           <HeroSlider></HeroSlider>
           <Newsletter></Newsletter>
        </div>
    );
};

export default Home;