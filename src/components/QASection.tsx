import React, { useState, useEffect } from 'react';
import { MessageSquare, Trash2, User, Reply, Send, X, AlertTriangle } from 'lucide-react';
import { db } from '../firebase';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  deleteDoc, 
  doc, 
  updateDoc, 
  arrayUnion, 
  arrayRemove 
} from 'firebase/firestore';

interface ReplyData {
  id: string;
  author: string;
  content: string;
  createdAt: number;
}

interface QuestionData {
  id: string;
  author: string;
  content: string;
  createdAt: number;
  replies: ReplyData[];
  weekNumber: number;
}

interface QASectionProps {
  weekNumber: number;
}

// Confirmation Modal Component
interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  isDeleting: boolean;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  isDeleting 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{message}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ucd-blue transition-colors"
            disabled={isDeleting}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors flex items-center"
            disabled={isDeleting}
          >
            {isDeleting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                Deleting...
              </>
            ) : (
              'Delete'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const QASection: React.FC<QASectionProps> = ({ weekNumber }) => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
  const [replyAuthor, setReplyAuthor] = useState<{ [key: string]: string }>({});
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ type: 'question' | 'reply', id: string, replyData?: ReplyData } | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Load data from Firestore
  useEffect(() => {
    // Create a query against the collection.
    const q = query(
      collection(db, "questions"),
      where("weekNumber", "==", weekNumber),
      orderBy("createdAt", "desc")
    );

    // Set up a listener for real-time updates
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const questionsData: QuestionData[] = [];
      snapshot.forEach((doc) => {
        questionsData.push({ id: doc.id, ...doc.data() } as QuestionData);
      });
      setQuestions(questionsData);
    }, (error) => {
      console.error("Error fetching questions: ", error);
    });

    return () => unsubscribe();
  }, [weekNumber]);

  const handleAddQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim() || !authorName.trim()) return;

    try {
      await addDoc(collection(db, "questions"), {
        author: authorName,
        content: newQuestion,
        createdAt: Date.now(),
        replies: [],
        weekNumber: weekNumber
      });
      setNewQuestion('');
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error posting question. Please try again.");
    }
  };

  const handleAddReply = async (questionId: string) => {
    const text = replyText[questionId];
    const author = replyAuthor[questionId];
    
    if (!text?.trim() || !author?.trim()) return;

    const newReply: ReplyData = {
      id: Date.now().toString(),
      author: author,
      content: text,
      createdAt: Date.now()
    };

    try {
      const questionRef = doc(db, "questions", questionId);
      await updateDoc(questionRef, {
        replies: arrayUnion(newReply)
      });

      setReplyText({ ...replyText, [questionId]: '' });
      setActiveReplyId(null);
    } catch (e) {
      console.error("Error adding reply: ", e);
      alert("Error posting reply. Please try again.");
    }
  };

  const confirmDelete = (type: 'question' | 'reply', id: string, replyData?: ReplyData) => {
    setItemToDelete({ type, id, replyData });
    setModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!itemToDelete) return;

    setIsDeleting(true);
    try {
      if (itemToDelete.type === 'question') {
        await deleteDoc(doc(db, "questions", itemToDelete.id));
      } else if (itemToDelete.type === 'reply' && itemToDelete.replyData) {
        const questionRef = doc(db, "questions", itemToDelete.id);
        await updateDoc(questionRef, {
          replies: arrayRemove(itemToDelete.replyData)
        });
      }
    } catch (e) {
      console.error("Error deleting item: ", e);
      alert("Error deleting item. Please try again.");
    } finally {
      setIsDeleting(false);
      setModalOpen(false);
      setItemToDelete(null);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="mt-16 border-t border-gray-200 pt-12">
      <ConfirmationModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title={itemToDelete?.type === 'question' ? 'Delete Question' : 'Delete Reply'}
        message={itemToDelete?.type === 'question' 
          ? 'Are you sure you want to delete this question? This action cannot be undone.' 
          : 'Are you sure you want to delete this reply? This action cannot be undone.'}
        isDeleting={isDeleting}
      />

      <div className="flex items-center space-x-3 mb-8">
        <MessageSquare className="h-8 w-8 text-ucd-blue" />
        <h2 className="text-3xl font-bold text-ucd-blue">Q&A Discussion</h2>
      </div>

      {/* New Question Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Ask a Question</h3>
        <form onSubmit={handleAddQuestion} className="space-y-4">
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              id="author"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ucd-blue focus:border-transparent transition-colors"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">Question</label>
            <textarea
              id="question"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ucd-blue focus:border-transparent transition-colors h-32 resize-none"
              placeholder="What would you like to ask?"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2 bg-ucd-blue text-white rounded-lg hover:bg-ucd-blue-dark transition-colors font-medium"
          >
            <Send className="h-4 w-4 mr-2" />
            Post Question
          </button>
        </form>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {questions.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500">No questions yet. Be the first to ask!</p>
          </div>
        ) : (
          questions.map((question) => (
            <div key={question.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-ucd-gold/10 p-2 rounded-full">
                      <User className="h-6 w-6 text-ucd-gold-dark" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{question.author}</h4>
                      <p className="text-xs text-gray-500">{formatDate(question.createdAt)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => confirmDelete('question', question.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    title="Delete question"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                
                <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                  {question.content}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setActiveReplyId(activeReplyId === question.id ? null : question.id)}
                    className="inline-flex items-center text-ucd-blue hover:text-ucd-blue-light font-medium text-sm transition-colors"
                  >
                    <Reply className="h-4 w-4 mr-2" />
                    {activeReplyId === question.id ? 'Cancel Reply' : 'Reply'}
                  </button>
                  <span className="text-sm text-gray-500">
                    {question.replies.length} {question.replies.length === 1 ? 'Reply' : 'Replies'}
                  </span>
                </div>
              </div>

              {/* Replies Section */}
              {(activeReplyId === question.id || question.replies.length > 0) && (
                <div className="bg-gray-50 p-6 border-t border-gray-100">
                  {/* Reply Form */}
                  {activeReplyId === question.id && (
                    <div className="mb-8 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h5 className="text-sm font-semibold text-gray-700 mb-3">Write a reply</h5>
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={replyAuthor[question.id] || ''}
                          onChange={(e) => setReplyAuthor({ ...replyAuthor, [question.id]: e.target.value })}
                          className="w-full px-3 py-2 bg-white text-gray-900 rounded border border-gray-300 focus:outline-none focus:border-ucd-blue text-sm"
                          placeholder="Your Name"
                        />
                        <textarea
                          value={replyText[question.id] || ''}
                          onChange={(e) => setReplyText({ ...replyText, [question.id]: e.target.value })}
                          className="w-full px-3 py-2 bg-white text-gray-900 rounded border border-gray-300 focus:outline-none focus:border-ucd-blue text-sm h-24 resize-none"
                          placeholder="Write your reply..."
                        />
                        <div className="flex justify-end">
                          <button
                            onClick={() => handleAddReply(question.id)}
                            className="px-4 py-2 bg-ucd-blue text-white text-sm rounded hover:bg-ucd-blue-light transition-colors"
                          >
                            Post Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Replies List */}
                  <div className="space-y-4">
                    {question.replies.map((reply) => (
                      <div key={reply.id} className="flex space-x-4 group">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200">
                            <span className="text-xs font-bold text-ucd-blue">
                              {reply.author.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="bg-white p-4 rounded-lg rounded-tl-none border border-gray-200 shadow-sm relative">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-semibold text-sm text-gray-900">{reply.author}</span>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-gray-500">{formatDate(reply.createdAt)}</span>
                                <button
                                  onClick={() => confirmDelete('reply', question.id, reply)}
                                  className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                                  title="Delete reply"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </button>
                              </div>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{reply.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default QASection;
