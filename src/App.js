// App.js
import React from "react"
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./Navbar"
import Footer from "./Footer" // Import the Footer component

import Home from "./pages"
import Pset1 from "./pages/pset1/Pset1"
import Pset2 from "./pages/pset2/Pset2"
import Pset3 from "./pages/pset3/Pset3"
import Act00 from "./pages/act00/Act00"
import Act01 from "./pages/act01/Act01"
import ActCh05 from "./pages/actCh05/ActCh05"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Pset1" element={<Pset1 />} />
            <Route path="/Pset2" element={<Pset2 />} />
            <Route path="/Pset3" element={<Pset3 />} />
            <Route path="/Act00" element={<Act00 />} />
            <Route path="/Act01" element={<Act01 />} />
            <Route path="/ActCh05" element={<ActCh05 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
