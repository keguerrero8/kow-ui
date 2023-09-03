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
    const [scrollY, setScrollY] = useState(0);

    const [windowWidth, setWindowWidth] = useState(0);

    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const isMobile = useMediaQuery('(max-width: 1160px)');
    
    const showButton = () => {
        if(window.innerWidth <= 1160) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    function handleLogOut () {
        logout(closeMobileMenu)
    };

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('resize', showButton);
            showButton()   
         }
    }, []);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
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