import React, { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import styles from './Catalog.module.scss';
import { Button } from '../Button';
import cn from 'classnames';
import { RequestAll } from '../RequestСall';
import { api } from '../../api';

type TreeType = {
  id: null;
  tree_name: string;
  tree_size: string;
  tree_price: string;
  tree_image: string;
};

export const Catalog = () => {
  const [tree, setTree] = useState<TreeType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = useCallback(() => {
    setShowModal((v) => !v);
  }, []);

  useEffect(() => {
    (async () => {
      const data = await api.getTrees();
      setTree(data.data);
    })();
  }, []);

  return (
    <section className={styles.root}>
      <div className="container">
        <h2 className={styles.title}>Каталог и цены</h2>
        {tree ? (
          <ul className={styles.items}>
            {tree.map((el) => (
              <li key={Math.random()} className={styles.item} onClick={toggleShowModal}>
                <div className={styles.img}>
                  <img src={el.tree_image} alt={el.tree_name} />
                </div>
                <div className={styles.wrap}>
                  <p className={styles.subtitle}>{el.tree_name}</p>
                  <ul className={styles.elements}>
                    <li className={styles.element}>
                      <p className={styles.text}>Размеры в наличии</p>{' '}
                      <p className={cn(styles.descr, styles.descrPrimary)}>{el.tree_size}</p>
                    </li>
                    <li className={styles.element}>
                      <p className={styles.text}>Цена, от</p>{' '}
                      <p className={cn(styles.descr, styles.descrAccent)}>{el.tree_price} руб</p>
                    </li>
                  </ul>
                  <Button>Заказать</Button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          'Необходимо добавить деревья'
        )}
      </div>
      {showModal && <RequestAll toggleShowModal={toggleShowModal} />}
    </section>
  );
};
