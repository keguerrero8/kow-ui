import styles from './Banner.module.css';
import Link from 'next/link'

export default function Banner() {

    const announcementPrimary = "Website Downtime scheduled for 5/30/23 11:00 pm - 7:00 am";
    const announcementSecondary = "BETA pharmacies now serving patients in select parts of Queens and Long Island, NY!";
    const announcementTertiary = "Shortage Announcement: 7/19 Oxycoodne-Acetaminophen Tablets, 7/20 Liraglutide Injection, 7/31 Methylphenidate IR Tablets, 8/2 Decitabine Injection, 8/7 Alfuzosin Tablets, 8/18 Theophylline ER Capsules and Tablets, 8/18 Nystatin Powder, 8/18 Atropine Eye Ointment";
    const announcementLink = "For a list of current Drug Shortages, click";



    return (
        <div className={styles.banner}>
            <div className={styles.textContainer}>
                {/*
                    <h3>{announcementPrimary}</h3>
                */}
                <h3>{announcementSecondary}</h3>
                <h3>{announcementTertiary}</h3>
                {/*
                <h3>{announcementLink}
                    <Link to='/drug-shortages' className='banner-link'>here</Link>.
                </h3>
                */}
            </div>
        </div>
    );
}