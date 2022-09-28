import React from 'react';
import './App.css';
import Header from './Components/Header';
import RecommendedVideos from './Components/RecommendedVideos';
import Sidebar from './Components/Sidebar';
import SearchPage from './Components/SearchPage';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    //BEM class naming convention
    <div className="App">
     <Header />
     <div className="app_page">  
        <Routes>
          <Route path="/search/:searchTerm"element={<Sidebar />}/>
          </Routes> 
            <Routes>
           <Route path="/search/:searchTerm" element={<SearchPage />} />
           </Routes>
           </div>
           <div className="app_page"> 
           <Routes>
           <Route path="/" element={<Sidebar />} />
           </Routes>
           <Routes>
           <Route path="/" element={<RecommendedVideos />} />     
        </Routes>
        </div>
    </div>
  );
}

export default App;
