import Image from 'next/image'

import styles from './HeroSection.module.css'
import stylesButton from '../Button/Button.module.css'

import HeroSuggestions from '@/components/HeroSuggestions/HeroSuggestions.jsx';
import FrequentRequests from '@/components/FrequentRequests/FrequentRequests.jsx';
import HomePageCards from '@/components/Blog/HomePageCards.jsx';
import Button from '@/components/Button/Button.jsx'
import FillableSearchDropdown from '../SearchBar/FillableSearchDropdown';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

import welcome from "../../public/videos/welcome.mp4"

export default function HeroSection() {
    return ( 
        <div className={styles.heroContainer}>
            <div className={styles.cta}>
                <h1>Find and fill your prescription today.</h1>
                <h3>Don't delay taking your medication. If it's available at one of our pharmacies, you can receive it today.</h3>
                <FillableSearchDropdown/>
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
                <div className={styles.videoContainer}>
                    <VideoPlayer 
                        src={welcome}
                        alt="Welcome Video Player" 
                        width='100%'
                    />
                </div>
            </div>
            <HeroSuggestions/>
            <FrequentRequests/>
            <HomePageCards/>
        </div>
    );
}