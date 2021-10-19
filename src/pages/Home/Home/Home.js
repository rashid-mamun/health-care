import React from 'react';
import Banner from '../Banner/Banner';
import Departments from '../Departments/Departments';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Departments></Departments>
            <Doctors></Doctors>
            <Services></Services>
        </div>
    );
};

export default Home;