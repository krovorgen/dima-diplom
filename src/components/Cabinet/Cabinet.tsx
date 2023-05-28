import React from 'react';
import { useAppSelector } from '../../redux/store';
import { Navigate, NavLink } from 'react-router-dom';
import { Router } from '../../helpers/router';
import styles from './Cabinet.module.scss';

export const Cabinet = () => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) return <Navigate to={Router.home} />;
  return (
    <section className={styles.root}>
      <div className="container">
        <ul className={styles.items}>
          <li className={styles.item}>Логин: {user.username}</li>
          <li className={styles.item}>Почта: {user.email}</li>
          <li className={styles.item}>Телефон: {user.phone}</li>
        </ul>
        <NavLink className={styles.link} to={Router.orders}>
          Смотреть все заявки
        </NavLink>
      </div>
    </section>
  );
};
