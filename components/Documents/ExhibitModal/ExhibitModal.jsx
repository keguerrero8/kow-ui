import { useState } from 'react';

import styles from './ExhibitModal.module.css';

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className={styles.buttonStyle} onClick={handleClick}>{props.modalName}</button>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <div className={styles.feeFreq}>
                <div className={styles.tier}>
                    <h3>Network</h3>
                    <p>{props.tier1}</p>
                    <p>{props.tier2}</p>
                    <p>{props.tier3}</p>
                    <p>{props.tier4}</p>
                </div>
                <div className={styles.fee}>
                    <h3>Amount</h3>
                    <p>${props.amount1}</p>
                    <p>${props.amount2}</p>
                    <p>${props.amount3}</p>
                    <p>${props.amount4}</p>
                </div>
                <div className={styles.freq}>
                    <h3>Frequency</h3>
                    <p>{props.frequency1}</p>
                    <p>{props.frequency2}</p>
                    <p>{props.frequency3}</p>
                    <p>{props.frequency4}</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
