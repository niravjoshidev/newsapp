
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize =15;
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' exact element={<News key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route path='/business' exact element={<News key="business" pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route path='/entertainment' exact element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route path='/health' exact element={<News key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route path='/science' exact element={<News key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route path='/sports' exact element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route path='/technology' exact element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

