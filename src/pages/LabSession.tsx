import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Code, Map, BookOpen } from 'lucide-react'
import { weeks } from '../data/courseData'

const LabSession = () => {
  const { weekNumber, sessionNumber } = useParams<{ 
    weekNumber: string
    sessionNumber: string 
  }>()
  
  const week = weeks.find(w => w.weekNumber === parseInt(weekNumber || '1'))
  const session = week?.sessions.find(s => s.sessionNumber === parseInt(sessionNumber || '1'))

  if (!week || !session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-ucd-blue mb-4">Session Not Found</h1>
          <Link to="/" className="text-ucd-blue hover:underline">Return to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-ucd-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={week.weekNumber === 1 ? "/" : `/week/${week.weekNumber}`}
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {week.weekNumber === 1 ? "Back to Home" : `Back to Week ${week.weekNumber}`}
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-ucd-gold text-ucd-blue rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl">
              {session.sessionNumber}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{session.title}</h1>
              <p className="text-xl text-ucd-gold-light">{session.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[95%] 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-ucd-blue mb-6">Session Overview</h2>
          
          {/* Python Features */}
          {session.pythonFeatures && session.pythonFeatures.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-ucd-gold mr-3" />
                <h3 className="text-xl font-bold text-ucd-blue">Python Features</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-2">
                  {session.pythonFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-ucd-gold mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* GIS Recap */}
          {session.gisRecap && session.gisRecap.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Map className="h-6 w-6 text-ucd-blue mr-3" />
                <h3 className="text-xl font-bold text-ucd-blue">GIS Class Recap</h3>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-2">
                  {session.gisRecap.map((concept, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-ucd-blue mr-2">•</span>
                      <span className="text-gray-700">{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Topics */}
          {session.topics && session.topics.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-ucd-blue mr-3" />
                <h3 className="text-xl font-bold text-ucd-blue">Topics Covered</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {session.topics.map((topic, idx) => (
                  <span 
                    key={idx}
                    className="bg-ucd-gold text-ucd-blue px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-ucd-blue mb-4">Lab Content</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {session.content || "Content for this lab session will be added here. Check back soon for detailed materials, exercises, and tutorials."}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          {session.sessionNumber > 1 ? (
            <Link
              to={`/week/${week.weekNumber}/session/${session.sessionNumber - 1}`}
              className="btn-secondary"
            >
              ← Previous Session
            </Link>
          ) : (
            <div></div>
          )}
          
          {session.sessionNumber < week.sessions.length ? (
            <Link
              to={`/week/${week.weekNumber}/session/${session.sessionNumber + 1}`}
              className="btn-primary"
            >
              Next Session →
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LabSession

