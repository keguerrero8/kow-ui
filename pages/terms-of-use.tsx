import { useEffect } from 'react';
import { NextPage } from 'next';

import styles from '@/components/Documents/TermsOfUse/Terms.module.css'
import TermsText from '@/components/Documents/TermsOfUse/TermsText.jsx';

const Terms: NextPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className={styles.documentContainer}>
            <TermsText />
        </div>
    );
}

export default Terms