import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Faq from '../Faq/Faq';
import Features from '../Features/Features';
import Header from '../Header/Header';
import ReviewHome from '../ReviewHome/ReviewHome';
import Service from '../Services/Service';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Features></Features>
            <About></About>
            <Service></Service>
            <Faq></Faq>
            <ReviewHome></ReviewHome>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;