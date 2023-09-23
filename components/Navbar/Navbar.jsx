import Link from 'next/link'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';

import styles from './Navbar.module.css';
import image from "../../public/images/icon-only-black.jpg"
import { useUser } from '@/context/user'


function Navbar() {
    const { isAuthenticated, logout } = useUser()
    const [click, setClick] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const [windowWidth, setWindowWidth] = useState(0);

    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
        <nav className={windowWidth < 1000 && scrollY > 0 ? styles.navbarMobile : styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link href='/' className={styles.navbarLogo} onClick={closeMobileMenu}>
                    <Image className={styles.homeLogo} src={image} alt="KOW logo"/>
                    KOW
                </Link>
                <div className={styles.menuIcon} onClick={handleClick}>
                    {click ? <CloseIcon /> : <MenuIcon/>}
                </div>
                <div>
                    <div className={click && scrollY > 0 ? styles.menuActiveBackgroundTop100 : click ? styles.menuActiveBackgroundTop132 : 0} 
                        onClick={closeMobileMenu}/>
                    <ul className={click && scrollY > 0 ? styles.navMenuActiveTop100 : click ? styles.navMenuActiveTop132 : styles.navMenu}>
                        <li className={styles.mobileItem}>
                            <Link href='/' className={styles.navLinks} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href='/how-it-works' className={styles.navLinks} onClick={closeMobileMenu}>
                                How It Works
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href='/find-medication' className={styles.navLinks} onClick={closeMobileMenu}>
                                Find Medication
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href='/contact-us' className={styles.navLinks} onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                        {isAuthenticated ? 
                            <li className={styles.navItem}>
                                <Link href='/dashboard' className={styles.navLinks} onClick={closeMobileMenu}>
                                    Dashboard
                                </Link>
                            </li>
                            : null}
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;