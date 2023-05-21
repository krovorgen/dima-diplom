import React, { useCallback, useState } from 'react';
import { v4 } from 'uuid';

import styles from './Catalog.module.scss';
import { Button } from '../Button';
import cn from 'classnames';
import { RequestAll } from '../RequestСall';

const data = [
  {
    id: v4(),
    img: 'https://xn---777-l4dkvbbpegf5b.xn--p1ai/netcat_files/cache/631901jpga73dbc79b6c6c07bce34d97a4a1ae97b_300x300x0.jpg',
    title: 'КЕДР СИБИРСКИЙ',
    size: '1,5-2,2м м.',
    price: '18000',
  },
  {
    id: v4(),
    img: 'https://xn---777-l4dkvbbpegf5b.xn--p1ai/netcat_files/cache/63190tuyajpg61f59ab79f1767af785af7d63a771b5b_300x300x0.jpg',
    title: 'ТУЯ КОЛОМНА',
    size: '1,3-1,4 м м.',
    price: '3000',
  },
  {
    id: v4(),
    img: 'https://xn---777-l4dkvbbpegf5b.xn--p1ai/netcat_files/cache/63190img_7797_1_jpg491ac266e30492ac16ca0cbd1f598bc4_300x300x0.jpg',
    title: 'ЕЛЬ ОБЫКНОВЕННАЯ',
    size: '3,5-5,0 м м.',
    price: '8000',
  },
  {
    id: v4(),
    img: 'https://xn---777-l4dkvbbpegf5b.xn--p1ai/netcat_files/cache/63190img_7777_1_jpgd969a7b87a07f174a03a099943462c5b_300x300x0.jpg',
    title: 'ЕЛЬ ГЛАУКА ЭКСТРА',
    size: '1,5-2,0 м м.',
    price: '12000',
  },
  {
    id: v4(),
    img: 'https://xn---777-l4dkvbbpegf5b.xn--p1ai/netcat_files/cache/63190img_7786_1_jpgbcab75a662179404740c831f5f829104_300x300x0.jpg',
    title: 'СОСНА НОРВЕЖСКАЯ',
    size: '2,0-3,5 м м.',
    price: '28000',
  },
  {
    id: v4(),
    img: 'https://xn---777-l4dkvbbpegf5b.xn--p1ai/netcat_files/cache/63190img_7775_1_jpg3c1fb26d93be1d65912ed74e1ddc57fb_300x300x0.jpg',
    title: 'ПИХТА КОРЕЙСКАЯ',
    size: '1,5-2,5 м м.',
    price: '30000',
  },
];

export const Catalog = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = useCallback(() => {
    setShowModal((v) => !v);
  }, []);

  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>Каталог и цены</h2>
        <ul className={styles.items}>
          {data.map((el) => (
            <li className={styles.item} onClick={toggleShowModal}>
              <div className={styles.img}>
                <img src={el.img} alt={el.title} />
              </div>
              <div className={styles.wrap}>
                <p className={styles.subtitle}>{el.title}</p>
                <ul className={styles.elements}>
                  <li className={styles.element}>
                    <p className={styles.text}>Размеры в наличии</p>{' '}
                    <p className={cn(styles.descr, styles.descrPrimary)}>{el.size}</p>
                  </li>
                  <li className={styles.element}>
                    <p className={styles.text}>Цена, от</p>{' '}
                    <p className={cn(styles.descr, styles.descrAccent)}>{el.price} руб</p>
                  </li>
                </ul>
                <Button>Заказать</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showModal && <RequestAll toggleShowModal={toggleShowModal} />}
    </section>
  );
};
