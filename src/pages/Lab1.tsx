import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Code, Terminal, Play, CheckSquare, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
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

  const CodeBlock = ({ code, output }: { code: string, output?: string }) => (
    <div className="bg-gray-900 rounded-lg overflow-hidden my-4 shadow-lg border border-gray-700">
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-400 text-xs font-mono">Python 3</span>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-gray-100 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          {code}
        </pre>
      </div>
      {output && (
        <div className="bg-black/50 p-4 border-t border-gray-700">
          <div className="text-gray-400 text-xs font-bold mb-2 uppercase flex items-center">
            <Terminal className="w-3 h-3 mr-1" /> Output
          </div>
          <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  )

  const Section = ({ title, children, id }: { title: string, children: React.ReactNode, id?: string }) => (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 mb-8"
    >
      <h2 className="text-2xl font-bold text-ucd-blue mb-6 flex items-center">
        <div className="w-2 h-8 bg-ucd-gold rounded-full mr-3"></div>
        {title}
      </h2>
      {children}
    </motion.section>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 1. Variables & Strings */}
        <Section title="Variables & Input">
          <p className="text-gray-600 mb-6">
            Variables are containers for storing data. Use <code>input()</code> to get data from users.
            Note that <code>input()</code> <strong>always returns a string</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Code className="w-4 h-4 mr-2 text-ucd-blue" /> Example: Strings
              </h3>
              <CodeBlock 
                code={`# Combining strings
first = "John"
last = "Doe"
full = first + " " + last
print(full)`} 
                output="John Doe" 
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                <Play className="w-4 h-4 mr-2 text-ucd-blue" /> Example: F-Strings (Modern)
              </h3>
              <CodeBlock 
                code={`# Inserting variables into text
name = "Alice"
place = "Wonderland"
print(f"{name} is in {place}")`} 
                output="Alice is in Wonderland" 
              />
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-ucd-blue p-4 mt-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Using f-strings (<code>f"..."</code>) is the preferred way to format text in modern Python. It's cleaner and faster than using <code>+</code>.
            </p>
          </div>
        </Section>

        {/* 2. Math Operations */}
        <Section title="Mathematical Operations">
          <p className="text-gray-600 mb-6">
            Python performs math naturally. Remember that input numbers must be converted from strings first!
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Basic Operators</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono text-center">
                <div className="bg-gray-100 p-2 rounded border border-gray-200">
                  <div className="text-ucd-blue font-bold text-lg">+</div> Add
                </div>
                <div className="bg-gray-100 p-2 rounded border border-gray-200">
                  <div className="text-ucd-blue font-bold text-lg">-</div> Subtract
                </div>
                <div className="bg-gray-100 p-2 rounded border border-gray-200">
                  <div className="text-ucd-blue font-bold text-lg">*</div> Multiply
                </div>
                <div className="bg-gray-100 p-2 rounded border border-gray-200">
                  <div className="text-ucd-blue font-bold text-lg">/</div> Divide
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Real-world Example: Area Calculation</h3>
              <p className="text-sm text-gray-500 mb-2">Note: We use <code>float()</code> to convert the input string to a number.</p>
              <CodeBlock 
                code={`radius_str = "5.5"  # Simulated input
radius = float(radius_str)

# Calculate Area (πr²)
area = 3.14 * radius ** 2

print(f"Area: {area}")`} 
                output="Area: 94.985" 
              />
            </div>
          </div>
        </Section>

        {/* 3. Type Conversion */}
        <Section title="Type Casting">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-gray-600 mb-4">
                Since <code>input()</code> returns text, you often need to convert it.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-700">
                  <span className="bg-gray-200 font-mono px-2 py-1 rounded mr-3">int()</span>
                  Converts to whole number (e.g., 5)
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="bg-gray-200 font-mono px-2 py-1 rounded mr-3">float()</span>
                  Converts to decimal (e.g., 5.5)
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <span className="bg-gray-200 font-mono px-2 py-1 rounded mr-3">str()</span>
                  Converts number back to text
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full">
               <CodeBlock 
                code={`# Common Error
num = input("Enter number: ") # User types 5
print(num * 2) # Output: 55 (Text!)

# Correct Way
num = int(input("Enter number: "))
print(num * 2) # Output: 10 (Math!)`} 
              />
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
