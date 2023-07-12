import React, {useEffect} from 'react';

import PharmacySubscriptionText from './PharmacySubscriptionText';

import './PharmacySubscription.css';

function PharmacySubscription(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className='document-container'>
            <PharmacySubscriptionText />
        </div>
    );
}

export default PharmacySubscription;