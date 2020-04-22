import React from 'react';
import { Products }  from './pages';
import { Header } from './components/header';

function App(props: any) {
  return (
    <div>
      <Header />
      <Products />
    </div>
  );
}

export default App;
