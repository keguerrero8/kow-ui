import Image from 'next/image'

import styles from './HeroSuggestions.module.css'
import stylesButton from '../Button/Button.module.css'

import Button from '@/components/Button/Button.jsx'

import image1 from "../../public/images/cold2.jpg"
import image2 from "../../public/images/av2.jpg"
import image3 from "../../public/images/bc3.jpg"
import image4 from "../../public/images/inh2.jpg"
import image5 from "../../public/images/gluc3.jpg"
import image6 from "../../public/images/vacc3.jpg"

export default function HeroSuggestions() {
    return (
            <div className={styles.sectionTwo}>
                <h2>Some medication can&apos;t wait...</h2>                
                <div className={styles.medGroups}>
                    <div className={styles.cardSection}>
                        <div className={styles.medCard}>
                            <div className={styles.cardImg}>
                                <Image src={image1} alt="man wrapped in blanket blowing his nose into a tissue"/>
                            </div>
                            <h3>Antibiotics</h3>
                            <Button 
                            className={stylesButton.btn} 
                            buttonStyle={stylesButton.btnTertiary}
                            buttonSize={stylesButton.btnSmall} 
                            path='/find-medication'>
                                Find Nearby
                            </Button>
                        </div>
                        <div className={styles.medCard}>
                            <div className={styles.cardImg}>
                                <Image src={image2} alt="woman with a cold experiencing chills and sitting with a thermometer in her mouth"/>
                            </div>
                            <h3>Antivirals</h3>
                            <Button 
                            className={stylesButton.btn} 
                            buttonStyle={stylesButton.btnTertiary}
                            buttonSize={stylesButton.btnSmall}  
                            path='/find-medication'>
                                Find Nearby
                            </Button>
                        </div>
                        <div className={styles.medCard}>
                            <div className={styles.cardImg}>
                                <Image src={image3} alt="woman remembers to take her scheduled birth control tablet out of her medication package"/>
                            </div>                        
                            <h3>Birth Control</h3>
                            <Button 
                            className={stylesButton.btn} 
                            buttonStyle={stylesButton.btnTertiary}
                            buttonSize={stylesButton.btnSmall}  
                            path='/find-medication'>
                                Find Nearby
                            </Button>
                        </div>
                        <div className={styles.medCard}>
                            <div className={styles.cardImg}>
                                <Image src={image4} alt="woman grasping her throat while inhaling a puff from her inhaler device"/>
                            </div>
                            <h3>Inhalers</h3>
                            <Button 
                             className={stylesButton.btn} 
                             buttonStyle={stylesButton.btnTertiary}
                             buttonSize={stylesButton.btnSmall}  
                            path='/find-medication'>
                                Find Nearby
                            </Button>
                        </div>
                        <div className={styles.medCard}>
                            <div className={styles.cardImg}>
                                <Image src={image5} alt="man pulls up his sleeve to self-inject insulin into his arm"/>
                            </div>                        
                            <h3>Insulin</h3>
                            <Button 
                             className={stylesButton.btn} 
                             buttonStyle={stylesButton.btnTertiary}
                             buttonSize={stylesButton.btnSmall}  
                            path='/find-medication'>
                                Find Nearby
                            </Button>
                        </div>
                        <div className={styles.medCard}>
                            <div className={styles.cardImg}>
                                <Image src={image6} alt="man in a facemask flexes his arm to show the bandaid where he received a vaccine injection"/>
                            </div>                        
                            <h3>Vaccines</h3>
                            <Button 
                             className={stylesButton.btn} 
                             buttonStyle={stylesButton.btnTertiary}
                             buttonSize={stylesButton.btnSmall}  
                            path='/find-medication'>
                                Find Nearby
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
    );
}