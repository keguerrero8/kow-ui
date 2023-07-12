import React, {useEffect} from 'react';

import './PharmacyConsent.css'
import PharmacyConsentText from './PharmacyConsentText';

function PharmacyConsent(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='document-container'>
            <PharmacyConsentText />
        </div>
    );
}

export default PharmacyConsent;