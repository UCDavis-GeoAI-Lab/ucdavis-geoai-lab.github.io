import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { weeks } from '../data/courseData'
import SessionCard from '../components/SessionCard'

import QASection from '../components/QASection'
import InClassQA from '../components/InClassQA'

const Week = () => {
  const { weekNumber } = useParams<{ weekNumber: string }>()
  const week = weeks.find(w => w.weekNumber === parseInt(weekNumber || '1'))
  const currentWeekNum = parseInt(weekNumber || '1')

  if (!week) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-ucd-blue mb-4">Week Not Found</h1>
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
            to="/" 
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-ucd-gold text-ucd-blue rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl">
              {week.weekNumber}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{week.title}</h1>
              <p className="text-xl text-ucd-gold-light">{week.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex items-center space-x-2 text-gray-600">
          <BookOpen className="h-5 w-5" />
          <span className="font-semibold">{week.sessions.length} Lab Sessions</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {week.sessions.map((session) => (
            <SessionCard 
              key={session.sessionNumber} 
              session={session} 
              weekNumber={week.weekNumber}
            />
          ))}
        </div>

        {/* Q&A Section */}
        <QASection weekNumber={currentWeekNum} />
        
        {/* In-Class Q&A Section */}
        <InClassQA weekNumber={currentWeekNum} />
      </div>
    </div>
  )
}

export default Week

