import { Link } from 'react-router-dom'
import { BookOpen, ArrowRight, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Week } from '../data/courseData'

interface WeekCardProps {
  week: Week
}

const WeekCard = ({ week }: WeekCardProps) => {
  const isLocked = week.weekNumber > 2
  
  const cardContent = (
    <motion.div 
      className={`bg-white rounded-2xl shadow-xl p-8 card-hover border-l-4 border-ucd-gold relative overflow-hidden ${
        isLocked ? 'opacity-75' : ''
      }`}
      whileHover={isLocked ? {} : { scale: 1.03, y: -5 }}
      whileTap={isLocked ? {} : { scale: 0.98 }}
    >
      {!isLocked && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-ucd-gold opacity-5 rounded-full -mr-16 -mt-16"></div>
      )}
      <div className="relative z-10">
      {isLocked && (
        <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md border border-gray-200">
          <Lock className="h-4 w-4 text-gray-500" />
        </div>
      )}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-ucd-blue mb-2 flex items-center space-x-2">
            <span>{week.title}</span>
          </h3>
          <p className="text-gray-600">{week.description}</p>
        </div>
        <div className="bg-ucd-gold text-ucd-blue rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
          {week.weekNumber}
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-1">
          <BookOpen className="h-4 w-4" />
          <span>{week.sessions.length} Lab Sessions</span>
        </div>
      </div>
      
      <div className="flex items-center text-ucd-blue font-semibold group">
        <span>{isLocked ? 'Coming Soon' : 'View Details'}</span>
        {!isLocked && (
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        )}
      </div>
      </div>
    </motion.div>
  )

  if (isLocked) {
    return <div className="cursor-not-allowed">{cardContent}</div>
  }

  return (
    <Link to={`/week/${week.weekNumber}`}>
      {cardContent}
    </Link>
  )
}

export default WeekCard

