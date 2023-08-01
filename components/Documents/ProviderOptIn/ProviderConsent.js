import React, { useEffect } from 'react';

import './ProviderConsent.css'
import ProviderOptInText from './ProviderOptInText';

function ProviderConsent() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='document-container'>
            <ProviderOptInText />
        </div>
    );
}

export default ProviderConsent;