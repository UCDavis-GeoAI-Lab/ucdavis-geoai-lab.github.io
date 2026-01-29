import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Week from './pages/Week'
import LabSession from './pages/LabSession'
import Lab1 from './pages/Lab1'
import Lab2 from './pages/Lab2'
import Lab3 from './pages/Lab3'
import Lab4 from './pages/Lab4'

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

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  // Use basename from Vite config, removing trailing slash if present
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')
  
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <RedirectHandler />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/week/1" element={<Lab1 />} />
            <Route path="/week/2" element={<Lab2 />} />
            <Route path="/week/3" element={<Lab3 />} />
            <Route path="/week/4" element={<Lab4 />} />
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

