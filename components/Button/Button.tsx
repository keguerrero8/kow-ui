import React, { MouseEventHandler } from 'react';
import styles from './Button.module.css'
import Link from 'next/link'


const STYLES = [styles.btnPrimary, styles.btnSecondary, styles.btnTertiary]
const SIZES = [styles.btnSmall, styles.btnMedium, styles.btnLarge]
const PAGES = [styles.btnDefault, styles.btnHome, styles.btnHow, styles.btnFind, styles.btnContact, styles.btnOther, styles.btnCancel]

interface ButtonProps {
    children: React.ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>
    buttonStyle?: string
    buttonSize?: string
    buttonPage?: string
    path: string
    className?: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick, buttonStyle, buttonSize, buttonPage, path, className}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonPage = PAGES.includes(buttonPage) ? buttonPage : PAGES[0]

    return (
        <Link href={path} className={className? className : ""}>
            <button
            className={`${styles.btn} ${checkButtonStyle} ${checkButtonSize} ${checkButtonPage}`}
            onClick={onClick}
            >
            {children}
            </button>
        </Link>
    );
}

export default Button