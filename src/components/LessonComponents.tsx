import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Play, RefreshCw, ExternalLink } from 'lucide-react'

export const CodeBlock = ({ code, output }: { code: string, output?: string }) => {
  const [isRunning, setIsRunning] = useState(false)
  const [showOutput, setShowOutput] = useState(false)

  const handleRun = () => {
    setIsRunning(true)
    setShowOutput(false)
    
    // Simulate execution time
    setTimeout(() => {
      setIsRunning(false)
      setShowOutput(true)
    }, 800)
  }

  const highlightSyntax = (code: string) => {
    const parts = code.split(/(\n)/g); // Split by newline but keep it
    return parts.map((line, i) => {
      if (line === '\n') return '\n';
      
      // Comments
      if (line.trim().startsWith('#')) {
        return <span key={i} className="text-green-400">{line}</span>;
      }

      // Split by operators, spaces, parentheses, quotes etc. but keep delimiters
      // Using a more complex regex to handle strings better
      const tokens = line.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b(?:print|input|float|int|round|len|type|list|set|dict|range)\b|\d+(?:\.\d+)?|[(){}=+\-*/,:[\]]|\s+)/g).filter(Boolean);
      
      return (
        <span key={i}>
          {tokens.map((token, j) => {
            // Strings
            if (token.startsWith('"') || token.startsWith("'")) return <span key={j} className="text-yellow-300">{token}</span>;
            
            // Numbers
            if (/^\d+(\.\d+)?$/.test(token)) return <span key={j} className="text-blue-300">{token}</span>;
            
            // Keywords
            if (['print', 'input', 'float', 'int', 'round', 'len', 'type', 'list', 'set', 'dict', 'range'].includes(token)) return <span key={j} className="text-purple-400">{token}</span>;
            
            // Default text (variables, operators, etc)
            return <span key={j} className="text-gray-100">{token}</span>;
          })}
        </span>
      );
    });
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden my-4 shadow-lg border border-gray-700">
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400 text-xs font-mono">Python 3</span>
          {output && (
            <button 
              onClick={handleRun}
              className="flex items-center space-x-1 text-xs bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded transition-colors"
              disabled={isRunning}
            >
              {isRunning ? (
                <RefreshCw className="w-3 h-3 animate-spin" />
              ) : (
                <Play className="w-3 h-3 fill-current" />
              )}
              <span>{isRunning ? 'Running...' : 'Run'}</span>
            </button>
          )}
        </div>
      </div>
      <div className="p-4 overflow-x-auto relative">
        <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
          {highlightSyntax(code)}
        </pre>
      </div>
      {showOutput && output && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-black/50 p-4 border-t border-gray-700"
        >
          <div className="text-gray-400 text-xs font-bold mb-2 uppercase flex items-center">
            <Terminal className="w-3 h-3 mr-1" /> Output
          </div>
          <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
            {output}
          </pre>
        </motion.div>
      )}
    </div>
  )
}

export const Section = ({ title, children, id }: { title: string, children: React.ReactNode, id?: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 mb-8"
  >
    <h2 className="text-2xl font-bold text-ucd-blue mb-6 flex items-center border-b border-gray-100 pb-4">
      {title}
    </h2>
    {children}
  </motion.section>
)

export const ResourceLink = ({ href, text }: { href: string, text: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="inline-flex items-center text-ucd-blue hover:text-ucd-gold transition-colors font-medium text-sm"
  >
    <ExternalLink className="w-3 h-3 mr-1" /> {text}
  </a>
)
