import styles from './Banner.module.css';
import Link from 'next/link'

export default function Banner() {

    const announcementPrimary = "Website Downtime scheduled for 5/30/23 11:00 pm - 7:00 am";
    const announcementSecondary = "BETA pharmacies now serving patients in select parts of Queens and Long Island, NY!";
    const announcementTertiary = "Shortage Announcement: 5/19 Isoniazid Injection, 5/30 Budesonide Inhalation Suspension, 5/31 Protamine Injection, 6/14 Enalaprilat Injection";
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