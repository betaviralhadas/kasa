import React from 'react';
import ReactDOM from 'react-dom/client';


import {BrowserRouter , Route , Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Test from './pages/Test';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
        {/* fixed part of the application */}
        <Header />
        
        {/* variable part of the application */}
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/test' element = {<Test />}></Route>
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
