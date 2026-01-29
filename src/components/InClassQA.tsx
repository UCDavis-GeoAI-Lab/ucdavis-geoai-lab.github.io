import React, { useState, useEffect } from 'react';
import { Users, Plus, CheckCircle2, Circle, Clock, AlertCircle, X } from 'lucide-react';
import { db } from '../firebase';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  doc, 
  updateDoc,
  deleteDoc
} from 'firebase/firestore';

interface InClassEntry {
  id: string;
  name: string;
  exerciseNumber?: string;
  question?: string;
  weekNumber: number;
  createdAt: number;
  solved: boolean;
  order: number;
}

interface InClassQAProps {
  weekNumber: number;
}

const InClassQA: React.FC<InClassQAProps> = ({ weekNumber }) => {
  const [entries, setEntries] = useState<InClassEntry[]>([]);
  const [studentName, setStudentName] = useState('');
  const [exerciseNumber, setExerciseNumber] = useState('');
  const [studentQuestion, setStudentQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminAuth, setShowAdminAuth] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [expandedEntries, setExpandedEntries] = useState<Set<string>>(new Set());

  // Load data from Firestore
  useEffect(() => {
    // Try with orderBy first, fallback to without if index missing
    let q;
    try {
      q = query(
        collection(db, "inClassQueue"),
        where("weekNumber", "==", weekNumber),
        orderBy("createdAt", "asc")
      );
    } catch (error) {
      // If orderBy fails, use simple query
      q = query(
        collection(db, "inClassQueue"),
        where("weekNumber", "==", weekNumber)
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const entriesData: InClassEntry[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        // Double-check weekNumber matches (extra safety)
        if (data.weekNumber !== weekNumber) {
          console.warn(`Entry ${doc.id} has weekNumber ${data.weekNumber}, expected ${weekNumber}. Skipping.`);
          return;
        }
        entriesData.push({ 
          id: doc.id, 
          name: data.name || '',
          exerciseNumber: data.exerciseNumber || null,
          question: data.question || null,
          weekNumber: data.weekNumber || weekNumber,
          createdAt: data.createdAt || Date.now(),
          solved: data.solved || false,
          order: data.order || 0
        } as InClassEntry);
      });
      
      // Sort: unsolved first (by createdAt), then solved (by createdAt)
      entriesData.sort((a, b) => {
        if (a.solved !== b.solved) {
          return a.solved ? 1 : -1; // Unsolved first
        }
        return a.createdAt - b.createdAt; // Then by time
      });
      
      // Reassign order numbers for unsolved entries and update in Firestore if needed
      let orderCounter = 1;
      const updatesNeeded: Array<{id: string, order: number}> = [];
      
      entriesData.forEach(entry => {
        if (!entry.solved) {
          const correctOrder = orderCounter++;
          if (entry.order !== correctOrder) {
            updatesNeeded.push({ id: entry.id, order: correctOrder });
          }
          entry.order = correctOrder;
        }
      });
      
      // Update order numbers in Firestore if they're incorrect
      if (updatesNeeded.length > 0) {
        Promise.all(updatesNeeded.map(({ id, order }) => 
          updateDoc(doc(db, "inClassQueue", id), { order })
        )).catch(error => {
          console.error("Error updating order numbers:", error);
        });
      }
      
      console.log('Loaded entries:', entriesData.length);
      setEntries(entriesData);
    }, (error) => {
      console.error("Error fetching in-class queue: ", error);
      // Try fallback query without orderBy
      if (error.code === 'failed-precondition' || error.code === 'unimplemented') {
        console.warn("Trying query without orderBy...");
        const fallbackQ = query(
          collection(db, "inClassQueue"),
          where("weekNumber", "==", weekNumber)
        );
        const fallbackUnsubscribe = onSnapshot(fallbackQ, (snapshot) => {
          const entriesData: InClassEntry[] = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            // Double-check weekNumber matches (extra safety)
            if (data.weekNumber !== weekNumber) {
              console.warn(`Entry ${doc.id} has weekNumber ${data.weekNumber}, expected ${weekNumber}. Skipping.`);
              return;
            }
            entriesData.push({ 
              id: doc.id, 
              name: data.name || '',
              exerciseNumber: data.exerciseNumber || null,
              question: data.question || null,
              weekNumber: data.weekNumber || weekNumber,
              createdAt: data.createdAt || Date.now(),
              solved: data.solved || false,
              order: data.order || 0
            } as InClassEntry);
          });
          entriesData.sort((a, b) => {
            if (a.solved !== b.solved) {
              return a.solved ? 1 : -1;
            }
            return a.createdAt - b.createdAt;
          });
          let orderCounter = 1;
          const updatesNeeded: Array<{id: string, order: number}> = [];
          
          entriesData.forEach(entry => {
            if (!entry.solved) {
              const correctOrder = orderCounter++;
              if (entry.order !== correctOrder) {
                updatesNeeded.push({ id: entry.id, order: correctOrder });
              }
              entry.order = correctOrder;
            }
          });
          
          // Update order numbers in Firestore if they're incorrect
          if (updatesNeeded.length > 0) {
            Promise.all(updatesNeeded.map(({ id, order }) => 
              updateDoc(doc(db, "inClassQueue", id), { order })
            )).catch(error => {
              console.error("Error updating order numbers:", error);
            });
          }
          
          console.log('Loaded entries (fallback):', entriesData.length);
          setEntries(entriesData);
        });
        return () => fallbackUnsubscribe();
      }
    });

    return () => unsubscribe();
  }, [weekNumber]);

  // Check if admin (triple click on title)
  const [clickCount, setClickCount] = useState(0);
  const handleTitleClick = () => {
    if (isAdmin) return;
    
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 3) {
        setShowAdminAuth(true);
        return 0;
      }
      return newCount;
    });

    setTimeout(() => setClickCount(0), 2000);
  };

  const handleAdminAuth = () => {
    if (adminPassword === 'admin182') {
      setIsAdmin(true);
      setShowAdminAuth(false);
      setAdminPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const handleAddEntry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;

      setIsSubmitting(true);
    try {
      // Calculate next order number based on unsolved entries
      const unsolvedEntries = entries.filter(e => !e.solved);
      const nextOrder = unsolvedEntries.length > 0 
        ? Math.max(...unsolvedEntries.map(e => e.order || 0)) + 1 
        : 1;

      // Ensure weekNumber is properly set
      const entryWeekNumber = weekNumber || 1;
      
      await addDoc(collection(db, "inClassQueue"), {
        name: studentName.trim(),
        exerciseNumber: exerciseNumber.trim() || null,
        question: studentQuestion.trim() || null,
        weekNumber: entryWeekNumber, // Explicitly set weekNumber to ensure separation
        createdAt: Date.now(),
        solved: false,
        order: nextOrder
      });

      setStudentName('');
      setExerciseNumber('');
      setStudentQuestion('');
      setShowAddForm(false);
    } catch (error) {
      console.error("Error adding entry: ", error);
      alert("Error adding your name. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleSolved = async (entryId: string, currentSolved: boolean, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }

    try {
      const newSolvedStatus = !currentSolved;
      
      // Update the solved status
      await updateDoc(doc(db, "inClassQueue", entryId), {
        solved: newSolvedStatus
      });

      // If marking as unsolved, we need to recalculate order numbers
      // The useEffect will handle this automatically when data updates
      // But we can also update the order here for immediate feedback
      if (!newSolvedStatus) {
        // When marking as unsolved, assign it the next available order number
        const unsolvedEntries = entries.filter(e => !e.solved && e.id !== entryId);
        const maxOrder = unsolvedEntries.length > 0 
          ? Math.max(...unsolvedEntries.map(e => e.order || 0)) 
          : 0;
        
        await updateDoc(doc(db, "inClassQueue", entryId), {
          order: maxOrder + 1
        });
      }
    } catch (error) {
      console.error("Error updating entry: ", error);
      alert("Error updating entry. Please try again.");
    }
  };

  const handleDeleteEntry = async (entryId: string) => {
    if (!isAdmin) return;
    
    if (!confirm('Are you sure you want to delete this entry?')) return;

    try {
      await deleteDoc(doc(db, "inClassQueue", entryId));
    } catch (error) {
      console.error("Error deleting entry: ", error);
      alert("Error deleting entry. Please try again.");
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const toggleExpand = (entryId: string) => {
    setExpandedEntries(prev => {
      const newSet = new Set(prev);
      if (newSet.has(entryId)) {
        newSet.delete(entryId);
      } else {
        newSet.add(entryId);
      }
      return newSet;
    });
  };

  const truncateText = (text: string, maxLength: number): string => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const unsolvedEntries = entries.filter(e => !e.solved);
  const solvedEntries = entries.filter(e => e.solved);

  return (
    <div className="mt-16 border-t border-gray-200 pt-12">
      {/* Admin Auth Modal */}
      {showAdminAuth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Admin Authentication</h3>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-ucd-blue focus:border-transparent outline-none"
              placeholder="Enter admin password"
              autoFocus
              onKeyPress={(e) => e.key === 'Enter' && handleAdminAuth()}
            />
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => {
                  setShowAdminAuth(false);
                  setAdminPassword('');
                }} 
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button 
                onClick={handleAdminAuth}
                className="px-4 py-2 bg-ucd-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center space-x-3 mb-8 cursor-pointer select-none" onClick={handleTitleClick}>
        <Users className={`h-8 w-8 ${isAdmin ? 'text-red-600' : 'text-ucd-blue'}`} />
        <div>
          <h2 className={`text-3xl font-bold ${isAdmin ? 'text-red-600' : 'text-ucd-blue'}`}>
            In-Class Q&A {isAdmin && '(Admin Mode)'}
          </h2>
          <div className="flex items-center space-x-2 mt-1">
            <span className="bg-ucd-blue text-white px-3 py-1 rounded-lg font-bold text-sm">
              Week {weekNumber}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-6 max-w-3xl">
        Add your name to the queue if you have a question during class. The instructor will call on students in order.
      </p>

      {/* Add Entry Form */}
      {!showAddForm ? (
        <button
          onClick={() => setShowAddForm(true)}
          className="mb-8 inline-flex items-center px-6 py-3 bg-ucd-gold text-ucd-blue rounded-xl hover:bg-yellow-400 transition-colors font-semibold shadow-md hover:shadow-lg"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add My Name to Queue
        </button>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Add to Queue</h3>
            <button
              onClick={() => {
                setShowAddForm(false);
                setStudentName('');
                setStudentQuestion('');
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <form onSubmit={handleAddEntry} className="space-y-4">
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="studentName"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ucd-blue focus:border-transparent transition-colors"
                placeholder="Enter your name"
                required
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="exerciseNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Exercise Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="exerciseNumber"
                value={exerciseNumber}
                onChange={(e) => setExerciseNumber(e.target.value)}
                className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ucd-blue focus:border-transparent transition-colors"
                placeholder="e.g., Exercise 1, Exercise 2.3, etc."
                required
              />
            </div>
            <div>
              <label htmlFor="studentQuestion" className="block text-sm font-medium text-gray-700 mb-1">
                Question <span className="text-gray-500 text-xs">(Brief description)</span>
              </label>
              <textarea
                id="studentQuestion"
                value={studentQuestion}
                onChange={(e) => setStudentQuestion(e.target.value)}
                className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ucd-blue focus:border-transparent transition-colors h-24 resize-none"
                placeholder="Briefly describe your question..."
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setStudentName('');
                  setExerciseNumber('');
                  setStudentQuestion('');
                }}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg border border-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-ucd-blue text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Adding...
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Queue
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Queue Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header - Hidden on mobile */}
        <div className="hidden md:block bg-gradient-to-r from-ucd-blue to-blue-700 text-white px-4 lg:px-6 py-4">
          <div className="grid grid-cols-12 gap-2 lg:gap-4 items-center font-semibold text-xs lg:text-sm">
            <div className="col-span-1 text-center">#</div>
            <div className="col-span-3">Name</div>
            <div className="col-span-2 text-center">Exercise</div>
            <div className="col-span-4">Question</div>
            <div className="col-span-1 text-center">Time</div>
            <div className="col-span-1 text-center">Solved</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {unsolvedEntries.length === 0 && solvedEntries.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-500">
              <Users className="h-12 w-12 mx-auto mb-3 text-gray-300" />
              <p>No one in the queue yet. Be the first to add your name!</p>
            </div>
          ) : (
            <>
              {/* Unsolved Entries */}
              {unsolvedEntries.map((entry, index) => {
                const isCurrent = index === 0;
                const isWaitlist = index > 0;
                
                return (
                  <div
                    key={entry.id}
                    className={`px-4 lg:px-6 py-4 transition-all duration-300 ${
                      isCurrent 
                        ? 'bg-gradient-to-r from-ucd-gold/25 via-ucd-gold/20 to-ucd-gold/25 border-l-4 border-ucd-gold shadow-lg animate-pulse-border' 
                        : isWaitlist
                        ? 'bg-blue-50/40 hover:bg-blue-50/60 border-l-4 border-blue-400'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {/* Desktop Layout */}
                    <div className="hidden md:grid grid-cols-12 gap-2 lg:gap-4 items-center">
                      <div className="col-span-1 flex items-center justify-center">
                        {isCurrent ? (
                          <div className="bg-ucd-gold text-ucd-blue rounded-full w-8 lg:w-10 h-8 lg:h-10 flex items-center justify-center font-bold text-sm lg:text-base shadow-lg animate-pulse-gold">
                            {entry.order || index + 1}
                          </div>
                        ) : (
                          <div className="bg-blue-200 text-blue-800 rounded-full w-7 lg:w-8 h-7 lg:h-8 flex items-center justify-center font-semibold text-xs lg:text-sm">
                            {entry.order || index + 1}
                          </div>
                        )}
                      </div>
                      <div className={`col-span-3 font-medium text-sm lg:text-base ${
                        isCurrent ? 'text-ucd-blue font-bold' : 'text-gray-900'
                      }`}>
                        <div className="flex flex-wrap items-center gap-1 lg:gap-2">
                          <span className="break-words">{entry.name}</span>
                          {isCurrent && (
                            <span className="text-xs bg-ucd-gold text-ucd-blue px-1.5 lg:px-2 py-0.5 lg:py-1 rounded-full font-bold animate-pulse whitespace-nowrap">
                              CURRENT
                            </span>
                          )}
                          {isWaitlist && (
                            <span className="text-xs bg-blue-200 text-blue-800 px-1.5 lg:px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
                              WAITLIST
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-span-2 text-center">
                        <span 
                          className={`inline-block px-2 lg:px-3 py-0.5 lg:py-1 rounded-lg font-semibold text-xs lg:text-sm cursor-pointer hover:opacity-80 transition-opacity ${
                            isCurrent 
                              ? 'bg-ucd-gold/30 text-ucd-blue border-2 border-ucd-gold' 
                              : 'bg-blue-100 text-blue-800 border border-blue-300'
                          }`}
                          onClick={() => toggleExpand(entry.id)}
                          title={entry.exerciseNumber && entry.exerciseNumber.length > 15 ? 'Click to see full exercise number' : ''}
                        >
                          {expandedEntries.has(entry.id) || !entry.exerciseNumber || entry.exerciseNumber.length <= 15
                            ? (entry.exerciseNumber || '—')
                            : truncateText(entry.exerciseNumber, 15)}
                        </span>
                      </div>
                      <div 
                        className={`col-span-4 text-xs lg:text-sm cursor-pointer hover:underline ${
                          isCurrent ? 'text-gray-700 font-medium' : 'text-gray-600'
                        }`}
                        onClick={() => toggleExpand(entry.id)}
                        title={entry.question && entry.question.length > 50 ? 'Click to see full question' : ''}
                      >
                        {expandedEntries.has(entry.id) || !entry.question || entry.question.length <= 50
                          ? (entry.question || (
                              <span className="text-gray-400 italic">No question provided</span>
                            ))
                          : truncateText(entry.question, 50)}
                      </div>
                      <div className="col-span-1 text-center text-xs text-gray-500">
                        {formatTime(entry.createdAt)}
                      </div>
                      <div className="col-span-1 flex items-center justify-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleSolved(entry.id, entry.solved, e);
                          }}
                          className={`p-1.5 lg:p-2 transition-colors ${
                            isCurrent 
                              ? 'text-gray-500 hover:text-green-600' 
                              : 'text-gray-400 hover:text-green-600'
                          }`}
                          title="Mark as Solved"
                        >
                          <Circle className="h-4 w-4 lg:h-5 lg:w-5" />
                        </button>
                        {isAdmin && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteEntry(entry.id);
                            }}
                            className="p-1.5 lg:p-2 text-gray-400 hover:text-red-600 transition-colors ml-1 lg:ml-2"
                            title="Delete Entry (Admin)"
                          >
                            <X className="h-3 w-3 lg:h-4 lg:w-4" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                          {isCurrent ? (
                            <div className="bg-ucd-gold text-ucd-blue rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg animate-pulse-gold flex-shrink-0">
                              {entry.order || index + 1}
                            </div>
                          ) : (
                            <div className="bg-blue-200 text-blue-800 rounded-full w-7 h-7 flex items-center justify-center font-semibold text-xs flex-shrink-0">
                              {entry.order || index + 1}
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className={`font-medium text-sm ${
                              isCurrent ? 'text-ucd-blue font-bold' : 'text-gray-900'
                            }`}>
                              {entry.name}
                            </div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {isCurrent && (
                                <span className="text-xs bg-ucd-gold text-ucd-blue px-1.5 py-0.5 rounded-full font-bold animate-pulse">
                                  CURRENT
                                </span>
                              )}
                              {isWaitlist && (
                                <span className="text-xs bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded-full font-semibold">
                                  WAITLIST
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleSolved(entry.id, entry.solved, e);
                            }}
                            className="p-2 text-gray-400 hover:text-green-600 transition-colors"
                            title="Mark as Solved"
                          >
                            <Circle className="h-5 w-5" />
                          </button>
                          {isAdmin && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteEntry(entry.id);
                              }}
                              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                              title="Delete Entry (Admin)"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </div>
                      
                      <div className="pl-10 space-y-2">
                        <div>
                          <span className="text-xs font-semibold text-gray-600">Exercise: </span>
                          <span 
                            className={`inline-block px-2 py-1 rounded-lg font-semibold text-xs cursor-pointer hover:opacity-80 transition-opacity ${
                              isCurrent 
                                ? 'bg-ucd-gold/30 text-ucd-blue border border-ucd-gold' 
                                : 'bg-blue-100 text-blue-800 border border-blue-300'
                            }`}
                            onClick={() => toggleExpand(entry.id)}
                          >
                            {expandedEntries.has(entry.id) || !entry.exerciseNumber || entry.exerciseNumber.length <= 20
                              ? (entry.exerciseNumber || '—')
                              : truncateText(entry.exerciseNumber, 20)}
                          </span>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-gray-600">Question: </span>
                          <span 
                            className={`text-xs cursor-pointer hover:underline ${
                              isCurrent ? 'text-gray-700 font-medium' : 'text-gray-600'
                            }`}
                            onClick={() => toggleExpand(entry.id)}
                          >
                            {expandedEntries.has(entry.id) || !entry.question || entry.question.length <= 60
                              ? (entry.question || (
                                  <span className="text-gray-400 italic">No question provided</span>
                                ))
                              : truncateText(entry.question, 60)}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {formatTime(entry.createdAt)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Solved Entries */}
              {solvedEntries.length > 0 && (
                <>
                  <div className="bg-green-50/50 px-6 py-2 border-t-2 border-green-300">
                    <div className="flex items-center space-x-2 text-green-700">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-semibold">
                        Solved Questions ({solvedEntries.length})
                      </span>
                    </div>
                  </div>
                  {solvedEntries.map((entry) => (
                    <div
                      key={entry.id}
                      className="px-4 lg:px-6 py-4 bg-green-50/30 hover:bg-green-50/50 transition-colors border-l-4 border-green-400"
                    >
                      {/* Desktop Layout */}
                      <div className="hidden md:grid grid-cols-12 gap-2 lg:gap-4 items-center">
                        <div className="col-span-1 flex items-center justify-center">
                          <div className="bg-green-200 text-green-800 rounded-full w-7 lg:w-8 h-7 lg:h-8 flex items-center justify-center font-semibold text-xs lg:text-sm">
                            ✓
                          </div>
                        </div>
                        <div className="col-span-3 font-medium text-green-800 text-sm lg:text-base">
                          <div className="flex flex-wrap items-center gap-1 lg:gap-2">
                            <span className="break-words">{entry.name}</span>
                            <span className="text-xs bg-green-200 text-green-800 px-1.5 lg:px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
                              SOLVED
                            </span>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <span 
                            className="inline-block px-2 lg:px-3 py-0.5 lg:py-1 rounded-lg font-semibold text-xs lg:text-sm cursor-pointer hover:opacity-80 transition-opacity bg-green-100 text-green-800 border border-green-300"
                            onClick={() => toggleExpand(entry.id)}
                            title={entry.exerciseNumber && entry.exerciseNumber.length > 15 ? 'Click to see full exercise number' : ''}
                          >
                            {expandedEntries.has(entry.id) || !entry.exerciseNumber || entry.exerciseNumber.length <= 15
                              ? (entry.exerciseNumber || '—')
                              : truncateText(entry.exerciseNumber, 15)}
                          </span>
                        </div>
                        <div 
                          className={`col-span-4 text-xs lg:text-sm cursor-pointer hover:underline text-green-700`}
                          onClick={() => toggleExpand(entry.id)}
                          title={entry.question && entry.question.length > 50 ? 'Click to see full question' : ''}
                        >
                          {expandedEntries.has(entry.id) || !entry.question || entry.question.length <= 50
                            ? (entry.question || (
                                <span className="text-green-500 italic">No question provided</span>
                              ))
                            : truncateText(entry.question, 50)}
                        </div>
                        <div className="col-span-1 text-center text-xs text-green-600">
                          {formatTime(entry.createdAt)}
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleSolved(entry.id, true, e);
                            }}
                            className="p-1.5 lg:p-2 text-green-600 hover:text-green-700 transition-colors"
                            title="Click to mark as unsolved"
                          >
                            <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5" />
                          </button>
                          {isAdmin && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteEntry(entry.id);
                              }}
                              className="p-1.5 lg:p-2 text-gray-400 hover:text-red-600 transition-colors ml-1 lg:ml-2"
                              title="Delete Entry (Admin)"
                            >
                              <X className="h-3 w-3 lg:h-4 lg:w-4" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Mobile Layout */}
                      <div className="md:hidden space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-2 flex-1 min-w-0">
                            <div className="bg-green-200 text-green-800 rounded-full w-7 h-7 flex items-center justify-center font-semibold text-xs flex-shrink-0">
                              ✓
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-sm text-green-800">
                                {entry.name}
                              </div>
                              <div className="mt-1">
                                <span className="text-xs bg-green-200 text-green-800 px-1.5 py-0.5 rounded-full font-semibold">
                                  SOLVED
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleSolved(entry.id, true, e);
                              }}
                              className="p-2 text-green-600 hover:text-green-700 transition-colors"
                              title="Click to mark as unsolved"
                            >
                              <CheckCircle2 className="h-5 w-5" />
                            </button>
                            {isAdmin && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteEntry(entry.id);
                                }}
                                className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                                title="Delete Entry (Admin)"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </div>
                        
                        <div className="pl-9 space-y-2">
                          <div>
                            <span className="text-xs font-semibold text-gray-600">Exercise: </span>
                            <span 
                              className="inline-block px-2 py-1 rounded-lg font-semibold text-xs cursor-pointer hover:opacity-80 transition-opacity bg-green-100 text-green-800 border border-green-300"
                              onClick={() => toggleExpand(entry.id)}
                            >
                              {expandedEntries.has(entry.id) || !entry.exerciseNumber || entry.exerciseNumber.length <= 20
                                ? (entry.exerciseNumber || '—')
                                : truncateText(entry.exerciseNumber, 20)}
                            </span>
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-gray-600">Question: </span>
                            <span 
                              className="text-xs cursor-pointer hover:underline text-green-700"
                              onClick={() => toggleExpand(entry.id)}
                            >
                              {expandedEntries.has(entry.id) || !entry.question || entry.question.length <= 60
                                ? (entry.question || (
                                    <span className="text-green-500 italic">No question provided</span>
                                  ))
                                : truncateText(entry.question, 60)}
                            </span>
                          </div>
                          <div className="text-xs text-green-600">
                            {formatTime(entry.createdAt)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Info Box */}
      {unsolvedEntries.length > 0 && (
        <div className="mt-6 bg-blue-50 border-l-4 border-ucd-blue p-4 rounded-lg">
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-ucd-blue mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-700">
                <strong>{unsolvedEntries.length}</strong> {unsolvedEntries.length === 1 ? 'student' : 'students'} waiting in queue.
                {unsolvedEntries.length > 0 && (
                  <span className="ml-2">
                    <strong>{unsolvedEntries[0].name}</strong> is next.
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InClassQA;
