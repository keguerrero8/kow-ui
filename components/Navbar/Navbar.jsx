import Link from 'next/link'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';

import Button from '../Button/Button';
import styles from './Navbar.module.css';
import image from "../../public/images/icon-only-black.jpg"
import { useUser } from '@/context/user'


function Navbar() {
    const { isAuthenticated, logout } = useUser()
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const isMobile = useMediaQuery('(max-width: 1160px)');
    
    const showButton = () => {
        if(window.innerWidth <= 1160) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    function handleLogOut () {
        logout(closeMobileMenu)
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('resize', showButton);
            showButton()   
         }
    }, [])

    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link href='/' className={styles.navbarLogo} onClick={closeMobileMenu}>
                    <Image className={styles.homeLogo} src={image} alt="KOW logo"/>
                    KOW
                </Link>
                <div className={styles.menuIcon} onClick={handleClick}>
                    {click? <CloseIcon /> : <MenuIcon/>}
                </div>
                <div>
                    <div className={click ? styles.menuActiveBackground : 0} onClick={closeMobileMenu}/>
                    <ul className={click ? styles.navMenuActive : styles.navMenu}>
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
                            :
                            null}
                        {/* {!user && !button? <li className={styles.navItem}>
                            <Link to='/login' className={styles.navLinks} onClick={closeMobileMenu}>
                                Sign In
                                </Link>
                            </li>: null} */}
                        {/* {button && !user ? <Button path='/login'>Sign In
                            </Button> : null} */}
                        {isAuthenticated && !button && <li className={styles.navItem}>
                            <Link href='/' className={styles.navLinks} onClick={handleLogOut}>
                                Sign Out
                            </Link>
                        </li>}
                    </ul>
                    {isAuthenticated && button? <Button path='/' onClick={handleLogOut}>Sign Out
                        </Button> : null}
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;