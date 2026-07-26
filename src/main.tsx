import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/swami-vivekanand-seva-pratishthan">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);