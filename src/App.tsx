import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Contact } from './components/Contact';
import { useAppDispatch, useAppSelector } from './redux/store';
import { initializedApp } from './redux/features/authSlice';
import { Route, Routes } from 'react-router-dom';
import { Router } from './helpers/router';
import { Footer } from './components/Footer';
import { Cabinet } from './components/Cabinet';
import { Orders } from './components/Orders';

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
      <Routes>
        <Route
          path={Router.home}
          element={
            <>
              <Catalog />
              <Contact />
            </>
          }></Route>
        <Route path={Router.cabinet} element={<Cabinet />}></Route>
        <Route path={Router.orders} element={<Orders />}></Route>
      </Routes>
      <Footer />
    </main>
  );
};
