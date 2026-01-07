import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Week from './pages/Week'
import LabSession from './pages/LabSession'
import Lab1 from './pages/Lab1'

function App() {
  // Use basename only in production (GitHub Pages), not in development
  const basename = import.meta.env.PROD ? '/ABT182_Advance_GIS_UCDavis' : ''
  
  return (
    <Router basename={basename}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/week/1" element={<Lab1 />} />
            <Route path="/week/:weekNumber" element={<Week />} />
            <Route path="/week/:weekNumber/session/:sessionNumber" element={<LabSession />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

