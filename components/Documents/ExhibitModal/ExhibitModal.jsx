import { useState } from 'react';

import styles from './ExhibitModal.module.css';

export default function Modal( props ) {

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={props.onClick}>
            &times;
          </span>
          <h2>{props.title}</h2>
          <h3>{props.subtitle}</h3>
          <div className={styles.feeFreq}>
              <div className={styles.column}>
                  <h3>Network</h3>
                  <p>{props.tier1}</p>
                  <p>{props.tier2}</p>
                  <p>{props.tier3}</p>
              </div>
              <div className={styles.column}>
                  <h3>Amount</h3>
                  <p>${props.amount1}</p>
                  <p>${props.amount2}</p>
                  <p>${props.amount3}</p>
              </div>
              <div className={styles.column}>
                  <h3>Frequency</h3>
                  <p>{props.frequency1}</p>
                  <p>{props.frequency2}</p>
                  <p>{props.frequency3}</p>
              </div>
          </div>
          <div className={styles.feeFreqRow}>
              <div className={styles.row}>
                  <h3>{props.tier1} Network</h3>
                  <p>${props.amount1}</p>
                  <p>{props.frequency1}</p>
              </div>
              <div className={styles.row}>
                  <h3>{props.tier2} Network</h3>
                  <p>${props.amount2}</p>
                  <p>{props.frequency2}</p>
              </div>
              <div className={styles.row}>
                  <h3>{props.tier3} Network</h3>
                  <p>${props.amount3}</p>
                  <p>{props.frequency3}</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
