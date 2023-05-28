import React from 'react';
import styles from './Orders.module.scss';
import { useAppSelector } from '../../redux/store';
import { Navigate } from 'react-router-dom';
import { Router } from '../../helpers/router';
const allOrders = [
  { id: 131, text: 'Пихта' },
  { id: 132, text: 'Ёлочка' },
  { id: 123, text: 'Дуб' },
  { id: 134, text: 'Пальма' },
];

export const Orders = () => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) return <Navigate to={Router.home} />;
  return (
    <section className={styles.root}>
      <div className="container">
        <ul className={styles.items}>
          {allOrders.map((el) => (
            <li className={styles.item} key={el.id}>
              id: {el.id}
              <br />
              заказ: {el.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
