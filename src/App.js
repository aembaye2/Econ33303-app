// App.js
import React from "react"
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./Navbar"
// import ActLes09 from "./pages/quiz1/ActLes09"
// import Page3 from "./pages/quiz3/Page3"
import Footer from "./components/Footer" // Import the Footer component
import Home from "./pages"
import Pset1 from "./pages/pset1/Pset1"
import Pset2 from "./pages/pset2/Pset2"
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
