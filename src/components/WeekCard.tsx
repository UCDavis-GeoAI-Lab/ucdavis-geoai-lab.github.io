import { Link } from 'react-router-dom'
import { BookOpen, ArrowRight, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Week } from '../data/courseData'

interface WeekCardProps {
  week: Week
}

const WeekCard = ({ week }: WeekCardProps) => {
  const isLocked = week.weekNumber > 4
  
  const cardContent = (
    <motion.div 
      className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 card-hover border-l-4 border-ucd-gold relative overflow-hidden h-full w-full flex flex-col ${
        isLocked ? 'opacity-75' : ''
      }`}
      whileHover={isLocked ? {} : { scale: 1.03, y: -5 }}
      whileTap={isLocked ? {} : { scale: 0.98 }}
    >
      {!isLocked && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-ucd-gold opacity-5 rounded-full -mr-16 -mt-16"></div>
      )}
      <div className="relative z-10 flex flex-col h-full">
      {isLocked && (
        <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md border border-gray-200 w-8 h-8 flex items-center justify-center flex-shrink-0">
          <Lock className="h-4 w-4 text-gray-500" />
        </div>
      )}
      <div className="flex items-start justify-between mb-4 flex-shrink-0" style={{ height: '8rem', maxHeight: '8rem', minHeight: '8rem' }}>
        <div className="flex-1 min-w-0 pr-3 flex flex-col" style={{ height: '100%', maxHeight: '100%' }}>
          <h3 className="text-xl md:text-2xl font-bold text-ucd-blue mb-2 flex items-center space-x-2 flex-shrink-0" style={{ height: '2.5rem', maxHeight: '2.5rem', minHeight: '2.5rem', overflow: 'hidden', lineHeight: '2.5rem' }}>
            <span className="line-clamp-1 overflow-hidden text-ellipsis">{week.title}</span>
          </h3>
          <div className="flex-shrink-0 overflow-hidden" style={{ height: '4.5rem', maxHeight: '4.5rem', minHeight: '4.5rem', flex: '0 0 4.5rem', boxSizing: 'border-box' }}>
            <p className="text-gray-600 m-0 w-full" style={{ 
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              lineHeight: '1.5rem',
              height: '4.5rem',
              maxHeight: '4.5rem',
              margin: 0,
              padding: 0,
              boxSizing: 'border-box'
            }}>{week.description}</p>
          </div>
        </div>
        <div className="bg-ucd-gold text-ucd-blue rounded-full w-12 h-12 min-w-[3rem] min-h-[3rem] max-w-[3rem] max-h-[3rem] flex items-center justify-center font-bold text-lg flex-shrink-0" style={{ flexShrink: 0 }}>
          {week.weekNumber}
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4 flex-shrink-0" style={{ minHeight: '1.5rem', height: '1.5rem' }}>
        <div className="flex items-center space-x-1">
          <BookOpen className="h-4 w-4" />
          <span>{week.sessions.length} Lab Sessions</span>
        </div>
      </div>
      
      <div className="flex items-center text-ucd-blue font-semibold group mt-auto flex-shrink-0" style={{ minHeight: '1.5rem', height: '1.5rem' }}>
        <span>{isLocked ? 'Coming Soon' : 'View Details'}</span>
        {!isLocked && (
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        )}
      </div>
      </div>
    </motion.div>
  )

  if (isLocked) {
    return <div className="cursor-not-allowed h-full w-full">{cardContent}</div>
  }

  return (
    <Link to={`/week/${week.weekNumber}`} className="h-full w-full block">
      {cardContent}
    </Link>
  )
}

export default WeekCard

