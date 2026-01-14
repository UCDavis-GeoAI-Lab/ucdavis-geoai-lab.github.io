import React, { useState, useEffect } from 'react';
import { MessageSquare, User, Reply, Send, X, Edit2, Check, Trash2, AlertTriangle } from 'lucide-react';
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
  arrayUnion,
  deleteDoc,
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

// Preview Modal Component
interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  onConfirm: () => void;
  author: string;
  content: string;
  isSubmitting: boolean;
  title: string;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ 
  isOpen, 
  onClose, 
  onEdit, 
  onConfirm, 
  author, 
  content,
  isSubmitting,
  title
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">Please review your submission before posting.</p>
        </div>
        
        <div className="p-6 space-y-5">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Author Name</span>
            <div className="mt-1 flex items-center space-x-2 text-gray-900 font-medium">
              <div className="w-6 h-6 rounded-full bg-ucd-blue/10 flex items-center justify-center text-ucd-blue text-xs">
                <User className="w-3 h-3" />
              </div>
              <span>{author}</span>
            </div>
          </div>
          
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Content</span>
            <div className="mt-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{content}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
          <button
            onClick={onEdit}
            className="px-4 py-2 bg-white text-ucd-blue font-medium rounded-lg border border-ucd-blue hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors flex items-center"
            disabled={isSubmitting}
          >
            <Edit2 className="w-4 h-4 mr-2" />
            Edit
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-ucd-blue text-white font-medium rounded-lg hover:bg-ucd-blue-light focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors flex items-center shadow-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                Posting...
              </>
            ) : (
              <>
                <Check className="w-4 h-4 mr-2" />
                Confirm Post
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// Admin Auth Modal Component
interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuth: (password: string) => void;
}

const AdminAuthModal: React.FC<AdminAuthModalProps> = ({ isOpen, onClose, onAuth }) => {
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Admin Authentication</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-ucd-blue focus:border-transparent outline-none"
          placeholder="Enter admin password"
          autoFocus
        />
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
          <button 
            onClick={() => onAuth(password)}
            className="px-4 py-2 bg-ucd-blue text-white rounded-lg hover:bg-ucd-blue-dark transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

// Delete Confirmation Modal
interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isDeleting: boolean;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({ isOpen, onClose, onConfirm, isDeleting }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 border-l-4 border-red-500">
        <div className="flex items-start mb-4">
          <AlertTriangle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-gray-900">Confirm Deletion</h3>
            <p className="text-gray-600 text-sm mt-1">Are you sure you want to delete this item? This action cannot be undone.</p>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button 
            onClick={onClose} 
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg border border-gray-300"
            disabled={isDeleting}
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center"
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
};

const QASection: React.FC<QASectionProps> = ({ weekNumber }) => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  
  // Form inputs
  const [newQuestion, setNewQuestion] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
  const [replyAuthor, setReplyAuthor] = useState<{ [key: string]: string }>({});
  
  // UI State
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Admin State
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminAuth, setShowAdminAuth] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Deletion State
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    type: 'question' | 'reply';
    id: string;
    replyData?: ReplyData;
  }>({
    isOpen: false,
    type: 'question',
    id: ''
  });
  const [isDeleting, setIsDeleting] = useState(false);

  // Preview Modal State
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean;
    type: 'question' | 'reply';
    author: string;
    content: string;
    questionId?: string; 
  }>({
    isOpen: false,
    type: 'question',
    author: '',
    content: ''
  });

  // Admin access secret trigger (triple click on title)
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

    // Reset click count after 2 seconds
    setTimeout(() => setClickCount(0), 2000);
  };

  const handleAdminAuth = (password: string) => {
    if (password === 'admin182') { // Simple password for now
      setIsAdmin(true);
      setShowAdminAuth(false);
    } else {
      alert('Incorrect password');
    }
  };

  // Load data from Firestore
  useEffect(() => {
    const q = query(
      collection(db, "questions"),
      where("weekNumber", "==", weekNumber),
      orderBy("createdAt", "desc")
    );

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

  // Handle Question Submission Flow
  const handleQuestionSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim() || !authorName.trim()) return;

    setPreviewModal({
      isOpen: true,
      type: 'question',
      author: authorName,
      content: newQuestion
    });
  };

  const confirmPostQuestion = async () => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "questions"), {
        author: authorName,
        content: newQuestion,
        createdAt: Date.now(),
        replies: [],
        weekNumber: weekNumber
      });
      setNewQuestion('');
      setPreviewModal({ ...previewModal, isOpen: false });
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error posting question. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Reply Submission Flow
  const handleReplySubmitClick = (questionId: string) => {
    const text = replyText[questionId];
    const author = replyAuthor[questionId];
    
    if (!text?.trim() || !author?.trim()) return;

    setPreviewModal({
      isOpen: true,
      type: 'reply',
      author: author,
      content: text,
      questionId: questionId
    });
  };

  const confirmPostReply = async () => {
    if (!previewModal.questionId) return;
    
    setIsSubmitting(true);
    const newReply: ReplyData = {
      id: Date.now().toString(),
      author: previewModal.author,
      content: previewModal.content,
      createdAt: Date.now()
    };

    try {
      const questionRef = doc(db, "questions", previewModal.questionId);
      await updateDoc(questionRef, {
        replies: arrayUnion(newReply)
      });

      setReplyText({ ...replyText, [previewModal.questionId]: '' });
      setActiveReplyId(null);
      setPreviewModal({ ...previewModal, isOpen: false });
    } catch (e) {
      console.error("Error adding reply: ", e);
      alert("Error posting reply. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Deletion Handlers
  const handleDeleteClick = (type: 'question' | 'reply', id: string, replyData?: ReplyData) => {
    setDeleteModal({
      isOpen: true,
      type,
      id,
      replyData
    });
  };

  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      if (deleteModal.type === 'question') {
        await deleteDoc(doc(db, "questions", deleteModal.id));
      } else if (deleteModal.type === 'reply' && deleteModal.replyData) {
        const questionRef = doc(db, "questions", deleteModal.id);
        await updateDoc(questionRef, {
          replies: arrayRemove(deleteModal.replyData)
        });
      }
    } catch (e) {
      console.error("Error deleting item: ", e);
      alert("Error deleting item. Please try again.");
    } finally {
      setIsDeleting(false);
      setDeleteModal({ ...deleteModal, isOpen: false });
    }
  };

  // Modal Close Handlers
  const handleClosePreviewModal = () => {
    setPreviewModal({ ...previewModal, isOpen: false });
  };

  const handleEditModal = () => {
    setPreviewModal({ ...previewModal, isOpen: false });
  };

  const handleConfirmPreviewModal = () => {
    if (previewModal.type === 'question') {
      confirmPostQuestion();
    } else {
      confirmPostReply();
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
      {/* Modals */}
      <PreviewModal 
        isOpen={previewModal.isOpen}
        onClose={handleClosePreviewModal}
        onEdit={handleEditModal}
        onConfirm={handleConfirmPreviewModal}
        author={previewModal.author}
        content={previewModal.content}
        isSubmitting={isSubmitting}
        title={previewModal.type === 'question' ? 'Confirm Question' : 'Confirm Reply'}
      />

      <AdminAuthModal 
        isOpen={showAdminAuth}
        onClose={() => setShowAdminAuth(false)}
        onAuth={handleAdminAuth}
      />

      <DeleteConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ ...deleteModal, isOpen: false })}
        onConfirm={handleConfirmDelete}
        isDeleting={isDeleting}
      />

      <div className="flex items-center space-x-3 mb-8 cursor-pointer select-none" onClick={handleTitleClick}>
        <MessageSquare className={`h-8 w-8 ${isAdmin ? 'text-red-600' : 'text-ucd-blue'}`} />
        <h2 className={`text-3xl font-bold ${isAdmin ? 'text-red-600' : 'text-ucd-blue'}`}>
          Q&A Discussion {isAdmin && '(Admin Mode)'}
        </h2>
      </div>

      {/* New Question Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Ask a Question</h3>
        <form onSubmit={handleQuestionSubmitClick} className="space-y-4">
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
            Review & Post
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
                  {isAdmin && (
                    <button
                      onClick={() => handleDeleteClick('question', question.id)}
                      className="text-gray-400 hover:text-red-500 p-1"
                      title="Delete Question (Admin)"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
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
                            onClick={() => handleReplySubmitClick(question.id)}
                            className="px-4 py-2 bg-ucd-blue text-white text-sm rounded hover:bg-ucd-blue-light transition-colors flex items-center"
                          >
                            <Send className="h-3 w-3 mr-2" />
                            Review Reply
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
                                {isAdmin && (
                                  <button
                                    onClick={() => handleDeleteClick('reply', question.id, reply)}
                                    className="text-gray-300 hover:text-red-500 transition-colors"
                                    title="Delete Reply (Admin)"
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </button>
                                )}
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
