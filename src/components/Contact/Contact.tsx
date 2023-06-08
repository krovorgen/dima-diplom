import React from 'react';

import styles from './Contact.module.scss';

export const Contact = () => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>КАК СВЯЗАТЬСЯ С НАМИ</h2>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a
              className={styles.img}
              href="https://yandex.ru/maps/-/CCU1iXe0xB"
              target="_blank"
              rel="noopener">
              <img src="https://xn---777-l4dkvbbpegf5b.xn--p1ai/img/icon__1.jpg" alt="" />
            </a>
            <p className={styles.text}>СПб</p>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <img src="https://xn---777-l4dkvbbpegf5b.xn--p1ai/img/icon__2.jpg" alt="" />
            </div>
            <p className={styles.text}>+7 (925) 795-73-56</p>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <img src="https://xn---777-l4dkvbbpegf5b.xn--p1ai/img/icon__3.jpg" alt="" />
            </div>
            <p className={styles.text}>elki-igolki777@mail.ru</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
