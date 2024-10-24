import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { LangProvider } from 'react-intl-lil';
import { langConfig } from '../lang/config.js';
import Navigation from './components/navigation';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider langConfig={langConfig}>
      <Navigation />
      <App />
    </LangProvider>
  </StrictMode>
);
