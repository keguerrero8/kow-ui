import Image from 'next/image'

import styles from './HeroSection.module.css'
import stylesButton from '../Button/Button.module.css'

import HeroSuggestions from '@/components/HeroSuggestions/HeroSuggestions.jsx';
import FrequentRequests from '@/components/FrequentRequests/FrequentRequests.jsx';
import HomePageCards from '@/components/Blog/HomePageCards.jsx';
import Button from '@/components/Button/Button.jsx'

import kindlyobligewith_title_text from '../../public/images/kindlyobligewith_text_image.jpg';

// import welcome from "../../public/videos/welcome.mp4"

export default function HeroSection() {
    return ( 
        <div className={styles.heroContainer}>
            <Image alt='kindle oblige with' src={kindlyobligewith_title_text} className={styles.heroTitle}/>
            <h1>Find and Fill your prescription TODAY.</h1>
            <h2>Don't risk delaying your medication.</h2>
            <h3>If you need your medication today, we'll help you find a pharmacy that has it.</h3>
            <div className={styles.heroBtns}>
                <Button 
                className={stylesButton.btn} 
                buttonStyle={stylesButton.btnSecondary}
                buttonSize={stylesButton.btnLarge} 
                buttonPage={stylesButton.btnHome} 
                path='/how-it-works'>
                    Learn More
                </Button>
                <Button 
                className={stylesButton.btn}
                buttonStyle={stylesButton.btnPrimary} 
                buttonSize={stylesButton.btnLarge} 
                buttonPage={stylesButton.btnHome} 
                path='/find-medication'>
                    Find Medication
                </Button>
            </div>
            {/* <div className={styles.videoContainer}>
                <video controls style={{ maxWidth:'100%' }}>
                    <source src={welcome} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>                 */}
            <HeroSuggestions/>
            <FrequentRequests/>
            <HomePageCards/>
        </div>
    );
}