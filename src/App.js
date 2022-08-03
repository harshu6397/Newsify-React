import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App() {
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          height={2}
          progress={progress}
        />
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={8} country="in" category="general" apikey={apikey} />} />

          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={8} country="in" category="business" apikey={apikey} />} />

          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={8} country="in" category="entertainment" apikey={apikey} />} />

          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={8} country="in" category="health" apikey={apikey} />} />

          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={8} country="in" category="science" apikey={apikey} />} />

          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={8} country="in" category="sports" apikey={apikey} />} />

          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={8} country="in" category="technology" apikey={apikey} />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;