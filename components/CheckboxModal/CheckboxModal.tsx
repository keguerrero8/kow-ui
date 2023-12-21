import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link'

import styles from './CheckboxModal.module.css';

import ModalViewOnly from '../ModalViewOnly/ModalViewOnly';

interface CheckBoxModalProps {
    checkboxText: string
    linkText: string
    modalContent1: React.FC
    modalContent2: React.FC
    setisAcknowledged: Dispatch<SetStateAction<boolean>>
    isAcknowledged: boolean
}

const CheckboxModal: React.FC<CheckBoxModalProps> = ({ checkboxText, linkText, modalContent1, modalContent2, setisAcknowledged, isAcknowledged }) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
  
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
