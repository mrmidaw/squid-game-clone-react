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
import { Actors } from './components/screens/actors/Actors';
import { Games } from './components/screens/games/Games';
import { Trailer } from './components/screens/trailer/Trailer';
import { NotFoundPage } from './components/screens/notFound/NotFoundPage';
import { ModalProvider } from './components/ModalProvider';


ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/trailer" element={<Trailer />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/games" element={<Games />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


