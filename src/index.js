import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Favicon from 'react-favicon';
import "./global.css"
document.title = "VPN-приложение";
// var link = document.querySelector("link[rel~='icon']");
// if (!link) {
//     link = document.createElement('link');
//     link.rel = 'icon';
//     document.getElementsByTagName('head')[0].appendChild(link);
// }
// link.href = 'https://res.cloudinary.com/dupagadir/image/upload/v1651410941/frame-3_anscx7.ico';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Favicon url="https://res.cloudinary.com/dupagadir/image/upload/v1651410941/frame-3_anscx7.ico"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
