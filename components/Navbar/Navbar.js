import Link from 'next/link'
import Image from 'next/image'
// import Cookies from "js-cookie"
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import { useMediaQuery } from '@mui/material';

import { useEffect, useState } from 'react';

import Button from '../Button/Button';
import styles from './Navbar.module.css';
import image from "../../public/images/icon-only-black.jpg"


function Navbar({ user, setUser }) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const isMobile = useMediaQuery('(max-width: 1160px)');
    const isMobile = false

    const showButton = () => {
        if(window.innerWidth <= 1160) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    function handleLogOut () {
        console.log("log out to be implemented!")
        // fetch("/auth-sessions/logout", {
        //   credentials: "include",
        //   method: "POST",
        //   headers: {
        //       "Accept": "application/json",
        //       "Content-Type": "application/json",
        //       "X-CSRFToken": Cookies.get("csrftoken")
        //   },
        // })
        // .then(r => {
        //   if (r.ok) {
        //     closeMobileMenu()
        //     setUser(null)
        //   }
        // })
    }

    // useEffect(() => {showButton();}, []);
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('resize', showButton);
            showButton()   
         }
    }, [])

    // window.addEventListener('resize', showButton);

    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link href='/' className={styles.navbarLogo} onClick={closeMobileMenu}>
                    <Image className={styles.homeLogo} src={image} alt="KOW logo"/>
                    KOW
                </Link>
                {/* <div className={styles.menuIcon} onClick={handleClick}>
                    {click? <CloseIcon /> : <MenuIcon/>}
                </div> */}
                <ul className={click ? styles.navMenuActive : styles.navMenu}>
                    {isMobile && (
                        <li className={styles.mobileItem}>
                            <Link href='/' className={styles.navLinks} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                    )}
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
                    {
                        user ? 
                            <li className={styles.navItem}>
                                <Link href='/dashboard' className={styles.navLinks} onClick={closeMobileMenu}>
                                    Dashboard
                                </Link>
                            </li>
                            :
                            null
                    }
                {/* {!user && !button? <li className={styles.navItem}>
                        <Link to='/login' className={styles.navLinks} onClick={closeMobileMenu}>
                            Sign In
                        </Link>
                    </li>: null} */}
                {user && !button && <li className={styles.navItem}>
                        <Link href='/' className={styles.navLinks} onClick={handleLogOut}>
                            Sign Out
                        </Link>
                    </li>}
                </ul>
                {/* {button && !user ? <Button path='/login'>Sign In
                    </Button> : null} */}
                {user && button? <Button path='/' onClick={handleLogOut}>Sign Out
                    </Button> : null}
            </div>
        </nav>
        </>
    );
}

export default Navbar;