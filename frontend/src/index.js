import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Detail from './Pages/ProductDetail'
import Checkout from './Pages/Checkout';
import InstruksiBayar from './Pages/InstruksiBayar';
import Login from './Pages/Login';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
  { 
    path: "/", 
    element:  <App/>,
  },
  { 
    path: '/detail', 
    element: <Detail/>,
  },
  {
    path: "/checkout", 
    element: <Checkout/>,
  },
  {
    path: "/instruksibayar", 
    element: <InstruksiBayar/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
