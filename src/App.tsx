import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Week from './pages/Week'
import LabSession from './pages/LabSession'
import Lab1 from './pages/Lab1'

// Component to handle 404.html redirects from GitHub Pages
function RedirectHandler() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Handle GitHub Pages 404.html redirect format: /?/path
    if (location.search && location.search[1] === '/') {
      const path = location.search.slice(1).split('&').map(s => s.replace(/~and~/g, '&')).join('?')
      navigate(path + location.hash, { replace: true })
    }
  }, [location, navigate])

  return null
}

function App() {
  // Use basename only in production (GitHub Pages), not in development
  const basename = import.meta.env.PROD ? '/ABT182_Advance_GIS_UCDavis' : ''
  
  return (
    <Router basename={basename}>
      <RedirectHandler />
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

