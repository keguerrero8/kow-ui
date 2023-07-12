import React, {useEffect} from 'react';

import './Privacy.css'
import PrivacyText from './PrivacyText';

function Privacy(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className='document-container'>
            <PrivacyText />
        </div>
    );
}

export default Privacy;