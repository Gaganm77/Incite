import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  const apikey="ced035a95bc948339fe954824bfbb443";
  const [progress, setProgress] = useState(0);

  const setprogress =(progress)=>{
    setProgress(progress);
  }

    return (
      <Router>
        <Navbar />
        <LoadingBar
          color='#111900'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path="/"
           element={<News setProgress={setprogress} apikey={apikey} key="general" category="general" pageSize={10} />}>
          </Route>
          <Route exact path="/business"
           element={<News setProgress={setprogress} apikey={apikey} key="business" category="business" pageSize={10} />}>
          </Route>
          <Route exact path="/entertainment"
           element={<News setProgress={setprogress} apikey={apikey} key="entertainment" category="entertainment" pageSize={10} />}>
          </Route>
          <Route exact path="/sports"
           element={<News setProgress={setprogress} apikey={apikey} key="sports" category="sports" pageSize={10} />}>
          </Route>
          <Route exact path="/science"
            element={<News setProgress={setprogress} apikey={apikey} key="science" category="science" pageSize={10} />}>
          </Route>
          <Route exact path="/technology"
           element={<News setProgress={setprogress} apikey={apikey} key="technology" category="technology" pageSize={10} />}>
          </Route>
          <Route exact path="/health"
           element={<News setProgress={setprogress} apikey={apikey} key="health" category="health" pageSize={10} />}>
          </Route>
        </Routes>
      </Router>

    )
  
}

export default App
