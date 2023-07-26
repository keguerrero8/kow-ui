import { useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from '@/components/Blog/BlogPost.module.css'

import UrgentCareArticle from '@/components/Blog/20230506UrgentCareCost';
import DrugShortagesArticle from '@/components/Blog/20230513DrugShortages';
import SpecialtyDrugsArticle from '@/components/Blog/20230520SpecialtyDrugs';
import AdherenceArticle from '@/components/Blog/20230527Adherence';
import OzempicArticle from '@/components/Blog/20230603Ozempic';
import AqiArticle from '@/components/Blog/20230610AQI';
import RsvArticle from '@/components/Blog/20230617RSV';
import NurseStrikeArticle from '@/components/Blog/20230624NurseStrike';
import EndCovidArticle from '@/components/Blog/20230701EndCovid';
import HeatWaveArticle from '@/components/Blog/20230708HeatWave';
import OtcBirthControlArticle from '@/components/Blog/20230715OtcBirthControl';
import LeqembiArticle from '@/components/Blog/20230722Leqembi';


const ViewPost = () => {
    const router = useRouter();
    const { postId } = router.query;

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className={styles.documentContainer}>
            {postId === '20230520' && <SpecialtyDrugsArticle />}
            {postId === '20230513' && <DrugShortagesArticle />}
            {postId === '20230506' && <UrgentCareArticle />}
            {postId === '20230527' && <AdherenceArticle />}
            {postId === '20230603' && <OzempicArticle />}
            {postId === '20230610' && <AqiArticle />}
            {postId === '20230617' && <RsvArticle />}
            {postId === '20230624' && <NurseStrikeArticle />}
            {postId === '20230701' && <EndCovidArticle />}
            {postId === '20230708' && <HeatWaveArticle />}
            {postId === '20230715' && <OtcBirthControlArticle />}
            {postId === '20230722' && <LeqembiArticle />}
        </div>
    );
}

export default ViewPost;