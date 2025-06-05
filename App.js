import logo from './logo.svg';
import './App.css';
import APIGetCall from './APIGetCall';
import { ThemeProvider } from '@mui/material/styles'; 
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Herosection from './Foodfirstscreen';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Foodfirstscreen';
import HeroSection from './Foodsecondscreen';

import Authenticscreen from './Feeltheauthenticscreen';
import Little from './Littleinfoscreen';
import Footer from './Footerscreen';
import BlogArticles from './Blogscreen';
import BookTableWithMap from './Mapscreen';
import Long from './Secrettipscreen';
import ReadMoreArticles from './Readmorescreen.js';
import Moreabout from './Moreaboutusscreen.js';




function App() {
  return (
    <ThemeProvider>
      {/*ThemeToggleButton*/}
      <Router>
        <Routes>
          <Router path ="/" element={<Moreabout/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
