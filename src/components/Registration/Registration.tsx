import React, { FC, SyntheticEvent, useCallback, useState } from 'react';

import bg from './bg.jpeg';

import styles from './Registration.module.scss';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { useAppDispatch } from '../../redux/store';
import { registrationUser } from '../../redux/features/authSlice';

type Props = {
  toggleShowModal: () => void;
};

export const Registration: FC<Props> = ({ toggleShowModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      const {
        username: { value: username },
        email: { value: email },
        phone: { value: phone },
        password: { value: password },
        repeatPassword: { value: repeatPassword },
      } = e.currentTarget.elements as typeof e.currentTarget.elements & {
        username: { value: string };
        email: { value: string };
        phone: { value: string };
        password: { value: string };
        repeatPassword: { value: string };
      };
      if (password !== repeatPassword) {
        alert('Пароли не совпадают');
        return;
      }

      try {
        await dispatch(registrationUser({ username, email, phone, password }));
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch],
  );
  return (
    <Modal wrapWithoutPadding onClose={toggleShowModal}>
      <div className={styles.img}>
        <img src={bg} alt="bg" />
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.wrap}>
          <p className={styles.title}>Регистрация</p>
          <div className={styles.box}>
            <Input placeholder="Логин" width="100%" name="username" required />
            <Input placeholder="Почта" width="100%" name="email" type="email" required />
            <Input placeholder="Телефон" width="100%" name="phone" type="tel" required />
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
        <Button withoutBorder disabled={isLoading} block size="lg" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </Modal>
  );
};
