import Link from 'next/link'
import styles from './Footer.module.css';

import { useUser } from '@/context/user';

export default function Footer() {
    const { isAuthenticated, logout } = useUser()
    return (
        <div className={styles.footerContainer}>
            <section className={styles.footerLinks}>
                <div className={styles.footerTerms}>
                    <div className={styles.helpLink}>
                        <p>Have Questions?</p>
                        <p>Need Help?</p>
                        <Link href='/contact-us' className={styles.contactUs}>Contact Us</Link>
                    </div>
                    <div className={styles.linkSection}>
                        <div className={styles.linkColumn}>
                            <p className={styles.footerTermsText}>
                                <Link className={styles.navLink} href="/blog">Blog</Link>
                            </p>
                            <p className={styles.footerTermsText}>
                                <Link className={styles.navLink} href="/how-it-works">How It Works</Link>
                            </p>
                            <p className={styles.footerTermsText}>
                                <Link className={styles.navLink} href="/find-medication">Find Medication</Link>
                            </p>
                            <p className={styles.footerTermsText}>
                                <Link className={styles.navLink} href="/contact-us">Contact Us</Link>
                            </p>
                        </div>
                        
                        <div className={styles.linkColumn}>
                            <p className={styles.footerTermsText}>
                                <Link className={styles.navLink} href="/terms-of-use">Terms of Use</Link>
                            </p>
                            <p className={styles.footerTermsText}>
                                <Link className={styles.navLink} href="/privacy-policy">Privacy Policy</Link>
                            </p>
                            {!isAuthenticated? (
                                <p className={styles.footerTermsText}>
                                    <Link className={styles.navLink} href="/login">Admin Login</Link>
                                </p>
                            ) : null}
                            {isAuthenticated? (
                                <p className={styles.footerTermsText}>
                                    <Link className={styles.navLink} href="/" onClick={logout}>Log Out</Link>
                                </p>
                            ) : null}
                            {/*<p className={styles.footerTermsText}>
                                <Link className={styles.navLink} to="/">Manage Cookie Preferences</Link>
                            </p>*/}
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.socialMedia}>
                <small className={styles.websiteRights}>KOW (C) 2023</small>
            </section>
        </div>
    );
}