import React from 'react';
import { Header } from './components/Header';
import { Catalog } from './components/Catalog';
import { Contact } from './components/Contact';

export const App = () => {
  return (
    <main>
      <Header />
      <Catalog />
      <Contact />
    </main>
  );
};
