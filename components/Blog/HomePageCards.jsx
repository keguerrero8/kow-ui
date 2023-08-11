import Link from 'next/link'

import styles from './HomePageCards.module.css'

import BlogCard from './BlogCard.jsx';

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
import SunVitaminArticle from './20230729SunVitamin';

export default function HomePage() {
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
  ];

  const sortedArticles = blogArticles.sort((a, b) => b.postId - a.postId);

  const recentArticles = sortedArticles.slice(0, 3);

  return (
    <div className={styles.blogSection}>
      <h2>Latest Insights</h2>
      <div className={styles.heroCardContainer}>
        {recentArticles.map((article, index) => (
            <BlogCard 
            key={index} 
            title={article.title}
            subtitle={article.subtitle}
            image={article.image}
            postId={article.postId}
        />
        ))}
      </div>
      <h3>{<Link className={styles.sectionLink} href="/blog">View All</Link>}</h3>
    </div>
  );
};

