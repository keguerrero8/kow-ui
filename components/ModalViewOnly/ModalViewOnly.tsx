import CloseIcon from '@mui/icons-material/Close';

import styles from './ModalViewOnly.module.css';

interface ModalViewOnlyProps {
    contentInfo1: React.ReactNode
    contentInfo2: React.ReactNode
    clickBackground: () => void
    clickIcon: () => void
}

const ModalViewOnly: React.FC<ModalViewOnlyProps> = ({ contentInfo1, contentInfo2, clickBackground, clickIcon }) => {
    
  return (
    <div className={styles.modalContainer}>
        <div className={styles.behindModal} onClick={clickBackground}/>
        <div className={styles.modal}>
            <div className={styles.contentContainer}>
                <div className={styles.contentInfo}>
                    {contentInfo1}
                    {contentInfo2}
                </div>
                <div className={styles.modalIcon} onClick={clickIcon}>
                    <CloseIcon/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default ModalViewOnly;
