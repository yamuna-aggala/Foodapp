import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Loginscreen from './login';
import APIGetCall from './APIGetCall';
import HeroSection from './Foodfirstscreen';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Foodfirstscreen';
import Herosection from './Foodsecondscreen'
import Authenticscreen from './Feeltheauthenticscreen';
import Little from './Littleinfoscreen';
import Footer from './Footerscreen';
import BlogArticles from './Blogscreen';
import BookTableWithMap from './Mapscreen';
import Long from './Secrettipscreen';
import ReadMoreArticles from './Readmorescreen.js';
import Moreabout from './Moreaboutusscreen.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Moreabout/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
