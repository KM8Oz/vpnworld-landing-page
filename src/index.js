import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Favicon from 'react-favicon';
import "./global.css"
import { SuperSEO } from "react-super-seo";

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
    <SuperSEO
        title="VPN-приложение | VpnWorld"
        description="быстрый vpn-туннель для разблокировки вашего опыта работы в сети."
        lang="ru"
        openGraph={{
          ogImage: {
            ogImage: 'https://res.cloudinary.com/dupagadir/image/upload/v1651409226/Vectary_texture_xncxxr.png',
            ogImageAlt: 'VpnWorld',
            ogImageWidth: 538,
            ogImageHeight: 297,
            ogImageType: 'image/jpeg',
          },
        }}
        viewport={"width=device-width, initial-scale=1"}
        charset={"UTF-8"}
        googlebot={"index"}
      />
    <App />
    <Favicon url="https://res.cloudinary.com/dupagadir/image/upload/v1651410941/frame-3_anscx7.ico"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
