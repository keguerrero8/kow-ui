import styles from './HeroSection.module.css'
import stylesButton from '../Button/Button.module.css'

import HeroSuggestions from '@/components/HeroSuggestions/HeroSuggestions';
import FrequentRequests from '@/components/FrequentRequests/FrequentRequests';
import HomePageCards from '@/components/Blog/HomePageCards.jsx';
import Button from '@/components/Button/Button'
import VideoPlayer from '../VideoPlayer/VideoPlayer';

import welcome from "../../public/videos/welcome.mp4"

const HeroSection: React.FC = () => {
    return ( 
        <div className={styles.heroContainer}>
            <div className={styles.cta}>
                <h1>Find your prescription right away.</h1>
                <h3>Don&apos;t stress when you&apos;re not feeling your best. Have it delivered to your door!</h3>
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
                        width='100%'
                    />
                </div>
            </div>
            <HeroSuggestions/>
            {/* <FrequentRequests/> */}
            <HomePageCards/>
        </div>
    );
}

export default HeroSection