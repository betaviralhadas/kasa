import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error from './pages/PropertyError';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
        {/* fixed part of the application */}
        <Header />
        
        {/* variable part of the application */}
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/About' element = {<About />}></Route>
          <Route path='/Housing' element = {<Housing />}></Route>
          <Route path='*' element = {<Error />}></Route>
        </Routes>

         {/* fixed part of the application */}
        <Footer />
      </BrowserRouter>
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
