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


// Opening Hours
// Mon – Tues08:00 AM – 05:00PM
// Wedne – Thur09:00 AM – 06:00PM
// Fri – Sat10:00 AM – 05:00PM
// sundayEmergency Only
// PersonalMon – 10:00 AM