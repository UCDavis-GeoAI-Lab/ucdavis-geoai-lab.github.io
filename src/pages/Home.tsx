import { Calendar, MapPin, Users, Code } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { courseInfo, instructor, tas, weeks } from '../data/courseData'
import WeekCard from '../components/WeekCard'

const Home = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (name: string) => {
    setImageErrors(prev => ({ ...prev, [name]: true }))
  }

  return (
    <div className="w-full min-h-full">
      {/* Hero Section */}
      <section className="bg-ucd-blue text-white py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-ucd-gold rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-ucd-gold rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-ucd-gold rounded-full blur-3xl opacity-50"></div>
        </div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255, 191, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 191, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-ucd-gold-light to-white">
                Environmental Analysis Using GIS
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-2xl md:text-3xl mb-6 text-ucd-gold font-semibold tracking-wide">
                {courseInfo.code} | {courseInfo.quarter}
              </p>
            </motion.div>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Explore advanced Geographic Information Systems through hands-on Python programming 
              and interactive lab sessions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Course Information */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Lecture Info */}
            <motion.div 
              className="bg-ucd-blue text-white rounded-2xl p-10 shadow-2xl border-t-4 border-ucd-gold transform hover:scale-105 transition-transform duration-300 relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ucd-gold opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 mr-3" />
                <h2 className="text-2xl font-bold">Lecture Schedule</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{courseInfo.lecture.location}</p>
                  </div>
                </div>
                {courseInfo.lecture.schedule.map((time, idx) => (
                  <p key={idx} className="ml-7">{time}</p>
                ))}
              </div>
              </div>
            </motion.div>

            {/* Lab Info */}
            <motion.div 
              className="bg-ucd-gold text-ucd-blue rounded-2xl p-10 shadow-2xl border-t-4 border-ucd-blue transform hover:scale-105 transition-transform duration-300 relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ucd-blue opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 mr-3" />
                <h2 className="text-2xl font-bold">Lab Sections</h2>
              </div>
              <div className="space-y-4">
                {courseInfo.labSections.map((section, idx) => (
                  <div key={idx} className="border-l-4 border-ucd-blue pl-4">
                    <p className="font-bold text-lg">Section {section.section}</p>
                    <p className="text-sm mb-1">{section.location}</p>
                    {section.schedule.map((time, timeIdx) => (
                      <p key={timeIdx} className="text-sm">{time}</p>
                    ))}
                  </div>
                ))}
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructor & TAs */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-5xl font-extrabold text-ucd-blue mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative">
              Instructors
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-ucd-gold transform -skew-x-12 opacity-30"></span>
            </span>
          </motion.h2>
          
          {/* Instructor */}
          <motion.div 
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 mb-12 max-w-5xl mx-auto border-t-4 border-ucd-blue transform hover:shadow-3xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex-shrink-0">
                {imageErrors['ali'] ? (
                  <div className="bg-ucd-blue text-white rounded-full w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center flex-shrink-0 border-4 border-ucd-blue shadow-lg">
                    <Users className="h-14 w-14 sm:h-16 sm:w-16" />
                  </div>
                ) : (
                  <img 
                    src={`${import.meta.env.BASE_URL}images/Instructors/Ali_Moghimi.jpg`}
                    alt={instructor.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-ucd-blue shadow-lg"
                    onError={() => handleImageError('ali')}
                  />
                )}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-ucd-blue mb-2">
                  {instructor.name}
                  {instructor.pronouns && (
                    <span className="text-base sm:text-lg font-normal text-gray-600 ml-2 block sm:inline">
                      ({instructor.pronouns})
                    </span>
                  )}
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-4">{instructor.title}</p>
                <div className="space-y-2 text-sm sm:text-base text-gray-600">
                  <div className="flex items-center justify-center sm:justify-start">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="break-words">{instructor.office}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="break-words">{instructor.officeHours}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start">
                    <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                    <a href={`mailto:${instructor.email}`} className="text-ucd-blue hover:underline break-all">
                      {instructor.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TAs */}
          <div className="space-y-8">
            {tas.map((ta, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 max-w-5xl mx-auto border-t-4 border-ucd-gold transform hover:shadow-3xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0">
                    {ta.name === 'Mohammadreza Narimani' ? (
                      imageErrors['mohammadreza'] ? (
                        <div className="bg-ucd-gold text-ucd-blue rounded-full w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center flex-shrink-0 border-4 border-ucd-gold shadow-lg">
                          <Users className="h-14 w-14 sm:h-16 sm:w-16" />
                        </div>
                      ) : (
                        <img 
                          src={`${import.meta.env.BASE_URL}images/Instructors/Mohammadreza_Narimani.jpg`}
                          alt={ta.name}
                          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-ucd-gold shadow-lg"
                          onError={() => handleImageError('mohammadreza')}
                        />
                      )
                    ) : ta.name === 'Parastoo Farajpoor' ? (
                      imageErrors['parastoo'] ? (
                        <div className="bg-ucd-gold text-ucd-blue rounded-full w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center flex-shrink-0 border-4 border-ucd-gold shadow-lg">
                          <Users className="h-14 w-14 sm:h-16 sm:w-16" />
                        </div>
                      ) : (
                        <img 
                          src={`${import.meta.env.BASE_URL}images/Instructors/Parastoo_Farajpoor.jpg`}
                          alt={ta.name}
                          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-ucd-gold shadow-lg"
                          onError={() => handleImageError('parastoo')}
                        />
                      )
                    ) : ta.name === 'Inseon Kim' ? (
                      imageErrors['inseon'] ? (
                        <div className="bg-ucd-gold text-ucd-blue rounded-full w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center flex-shrink-0 border-4 border-ucd-gold shadow-lg">
                          <Users className="h-14 w-14 sm:h-16 sm:w-16" />
                        </div>
                      ) : (
                        <img 
                          src={`${import.meta.env.BASE_URL}images/Instructors/Inseon_Kim.png`}
                          alt={ta.name}
                          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-ucd-gold shadow-lg"
                          onError={() => handleImageError('inseon')}
                        />
                      )
                    ) : (
                      <div className="bg-ucd-gold text-ucd-blue rounded-full w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center flex-shrink-0 border-4 border-ucd-blue shadow-lg">
                        <Users className="h-14 w-14 sm:h-16 sm:w-16" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-ucd-blue mb-2">
                      {ta.name}
                      {ta.name === 'Mohammadreza Narimani' && (
                        <span className="text-base sm:text-lg font-normal text-gray-600 ml-2 block sm:inline">
                          (Web Developer)
                        </span>
                      )}
                      {ta.name === 'Inseon Kim' && (
                        <span className="text-base sm:text-lg font-normal text-gray-600 ml-2 block sm:inline">
                          (Content Developer)
                        </span>
                      )}
                      {ta.name === 'Parastoo Farajpoor' && (
                        <span className="text-base sm:text-lg font-normal text-gray-600 ml-2 block sm:inline">
                          (Content Developer)
                        </span>
                      )}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 mb-4">Section {ta.labSection} TA</p>
                    <div className="space-y-2 text-sm sm:text-base text-gray-600">
                      <div className="flex items-center justify-center sm:justify-start">
                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="break-words">{ta.officeHours}</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="break-words">{ta.location}</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start">
                        <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                        <a href={`mailto:${ta.email}`} className="text-ucd-blue hover:underline break-all">
                          {ta.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weeks Overview */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-extrabold text-ucd-blue mb-6">
              <span className="relative">
                Course Schedule
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-ucd-gold transform -skew-x-12 opacity-30"></span>
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 font-medium">
              Explore lab materials and content for all 10 weeks
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeks.map((week, idx) => (
              <motion.div
                key={week.weekNumber}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <WeekCard week={week} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

