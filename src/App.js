
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =()=> {

  let pageSize =15;
  let apiKey=process.env.REACT_APP_NEWS_API;
  
  const [progress, setProgress] = useState(0);

    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress} />
          <Navbar />
          <Routes>
            <Route path='/' exact element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
            <Route path='/business' exact element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />}></Route>
            <Route path='/entertainment' exact element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}></Route>
            <Route path='/health' exact element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />}></Route>
            <Route path='/science' exact element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />}></Route>
            <Route path='/sports' exact element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />}></Route>
            <Route path='/technology' exact element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  
}
export default App

