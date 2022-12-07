import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import { ContextProvider } from "./Components/utils/global.context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<App />}>
              <Route path="home" element={<Home />} />
              <Route path="contacto" element={<Contact />} />
              <Route path="dentist/:id" element={<Detail />} />
              <Route path="destacados" element={<Favs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  //</React.StrictMode>
);


