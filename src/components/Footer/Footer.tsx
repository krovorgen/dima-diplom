import React from 'react';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <a className={styles.link} href="tel:8971218988">
                +77777777777
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="mailto:dima@gmail.com">
                dima@gmail.com
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="https://telegram.me/strawberrycoold">
                @strawberrycoold
              </a>
            </li>
          </ul>
          <ul className={styles.items}>
            <li className={styles.item}>
              <p className={styles.copyright}>© 2023 «Елки-Иголки»</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
