import React, { FC, SyntheticEvent, useCallback, useState } from 'react';

import bg from './bg.jpg';

import styles from './Login.module.scss';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { useAppDispatch } from '../../redux/store';
import { loginUser } from '../../redux/features/authSlice';
import { catchHandler } from '../../helpers/catchHandler';

type Props = {
  toggleShowModal: () => void;
};

export const Login: FC<Props> = ({ toggleShowModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(
    async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      const {
        username: { value: username },
        password: { value: password },
      } = e.currentTarget.elements as typeof e.currentTarget.elements & {
        username: { value: string };
        password: { value: string };
      };
      try {
        await dispatch(loginUser({ username, password }));
      } catch ({ response }) {
        catchHandler(response);
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
          <p className={styles.title}>Логин</p>
          <div className={styles.box}>
            <Input placeholder="Логин" width="100%" name="username" required />
            <Input placeholder="Пароль" width="100%" name="password" type="password" required />
          </div>
        </div>
        <Button withoutBorder disabled={isLoading} block size="lg" type="submit">
          Войти
        </Button>
      </form>
    </Modal>
  );
};
