import React from 'react';
import FAQ from '../FAQ/FAQ';
import { AboutDoctor } from '../About/About';
import { Hero } from '../Shared/Banner';
import { Services } from '../Services/Services';
import { Appointment } from '../Appointment/Appointment';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <AboutDoctor></AboutDoctor>
            <Appointment></Appointment>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;