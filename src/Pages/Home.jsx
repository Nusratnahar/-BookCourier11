import React from 'react';
import HeroSlider from '../Home Components/Heroslider';
import Banner from '../Home Components/Banner';
import Newsletter from '../Home Components/Newsletter';
import WhyChoose from '../Home Components/WhyChoose';
import CoverageSection from '../Home Components/CoverageSection';
import StatsSection from '../Home Components/StatsSection';

const Home = () => {
    return (
        <div>
           {/* <Banner></Banner> */}
           <HeroSlider></HeroSlider>
           <Newsletter></Newsletter>
           <WhyChoose></WhyChoose>
           <CoverageSection></CoverageSection>
           <StatsSection></StatsSection>
        </div>
    );
};

export default Home;