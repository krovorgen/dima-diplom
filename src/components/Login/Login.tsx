import React, { FC, SyntheticEvent, useCallback } from 'react';

import bg from './bg.jpg';

import styles from './Login.module.scss';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Input } from '../Input';

type Props = {
  toggleShowModal: () => void;
};

export const Login: FC<Props> = ({ toggleShowModal }) => {
  const onSubmit = useCallback(async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      login: { value: login },
      password: { value: password },
    } = e.currentTarget.elements as typeof e.currentTarget.elements & {
      login: { value: string };
      password: { value: string };
    };
    alert(`name: ${login}; tel: ${password};`);
  }, []);
  return (
    <Modal wrapWithoutPadding onClose={toggleShowModal}>
      <div className={styles.img}>
        <img src={bg} alt="bg" />
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.wrap}>
          <p className={styles.title}>Логин</p>
          <div className={styles.box}>
            <Input placeholder="Логин" width="100%" name="login" required />
            <Input placeholder="Пароль" width="100%" name="password" type="password" required />
          </div>
        </div>
        <Button withoutBorder block size="lg" type="submit">
          Войти
        </Button>
      </form>
    </Modal>
  );
};
