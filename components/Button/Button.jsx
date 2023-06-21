import React from 'react';
import styles from './Button.module.css'
import Link from 'next/link'


const STYLES = [styles.btnPrimary, styles.btnSecondary, styles.btnTertiary]
const SIZES = [styles.btnSmall, styles.btnMedium, styles.btnLarge]
const PAGES = [styles.btnDefault, styles.btnHome, styles.btnHow, styles.btnFind, styles.btnContact, styles.btnOther]

export default function Button ({children, type, onClick, buttonStyle, buttonSize, buttonPage, path}) {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonPage = PAGES.includes(buttonPage) ? buttonPage : PAGES[0]

    return (
        <Link href={path}>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonPage}`}
            onClick={onClick}
            type={type}
            >
            {children}
            </button>
        </Link>
    );
}
