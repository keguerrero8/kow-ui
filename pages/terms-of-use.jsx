import { useEffect } from 'react';

import styles from '@/components/Documents/TermsOfUse/Terms.module.css'

import TermsText from '@/components/Documents/TermsOfUse/TermsText.jsx';

function Terms(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className={styles.documentContainer}>
            <TermsText />
        </div>
    );
}

export default Terms;