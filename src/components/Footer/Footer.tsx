import React from 'react';

import telegram from './telegram.png';
import gmail from './gmail.png';
import telephone from './telephone.png';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <a className={styles.link} href="tel:8971218988">
                <img src={telegram} alt="telegram" /> +7 (925) 795-73-56
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="mailto:dima@gmail.com">
                <img src={gmail} alt="gmail" /> elki-igolki777@mail.ru
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="https://telegram.me/strawberrycoold">
                <img src={telephone} alt="telephone" /> @strawberrycoold
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
