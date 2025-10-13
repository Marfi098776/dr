import React from 'react';
import FAQ from '../FAQ/FAQ';
import { AboutDoctor } from '../About/About';
import { Hero } from '../Shared/Banner';
import { Services } from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <AboutDoctor></AboutDoctor>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;