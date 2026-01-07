import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, GraduationCap, Calendar, Lock, Github } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { weeks } from '../data/courseData'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showWeeksMenu, setShowWeeksMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const weeksMenuRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => location.pathname === path

  const handleWeeksClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowWeeksMenu(!showWeeksMenu)
  }

  const handleWeekSelect = (weekNumber: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    const isLocked = weekNumber > 1
    if (!isLocked) {
      // Close menus first, then navigate
      setShowWeeksMenu(false)
      setIsOpen(false)
      // Use setTimeout to ensure state updates before navigation
      setTimeout(() => {
        navigate(`/week/${weekNumber}`)
      }, 0)
    } else {
      setShowWeeksMenu(false)
    }
  }

  // Close menus when clicking outside or on mobile menu toggle
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (weeksMenuRef.current && !weeksMenuRef.current.contains(event.target as Node)) {
        setShowWeeksMenu(false)
      }
    }

    if (showWeeksMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showWeeksMenu])

  // Close weeks menu when main mobile menu closes
  useEffect(() => {
    if (!isOpen) {
      setShowWeeksMenu(false)
    }
  }, [isOpen])

  return (
    <nav className="bg-ucd-blue text-white shadow-xl sticky top-0 z-50 border-b-2 border-ucd-gold/20">
      <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <GraduationCap className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-bold text-lg">ABT/HYD 182</span>
              <span className="text-xs text-ucd-gold-light">Advanced GIS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 relative">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive('/') 
                  ? 'bg-ucd-gold text-ucd-blue font-semibold' 
                  : 'hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <div className="relative" ref={weeksMenuRef}>
              <button
                onClick={handleWeeksClick}
                className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                  location.pathname.startsWith('/week') 
                    ? 'bg-ucd-gold text-ucd-blue font-semibold' 
                    : 'hover:bg-white/10'
                }`}
              >
                <Calendar className="h-4 w-4" />
                <span>Weeks</span>
              </button>
              
              {showWeeksMenu && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-ucd-blue rounded-xl shadow-2xl border border-ucd-gold/30 py-2 z-50 overflow-hidden">
                  <div className="max-h-96 overflow-y-auto">
                    {weeks.map((week) => {
                      const isLocked = week.weekNumber > 1
                      return (
                        <button
                          key={week.weekNumber}
                          onClick={() => handleWeekSelect(week.weekNumber)}
                          disabled={isLocked}
                          className={`w-full text-left px-4 py-3 transition-colors flex items-center justify-between group ${
                            isLocked 
                              ? 'opacity-60 cursor-not-allowed text-white/60' 
                              : 'hover:bg-ucd-gold hover:text-ucd-blue text-white'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className={`font-semibold ${
                              isLocked ? 'text-white/60' : 'text-white group-hover:text-ucd-blue'
                            }`}>
                              {week.title}
                            </span>
                          </div>
                          {isLocked && (
                            <Lock className="h-4 w-4 text-white/40" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
            <a
              href="https://github.com/mohammadrezanarimaniucdavis/ABT182_Advance_GIS_UCDavis"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all flex items-center space-x-2"
              title="View on GitHub"
            >
              <Github className="h-5 w-5" />
              <span className="hidden lg:inline">GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/20">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-lg transition-all ${
                isActive('/') 
                  ? 'bg-ucd-gold text-ucd-blue font-semibold' 
                  : 'hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={() => setShowWeeksMenu(!showWeeksMenu)}
              className={`w-full text-left block px-4 py-2 rounded-lg transition-all ${
                location.pathname.startsWith('/week') 
                  ? 'bg-ucd-gold text-ucd-blue font-semibold' 
                  : 'hover:bg-white/10'
              }`}
            >
              Weeks
            </button>
            {showWeeksMenu && (
              <div className="pl-4 space-y-1" onClick={(e) => e.stopPropagation()}>
                {weeks.map((week) => {
                  const isLocked = week.weekNumber > 1
                  return (
                    <button
                      key={week.weekNumber}
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        handleWeekSelect(week.weekNumber, e)
                      }}
                      disabled={isLocked}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between ${
                        isLocked 
                          ? 'opacity-60 cursor-not-allowed' 
                          : 'hover:bg-white/10 active:bg-white/20'
                      }`}
                    >
                      <span>{week.title}</span>
                      {isLocked && (
                        <Lock className="h-4 w-4 text-white/70" />
                      )}
                    </button>
                  )
                })}
              </div>
            )}
            <a
              href="https://github.com/mohammadrezanarimaniucdavis/ABT182_Advance_GIS_UCDavis"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-all flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

