import React, { FC, SyntheticEvent, useCallback } from 'react';

import bg from './bg.jpeg';

import styles from './Registration.module.scss';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Input } from '../Input';

type Props = {
  toggleShowModal: () => void;
};

export const Registration: FC<Props> = ({ toggleShowModal }) => {
  const onSubmit = useCallback(async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      login: { value: login },
      email: { value: email },
      tel: { value: tel },
      password: { value: password },
      repeatPassword: { value: repeatPassword },
    } = e.currentTarget.elements as typeof e.currentTarget.elements & {
      login: { value: string };
      email: { value: string };
      tel: { value: string };
      password: { value: string };
      repeatPassword: { value: string };
    };
    if (password !== repeatPassword) {
      alert('Пароли не совпадают');
      return;
    }
    alert(`login: ${login}; email: ${email}; tel: ${tel}; password: ${password}; `);
  }, []);
  return (
    <Modal wrapWithoutPadding onClose={toggleShowModal}>
      <div className={styles.img}>
        <img src={bg} alt="bg" />
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.wrap}>
          <p className={styles.title}>Регистрация</p>
          <div className={styles.box}>
            <Input placeholder="Логин" width="100%" name="login" required />
            <Input placeholder="Почта" width="100%" name="email" type="email" required />
            <Input placeholder="Телефон" width="100%" name="tel" type="tel" required />
            <Input placeholder="Пароль" width="100%" name="password" type="password" required />
            <Input
              placeholder="Повторите"
              width="100%"
              name="repeatPassword"
              type="password"
              required
            />
          </div>
        </div>
        <Button withoutBorder block size="lg" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </Modal>
  );
};
