// import React from 'react';

import styles from './HeroSection.module.css'
// import '../Button/Button.css';

// import HeroSuggestions from '../HeroSuggestions/HeroSuggestions';
// import FrequentRequests from '../FrequentRequests/FrequentRequests';
// import HomePageCards from '../Blog/HomePageCards';
// import { Button } from '../Button/Button';

// import kindlyobligewith_title_text from '../../images/kindlyobligewith_text_image.png';

// import welcome from "../../videos/welcome.mp4"

function HeroSection() {
    return (
        // <div className='hero-container'>
        <div className={styles.heroContainer}>
            {/* <img className='hero-title' alt='kindle oblige with' src={kindlyobligewith_title_text}/> */}
            <h1>Find and Fill your prescription TODAY.</h1>
            <h2>Don't risk delaying your medication.</h2>
            <h3>If you need your medication today, we'll help you find a pharmacy that has it.</h3>
            {/* <div className='hero-btns'>
                <Button 
                className='btn' 
                buttonStyle='btn--secondary' 
                buttonSize='btn--large' 
                buttonPage='btn--home'
                path='/how-it-works'>
                    Learn More
                </Button>
                <Button 
                className='btn' 
                buttonStyle='btn--outline' 
                buttonSize='btn--large' 
                buttonPage='btn--home'
                path='/find-medication'>
                    Find Medication
                </Button>
            </div> */}
            {/* <div className="video-container">
                <video controls style={{ maxWidth:'100%' }}>
                    <source src={welcome} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>                 */}
            {/* <HeroSuggestions/>
            <FrequentRequests/>
            <HomePageCards/> */}
        </div>
    );
}

export default HeroSection;