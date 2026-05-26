import React from 'react';
import HeroSlider from '../Home Components/Heroslider';
import Banner from '../Home Components/Banner';
import Newsletter from '../Home Components/Newsletter';
import WhyChoose from '../Home Components/WhyChoose';

const Home = () => {
    return (
        <div>
           {/* <Banner></Banner> */}
           <HeroSlider></HeroSlider>
           <Newsletter></Newsletter>
           <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;