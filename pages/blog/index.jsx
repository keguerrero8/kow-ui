import { useEffect } from 'react';

import styles from '@/components/Blog/BlogGrid.module.css'

import BlogCard from '@/components/Blog/BlogCard';

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
import SunVitaminArticle from '@/components/Blog/20230729SunVitamin';
import MentalAppsArticle from '@/components/Blog/20230805MentalAppsArticle';
import FluVaccineArticle from '@/components/Blog/20230819FluVaccineArticle';

export default function BlogGrid() {

    const blogArticles = [
    {
        title: SpecialtyDrugsArticle.title,
        subtitle: SpecialtyDrugsArticle.subtitle,
        image: SpecialtyDrugsArticle.image,
        postId: SpecialtyDrugsArticle.postId,
    },
    {
        title: DrugShortagesArticle.title,
        subtitle: DrugShortagesArticle.subtitle,
        image: DrugShortagesArticle.image,
        postId: DrugShortagesArticle.postId,
    },
    {
        title: UrgentCareArticle.title,
        subtitle: UrgentCareArticle.subtitle,
        image: UrgentCareArticle.image,
        postId: UrgentCareArticle.postId,
    },
    {
        title: AdherenceArticle.title,
        subtitle: AdherenceArticle.subtitle,
        image: AdherenceArticle.image,
        postId: AdherenceArticle.postId,
    },
    {
        title: OzempicArticle.title,
        subtitle: OzempicArticle.subtitle,
        image: OzempicArticle.image,
        postId: OzempicArticle.postId,
    },
    {
        title: AqiArticle.title,
        subtitle: AqiArticle.subtitle,
        image: AqiArticle.image,
        postId: AqiArticle.postId,
    },
    {
        title: RsvArticle.title,
        subtitle: RsvArticle.subtitle,
        image: RsvArticle.image,
        postId: RsvArticle.postId,
    },
    {
        title: NurseStrikeArticle.title,
        subtitle: NurseStrikeArticle.subtitle,
        image: NurseStrikeArticle.image,
        postId: NurseStrikeArticle.postId,
    },
    {
        title: EndCovidArticle.title,
        subtitle: EndCovidArticle.subtitle,
        image: EndCovidArticle.image,
        postId: EndCovidArticle.postId,
    },
    {
        title: HeatWaveArticle.title,
        subtitle: HeatWaveArticle.subtitle,
        image: HeatWaveArticle.image,
        postId: HeatWaveArticle.postId,
    },
    {
        title: OtcBirthControlArticle.title,
        subtitle: OtcBirthControlArticle.subtitle,
        image: OtcBirthControlArticle.image,
        postId: OtcBirthControlArticle.postId,
    },
    {
        title: LeqembiArticle.title,
        subtitle: LeqembiArticle.subtitle,
        image: LeqembiArticle.image,
        postId: LeqembiArticle.postId,
    },
    {
        title: SunVitaminArticle.title,
        subtitle: SunVitaminArticle.subtitle,
        image: SunVitaminArticle.image,
        postId: SunVitaminArticle.postId,
    },
    {
        title: MentalAppsArticle.title,
        subtitle: MentalAppsArticle.subtitle,
        image: MentalAppsArticle.image,
        postId: MentalAppsArticle.postId,
    },
    {
        title: FluVaccineArticle.title,
        subtitle: FluVaccineArticle.subtitle,
        image: FluVaccineArticle.image,
        postId: FluVaccineArticle.postId,
    },
  ];

  const sortedArticles = blogArticles.sort((a, b) => b.postId - a.postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.blogContainer}>
        <h2>Blog Articles</h2>
        <div className={styles.blogGrid}>
        {sortedArticles.map((article, index) => (
            <BlogCard 
                key={index} 
                title={article.title}
                subtitle={article.subtitle}
                image={article.image}
                postId={article.postId}
            />
        ))}
        </div>
    </div>

  );
};

