import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Contact } from './components/Contact';
import { useAppDispatch, useAppSelector } from './redux/store';
import { initializedApp } from './redux/features/authSlice';

export const App = () => {
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(initializedApp());
  }, [dispatch, token]);

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);
  return (
    <main>
      <Header />
      <Catalog />
      <Contact />
    </main>
  );
};
