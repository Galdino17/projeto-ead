import React from 'react';
import { Home } from './pages/Home';
import { Router } from './routes/Router';
import { GlobalStyles } from './Styled';

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <Router/>
    </div>
  );
}



