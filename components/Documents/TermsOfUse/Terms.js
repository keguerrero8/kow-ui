import React, {useEffect} from 'react';

import './Terms.css'
import TermsText from './TermsText';

function Terms(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='document-container'>
            <TermsText />
        </div>
    );
}

export default Terms;