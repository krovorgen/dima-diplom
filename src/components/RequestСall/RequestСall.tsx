import React, { FC, SyntheticEvent, useCallback, useState } from 'react';

import bg from './bg.jpg';

import styles from './RequestСall.module.scss';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { Input } from '../Input';
import { useAppSelector } from '../../redux/store';
import { catchHandler } from '../../helpers/catchHandler';
import { api } from '../../api';
import { toast } from 'react-toastify';

type Props = {
  toggleShowModal: () => void;
};

export const RequestAll: FC<Props> = ({ toggleShowModal }) => {
  const user = useAppSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = useCallback(
    async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      const data = e.currentTarget.elements as typeof e.currentTarget.elements & {
        name?: { value: string };
        tel?: { value: string };
        question: { value: string };
      };
      if (user) {
        try {
          await api.authSendForm({ auth_question: data.question!.value });
          toast.success('Вас скоро найдут и ответят');
        } catch ({ response }) {
          catchHandler(response);
        } finally {
          setIsLoading(false);
        }
      } else {
        try {
          await api.nonAuthSendForm({
            non_auth_question: data.question!.value,
            name_question: data.name!.value,
            phone_question: data.tel!.value,
          });
          toast.success('Вас скоро найдут и ответят');
        } catch ({ response }) {
          catchHandler(response);
        } finally {
          setIsLoading(false);
        }
      }
      setIsLoading(false);
    },
    [user],
  );
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
            {!user && (
              <>
                <Input placeholder="Имя" width="100%" name="name" required />
                <Input placeholder="Телефон" width="100%" name="tel" required />
              </>
            )}
            <Input placeholder="Вопрос или комментарий" width="100%" required name="question" />
          </div>
        </div>
        <Button disabled={isLoading} withoutBorder block size="lg" type="submit">
          Отправить
        </Button>
      </form>
    </Modal>
  );
};
