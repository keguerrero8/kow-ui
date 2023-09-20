import { useState } from 'react';
import Link from 'next/link'

import styles from './CheckboxModal.module.css';

import ModalViewOnly from '../ModalViewOnly/ModalViewOnly';

const CheckboxModal = ({ checkboxText, linkText, modalContent1, modalContent2, setisAcknowledged, isAcknowledged }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
  
    const openModal = () => {
        setModalIsOpen(true);
        setScrollPosition(window.scrollY); // Capture scroll position
    };
  
    const closeModal = () => {
        setModalIsOpen(false);
        window.scrollTo(0, scrollPosition); // Restore scroll position
    };

    const handleCheckboxChange = () => {
        setisAcknowledged((isAcknowledged) => !isAcknowledged)
    }

  return (
    <div>
        <label className={styles.checkboxFont}>
            <input 
                className={styles.checkbox} 
                type="checkbox" 
                checked={isAcknowledged} 
                onChange={handleCheckboxChange} />
                    {checkboxText}
                    <Link legacyBehavior href="#">
                        <a className={styles.link} onClick={openModal}>
                            {linkText}
                        </a>
                    </Link>.
        </label>
        {modalIsOpen && (
            <ModalViewOnly 
                contentInfo1={modalContent1}
                contentInfo2={modalContent2}
                clickBackground={closeModal}
                clickIcon={closeModal}/>
        )}
    </div>
  );
};

export default CheckboxModal;
