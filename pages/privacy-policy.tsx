import { useEffect } from 'react';
import { NextPage } from 'next';

import styles from '@/components/Documents/PrivacyPolicy/Privacy.module.css'
import PrivacyText from '@/components/Documents/PrivacyPolicy/PrivacyText.jsx';

const Privacy: NextPage= () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className={styles.documentContainer}>
            <PrivacyText />
        </div>
    );
}

export default Privacy;