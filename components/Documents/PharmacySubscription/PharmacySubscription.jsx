import {useEffect} from 'react';

import PharmacySubscriptionText from './PharmacySubscriptionText.jsx';
import styles from './PharmacySubscription.module.css'

function PharmacySubscription() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className={styles.documentContainer}>
            <PharmacySubscriptionText />
        </div>
    );
}

export default PharmacySubscription;