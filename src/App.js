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

  const updateProgress = (progress) => {
    setProgress(progress)
  }
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
          <Route exact path="/" element={<News updateProgress={updateProgress} key="general" pageSize={8} country="in" category="general" apikey={apikey} />} />

          <Route exact path="/business" element={<News updateProgress={updateProgress} key="business" pageSize={8} country="in" category="business" apikey={apikey} />} />

          <Route exact path="/entertainment" element={<News updateProgress={updateProgress} key="entertainment" pageSize={8} country="in" category="entertainment" apikey={apikey} />} />

          <Route exact path="/health" element={<News updateProgress={updateProgress} key="health" pageSize={8} country="in" category="health" apikey={apikey} />} />

          <Route exact path="/science" element={<News updateProgress={updateProgress} key="science" pageSize={8} country="in" category="science" apikey={apikey} />} />

          <Route exact path="/sports" element={<News updateProgress={updateProgress} key="sports" pageSize={8} country="in" category="sports" apikey={apikey} />} />

          <Route exact path="/technology" element={<News updateProgress={updateProgress} key="technology" pageSize={8} country="in" category="technology" apikey={apikey} />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;