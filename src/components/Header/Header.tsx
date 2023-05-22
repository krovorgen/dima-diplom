import React, { useCallback, useState } from 'react';

import logo from '../../images/logo.png';

import styles from './Header.module.scss';
import cn from 'classnames';
import { Button } from '../Button';
import { RequestAll } from '../RequestСall';
import { Login } from '../Login';
import { Registration } from '../Registration';
import { useAppSelector } from '../../redux/store';

export const Header = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const toggleShowRequestModal = useCallback(() => {
    setShowRequestModal((v) => !v);
  }, []);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const toggleShowLoginModal = useCallback(() => {
    setShowLoginModal((v) => !v);
  }, []);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const toggleShowRegistrationModal = useCallback(() => {
    setShowRegistrationModal((v) => !v);
  }, []);
  const exit = useCallback(() => {
    localStorage.setItem('token', '');
    window.location.reload();
  }, []);
  return (
    <>
      <header className={styles.header}>
        <div className={cn('container', styles.container)}>
          <a href="/" className={styles.logo}>
            <img className={styles.img} src={logo} width={88} height={88} alt="Logo" />
            <span className={styles.wrap}>
              <span className={styles.title}>ЁЛКИ-ИГОЛКИ</span>
              <span className={styles.subtitle}>садовый центр СПб</span>
            </span>
          </a>
          <div className={styles.nav}>
            {!user && (
              <>
                <Button onClick={toggleShowLoginModal}>Логин</Button>
                <Button onClick={toggleShowRegistrationModal}>Регистрация</Button>
              </>
            )}
            <Button onClick={toggleShowRequestModal} variant="base-outline">
              Заказать звонок
            </Button>
            {user && (
              <Button onClick={exit} variant="base-outline">
                Выйти из аккаунта
              </Button>
            )}
          </div>
        </div>
      </header>
      {showRequestModal && <RequestAll toggleShowModal={toggleShowRequestModal} />}
      {!user && showLoginModal && <Login toggleShowModal={toggleShowLoginModal} />}
      {!user && showRegistrationModal && (
        <Registration toggleShowModal={toggleShowRegistrationModal} />
      )}
    </>
  );
};
