import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './components/screens/home/Home';
import { Admin } from './components/screens/admin/Admin';
import { ModalProvider } from './components/ModalProvider';

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


