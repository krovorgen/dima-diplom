import React, { FC, SyntheticEvent, useCallback } from 'react';

import bg from './bg.jpg';

import styles from './RequestСall.module.scss';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Input } from '../Input';

type Props = {
  toggleShowModal: () => void;
};

export const RequestAll: FC<Props> = ({ toggleShowModal }) => {
  const onSubmit = useCallback(async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      name: { value: name },
      tel: { value: tel },
      question: { value: question },
    } = e.currentTarget.elements as typeof e.currentTarget.elements & {
      name: { value: string };
      tel: { value: string };
      question: { value: string };
    };
    alert(`name: ${name}; tel: ${tel}; question: ${question}; `);
  }, []);
  return (
    <Modal wrapWithoutPadding onClose={toggleShowModal}>
      <div className={styles.img}>
        <img src={bg} alt="bg" />
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.wrap}>
          <p className={styles.title}>Заполнить форму</p>
          <p className={styles.subtitle}>Заполните и отправьте форму и мы перезвоним вам</p>
          <div className={styles.box}>
            <Input placeholder="Имя" width="100%" name="name" required />
            <Input placeholder="Телефон" width="100%" name="tel" required />
            <Input placeholder="Вопрос или комментарий" width="100%" name="question" />
          </div>
        </div>
        <Button withoutBorder block size="lg" type="submit">
          Отправить
        </Button>
      </form>
    </Modal>
  );
};
