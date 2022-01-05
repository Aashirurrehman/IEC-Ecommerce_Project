import React from 'react'
import Announcements from '../components/Announcements';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import News from '../components/News';
import Products from '../components/Products';
import Slider from '../components/Slider';

const HomePage = () => {
    return (
        <div>
            <Announcements/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <News/>
            <Footer/>

        </div>
    )
}

export default HomePage;

