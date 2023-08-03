import Image from 'next/image'

import styles from './HowSection.module.css'
import stylesButton from '../Button/Button.module.css'

import Button from '@/components/Button/Button'

import image1 from "../../public/images/how-img-one-v3.jpg"
import image2 from "../../public/images/how-img-two-v3.jpg"
import image3 from "../../public/images/how-img-three-v3.jpg"

/**import tutorial from "../../public/videos/tutorial.mp4"**/

function HowSection() {
    return (
        <div className={styles.howContainer}>
            <h1>Need Your Prescription Today?</h1>
            <div className={styles.howBody}>
                <div className={styles.howStep}>
                    <div className={styles.imgWrap}>
                       <Image src={image1} alt="computer monitor with the mouse cursor clicking a button in the middle of the screen"/>
                    </div>
                    <h3 className={styles.stepText}>Select the medication you're looking for.</h3>
                    <h3 className={styles.stepSubtext}>Specify the strength, quantity, and what insurance you have.</h3>
                </div>
                <div className={styles.howStep}>
                    <div className={styles.imgWrap}>
                        <Image src={image2} alt="cell phone laying flat, emphasizing a healthcare symbol notification emerging from the phone screen"/>
                    </div>
                    <h3 className={styles.stepText}>Our network of pharmacies is alerted right away.</h3>
                    <h3 className={styles.stepSubtext}>They will check their inventory to confirm if they have it.</h3>
                </div>
                <div className={styles.howStep}>
                    <div className={styles.imgWrap}>
                        <Image src={image3} alt="cell phone positioned upright, depicting a hand emerging from the screen holding a medical shopping bag as a representation of an order transaction"/>
                    </div>
                    <h3 className={styles.stepText}>You're notified of which pharmacy has the medication.</h3>
                    <h3 className={styles.stepSubtext}>Contact the pharmacy to pick up your prescription or schedule a delivery.</h3>
                </div>
            </div>
            <div className={styles.howButtons}>
                <Button 
                buttonSize={stylesButton.btnLarge}
                buttonStyle={stylesButton.btnSecondary}
                buttonPage={stylesButton.btnHow}
                path='/contact-us'>
                    Need Help?
                </Button>
                <Button 
                buttonSize={stylesButton.btnLarge}
                buttonPage={stylesButton.btnHow}
                path='/find-medication'>
                    Find Medication
                </Button>
            </div>
            <div className={styles.videoContainer}>
                <div className={styles.videoTitle}>
                    <h2>Here's a Tutorial:</h2>
                </div>

            </div>
        </div>
    );
}

export default HowSection;