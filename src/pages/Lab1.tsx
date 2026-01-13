import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Terminal, Play, ExternalLink, Calculator, Type, FileText, CheckSquare, RefreshCw } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import QASection from '../components/QASection'

const Lab1 = () => {
  const basePath = import.meta.env.PROD ? '/ABT182_Advance_GIS_UCDavis' : ''
  const notebookPath = `${basePath}/code/colab/Week1/ABT182_hw1_2026.ipynb`

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = notebookPath
    link.download = 'ABT182_hw1_2026.ipynb'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const CodeBlock = ({ code, output }: { code: string, output?: string }) => {
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
        const tokens = line.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b(?:print|input|float|int|round)\b|\d+(?:\.\d+)?|[(){}=+\-*/,:]|\s+)/g).filter(Boolean);
        
        return (
          <span key={i}>
            {tokens.map((token, j) => {
              // Strings
              if (token.startsWith('"') || token.startsWith("'")) return <span key={j} className="text-yellow-300">{token}</span>;
              
              // Numbers
              if (/^\d+(\.\d+)?$/.test(token)) return <span key={j} className="text-blue-300">{token}</span>;
              
              // Keywords
              if (['print', 'input', 'float', 'int', 'round'].includes(token)) return <span key={j} className="text-purple-400">{token}</span>;
              
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

  const Section = ({ title, children, id }: { title: string, children: React.ReactNode, id?: string }) => (
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

  const ResourceLink = ({ href, text }: { href: string, text: string }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center text-ucd-blue hover:text-ucd-gold transition-colors font-medium text-sm"
    >
      <ExternalLink className="w-3 h-3 mr-1" /> {text}
    </a>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-ucd-blue text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ucd-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-ucd-gold hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-ucd-gold text-ucd-blue px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Week 1</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-300 font-medium">Intro to Python</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Python Fundamentals</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Master variables, strings, and math operations. This interactive guide prepares you for Lab 1.
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="group flex items-center bg-ucd-gold hover:bg-white text-ucd-blue px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-xs uppercase opacity-80">Download Notebook</div>
                <div className="text-lg">ABT182_hw1.ipynb</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 1. Intro to Colab */}
        <Section title="Getting Started with Google Colab">
          <div className="space-y-8">
            <p className="text-gray-600 text-lg max-w-3xl">
              Before coding, familiarize yourself with the Google Colab environment. It allows you to write and execute Python code in your browser with zero configuration.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Video 1 */}
              <div className="space-y-3">
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/inN8seMm7UI" 
                    title="Get started with Google Colaboratory" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-between items-center px-1">
                  <span className="font-semibold text-gray-700">Intro to Google Colab</span>
                  <ResourceLink href="https://www.youtube.com/watch?v=inN8seMm7UI" text="Watch on YouTube" />
                </div>
              </div>

              {/* Video 2 */}
              <div className="space-y-3">
                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/RLYoEyIHL6A" 
                    title="Google Colab Tutorial for Beginners" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-between items-center px-1">
                  <span className="font-semibold text-gray-700">Detailed Tutorial</span>
                  <ResourceLink href="https://www.youtube.com/watch?v=RLYoEyIHL6A" text="Watch on YouTube" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-ucd-blue mt-6">
              <h4 className="text-lg font-bold text-ucd-blue mb-2 flex items-center"><FileText className="w-5 h-5 mr-2"/> Essential Reading</h4>
              <ResourceLink href="https://bytexd.com/what-is-google-colab-a-beginner-guide/" text="Beginner's Guide to Colab Interface & Features" />
            </div>
          </div>
        </Section>

        {/* 2. Input & Output */}
        <Section title="Input & Output">
          <div className="space-y-12">
            {/* Input */}
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Type className="w-6 h-6 mr-3 text-ucd-blue" /> User Input
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                The <code>input()</code> function allows you to get data from the user. It <strong>always returns a string</strong>.
              </p>
              <CodeBlock 
                code={`# Asking for satellite sensor name
sensor = input('Enter sensor name:')
print('Processing data from ' + sensor)`} 
                output={`Enter sensor name: Sentinel-2
Processing data from Sentinel-2`} 
              />
              <div className="mt-3">
                <ResourceLink href="https://www.w3schools.com/python/ref_func_input.asp" text="W3Schools: input() Reference" />
              </div>
            </div>

            {/* Print */}
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Terminal className="w-6 h-6 mr-3 text-ucd-blue" /> Printing Output
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                The <code>print()</code> function displays output to the screen. You can print multiple objects by separating them with commas.
              </p>
              <CodeBlock 
                code={`# Printing GIS metadata
satellite = "Landsat 8"
bands = 11
print("Satellite:", satellite, "| Total Bands:", bands)`} 
                output={`Satellite: Landsat 8 | Total Bands: 11`} 
              />
              <div className="mt-3">
                <ResourceLink href="https://www.w3schools.com/python/ref_func_print.asp" text="W3Schools: print() Reference" />
              </div>
            </div>
          </div>
        </Section>

        {/* 3. F-Strings */}
        <Section title="String Formatting (F-Strings)">
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-600 text-lg mb-6">
              F-strings (introduced in Python 3.6) are the modern way to embed variables directly into strings. 
              Prefix your string with <code>f</code> and put variables in curly braces <code>{`{}`}</code>.
            </p>
            
            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 text-yellow-900 mb-8">
              <h4 className="font-bold text-lg mb-3">Why use F-Strings?</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Cleaner and more readable syntax</li>
                <li>Faster than old <code>%</code> formatting</li>
                <li>Can evaluate expressions like <code>{`{5 * 2}`}</code> directly inside</li>
              </ul>
            </div>

            <CodeBlock 
              code={`# GIS Example
location = "Davis, CA"
elevation = 16

# Embed variables directly
print(f"The elevation of {location} is {elevation} meters.")`} 
              output="The elevation of Davis, CA is 16 meters." 
            />
            
            <div className="mt-3">
              <ResourceLink href="https://www.geeksforgeeks.org/formatted-string-literals-f-strings-python/" text="GeeksForGeeks: F-Strings Guide" />
            </div>
          </div>
        </Section>

        {/* 4. Math & Type Casting */}
        <Section title="Math & Type Conversion">
          <div className="space-y-12">
            {/* Float Conversion */}
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Calculator className="w-6 h-6 mr-3 text-ucd-blue" /> Converting Input to Numbers
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Since <code>input()</code> returns text (string), you MUST convert it to a number before doing math. 
                Use <code>float()</code> for decimals (like coordinates) or <code>int()</code> for whole numbers.
              </p>
              <CodeBlock 
                code={`# Calculate NDVI (Normalized Difference Vegetation Index)
# Formula: (NIR - Red) / (NIR + Red)

nir = float(input("Enter NIR value: "))   # e.g., 0.6
red = float(input("Enter Red value: "))   # e.g., 0.1

ndvi = (nir - red) / (nir + red)
print(f"Calculated NDVI: {ndvi}")`} 
                output={`Enter NIR value: 0.6
Enter Red value: 0.1
Calculated NDVI: 0.7142857142857143`} 
              />
              <div className="mt-3">
                <ResourceLink href="https://www.includehelp.com/python/read-input-as-a-float.aspx" text="IncludeHelp: Reading Float Input" />
              </div>
            </div>

            {/* Rounding */}
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <CheckSquare className="w-6 h-6 mr-3 text-ucd-blue" /> Rounding Numbers
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Use <code>round(number, digits)</code> to keep your output clean.
              </p>
              <CodeBlock 
                code={`# Rounding the NDVI result
clean_ndvi = round(0.7142857142857143, 2)
print(f"Clean NDVI: {clean_ndvi}")`} 
                output="Clean NDVI: 0.71" 
              />
              <div className="mt-3">
                <ResourceLink href="https://www.w3schools.com/python/ref_func_round.asp" text="W3Schools: round() Function" />
              </div>
            </div>
          </div>
        </Section>

        {/* Submission Guide */}
        <Section title="Submission Checklist">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                  <CheckSquare className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">1. Run All Cells</h4>
                  <p className="text-sm text-gray-500">Go to Runtime → Run all to ensure no errors.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                  <FileText className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">2. Rename File</h4>
                  <p className="text-sm text-gray-500">Name it: <code>yourname_hw1.ipynb</code></p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 flex flex-col justify-center items-center text-center">
              <h4 className="font-bold text-ucd-blue mb-2">Required Files</h4>
              <p className="text-sm text-gray-500 mb-4">Upload both to Canvas:</p>
              <div className="flex space-x-4">
                <span className="bg-white border border-gray-200 px-3 py-1 rounded font-mono text-sm text-gray-600">.ipynb</span>
                <span className="bg-white border border-gray-200 px-3 py-1 rounded font-mono text-sm text-gray-600">.pdf</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Q&A Section */}
        <QASection weekNumber={1} />
      </div>
    </div>
  )
}

export default Lab1
