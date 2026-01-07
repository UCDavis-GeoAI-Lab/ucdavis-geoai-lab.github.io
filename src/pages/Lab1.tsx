import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Code, BookOpen, ExternalLink, PlayCircle, FileText, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Lab1 = () => {
  const notebookPath = '/code/colab/Week1/ABT182_hw1_2026.ipynb'

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = notebookPath
    link.download = 'ABT182_hw1_2026.ipynb'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const DownloadButton = ({ position }: { position: 'top' | 'bottom' }) => (
    <motion.button
      onClick={handleDownload}
      className={`w-full md:w-auto flex items-center justify-center gap-2 bg-ucd-gold hover:bg-ucd-gold/90 text-ucd-blue font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 ${position === 'top' ? 'mb-6' : 'mt-8'}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Download className="h-5 w-5" />
      <span>Download Lab 1 Notebook (ABT182_hw1_2026.ipynb)</span>
    </motion.button>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-ucd-blue to-blue-700 text-white py-8 md:py-12 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-ucd-gold text-ucd-blue rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg">
              1
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Introduction to Python Programming with Google Colab</h1>
              <p className="text-lg md:text-xl text-ucd-gold-light">A comprehensive tutorial for beginners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Download Button - Top */}
        <div className="flex justify-center mb-8">
          <DownloadButton position="top" />
        </div>

        {/* Table of Contents */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 border-l-4 border-ucd-blue"
        >
          <h2 className="text-2xl font-bold text-ucd-blue mb-4 flex items-center">
            <BookOpen className="h-6 w-6 mr-2" />
            Table of Contents
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><a href="#section1" className="text-ucd-blue hover:underline">Getting Started with Google Colab</a></li>
                <li><a href="#section2" className="text-ucd-blue hover:underline">Python Variables and Strings</a>
                  <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                    <li><a href="#subsection2.1" className="text-gray-600 hover:text-ucd-blue">Exercise 1: Working with Variables</a></li>
                    <li><a href="#subsection2.2" className="text-gray-600 hover:text-ucd-blue">Exercise 2: String Operations</a></li>
                  </ul>
                </li>
                <li><a href="#section3" className="text-ucd-blue hover:underline">Mathematical Operations</a>
                  <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                    <li><a href="#subsection3.1" className="text-gray-600 hover:text-ucd-blue">Exercise 3: Basic Math</a></li>
                    <li><a href="#subsection3.2" className="text-gray-600 hover:text-ucd-blue">Exercise 4: Circle Area Calculation</a></li>
                    <li><a href="#subsection3.3" className="text-gray-600 hover:text-ucd-blue">Exercise 5: Real-world Calculation</a></li>
                  </ul>
                </li>
              </ol>
            </div>
            <div>
              <ol className="list-decimal list-inside space-y-2 ml-4" start={4}>
                <li><a href="#section4" className="text-ucd-blue hover:underline">Submitting Your Work</a></li>
                <li><a href="#section5" className="text-ucd-blue hover:underline">Additional Learning Resources</a></li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* Section 1: Google Colab */}
        <motion.section
          id="section1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-ucd-blue mb-6 flex items-center">
            <Code className="h-7 w-7 mr-3" />
            Getting Started with Google Colab
          </h2>
          
          <div className="space-y-4 text-gray-700 mb-6">
            <p className="text-lg leading-relaxed">
              Google Colab (Colaboratory) is a free, cloud-based platform that allows you to write and execute Python code directly in your browser. 
              It's perfect for beginners because it requires no installation or setup on your computer.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-ucd-blue">
              <h3 className="text-xl font-bold text-ucd-blue mb-3">Key Features:</h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ucd-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>No installation required:</strong> Everything runs in your web browser</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ucd-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Free access:</strong> All you need is a Google account</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ucd-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Pre-installed libraries:</strong> Popular Python packages are already available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-ucd-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Easy sharing:</strong> Share your notebooks with others via Google Drive</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-gray-700">
                <strong>Important:</strong> All code in this tutorial should be written and executed in Google Colab, not on this webpage. 
                This page serves as a guide and reference. Download the notebook file above and open it in Google Colab to complete the exercises.
              </p>
            </div>
          </div>

          {/* Code Example: Creating a Colab Notebook */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-ucd-blue mb-4">How to Get Started:</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4 mb-4">
              <li>Go to <a href="https://colab.research.google.com" target="_blank" rel="noopener noreferrer" className="text-ucd-blue hover:underline font-semibold">colab.research.google.com</a></li>
              <li>Sign in with your Google account</li>
              <li>Click "New Notebook" or upload the downloaded notebook file</li>
              <li>Start writing and running Python code in the cells</li>
            </ol>
          </div>

          {/* Google Colab Tutorials */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-ucd-blue mb-4 flex items-center">
              <PlayCircle className="h-5 w-5 mr-2" />
              Video Tutorials
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <a href="https://www.youtube.com/watch?v=inN8seMm7UI" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                <ExternalLink className="h-5 w-5 text-ucd-blue mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 group-hover:text-ucd-blue">Get started with Google Colaboratory</span>
              </a>
              <a href="https://www.youtube.com/watch?v=RLYoEyIHL6A" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                <ExternalLink className="h-5 w-5 text-ucd-blue mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 group-hover:text-ucd-blue">Google Colab Tutorial for Beginners</span>
              </a>
            </div>

            {/* YouTube Video Embeds */}
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/inN8seMm7UI"
                  title="Get started with Google Colaboratory"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/RLYoEyIHL6A"
                  title="Google Colab Tutorial for Beginners"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-ucd-blue mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Additional Learning Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="https://bytexd.com/what-is-google-colab-a-beginner-guide/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                <ExternalLink className="h-5 w-5 text-ucd-blue mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 group-hover:text-ucd-blue text-sm">What is Google Colab: Beginner's Guide</span>
              </a>
              <a href="https://colab.research.google.com/github/Tanu-N-Prabhu/Python/blob/master/Cheat_sheet_for_Google_Colab.ipynb" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                <ExternalLink className="h-5 w-5 text-ucd-blue mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 group-hover:text-ucd-blue text-sm">Colab Cheat Sheet</span>
              </a>
              <a href="https://colab.research.google.com/notebooks/markdown_guide.ipynb" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                <ExternalLink className="h-5 w-5 text-ucd-blue mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 group-hover:text-ucd-blue text-sm">Markdown Guide</span>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Defining variables */}
        <motion.section
          id="section2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-ucd-blue mb-6">Python Variables and Strings</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-8 border-l-4 border-ucd-blue">
            <h3 className="text-xl font-bold text-ucd-blue mb-3">Understanding Variables</h3>
            <p className="text-gray-700 mb-4">
              In Python, a variable is like a container that stores data. You can think of it as a labeled box where you put information. 
              Variables can hold different types of data: text (strings), numbers (integers or floats), and more.
            </p>
            
            <div className="bg-white rounded p-4 mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Basic Variable Examples:</h4>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Storing text (string)
name = "Python"
greeting = "Hello, World!"

# Storing numbers
age = 25          # integer
price = 19.99    # float (decimal number)

# You can print variables
print(name)
print(age)`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Exercise 1 */}
          <div id="subsection2.1" className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-ucd-blue mb-4">Exercise 1: Working with Variables and User Input</h3>
            <p className="text-gray-700 mb-4">
              In this exercise, you'll learn how to get input from users and work with strings (text) in Python.
            </p>
            
            <div className="bg-gradient-to-r from-ucd-gold/20 to-ucd-gold/10 rounded-lg p-6 mb-4">
              <h4 className="font-bold text-ucd-blue mb-3">Instructions:</h4>
              <p className="text-gray-700 mb-3">
                <strong>Complete this exercise in your Google Colab notebook.</strong> Write your code in a new code cell.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Use <code className="bg-gray-200 px-2 py-1 rounded">input()</code> to get the user's first name and store it in a variable called <code className="bg-gray-200 px-2 py-1 rounded">firstName</code></li>
                <li>Use <code className="bg-gray-200 px-2 py-1 rounded">input()</code> to get the user's last name and store it in a variable called <code className="bg-gray-200 px-2 py-1 rounded">lastName</code></li>
                <li>Combine both names with a space between them and store in <code className="bg-gray-200 px-2 py-1 rounded">fullname</code></li>
                <li>Print the full name using <code className="bg-gray-200 px-2 py-1 rounded">print()</code></li>
              </ol>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <h4 className="font-bold text-green-800 mb-2">Understanding the Concepts:</h4>
              <div className="bg-gray-900 rounded-lg p-4 mb-3">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Example: How input() works (this is just for learning!)
# The input() function displays a message and waits for user to type
user_city = input("What city are you from? ")
# When user types "San Francisco" and presses Enter,
# user_city will contain the string "San Francisco"

# Example: How to combine strings
part1 = "Hello"
part2 = "World"
combined = part1 + " " + part2  # Results in "Hello World"
print(combined)

# Example: Using f-strings to format output
age = 20
print(f"I am {age} years old")  # Prints: I am 20 years old`}</code>
                </pre>
              </div>
              <p className="text-gray-700 text-sm">
                <strong>Key Concepts:</strong> The <code className="bg-gray-200 px-1 py-0.5 rounded">input()</code> function always returns a string (text), 
                even if the user types a number. The <code className="bg-gray-200 px-1 py-0.5 rounded">+</code> operator can combine strings together. 
                Remember: you'll need to adapt these concepts to complete Exercise 1 with your own variable names!
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-gray-700">
                <strong>💡 Hint:</strong> You can add a space between two strings using <code className="bg-gray-200 px-2 py-1 rounded">" "</code> 
                (quotation mark, space, another quotation mark).
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 border-2 border-dashed border-gray-400">
              <p className="text-gray-600 text-sm mb-2">
                <strong>📝 Your Turn:</strong> Open the downloaded notebook in Google Colab and write your code in the cell marked for Exercise 1.
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Write your code here in Google Colab
# Remember: input() gets user input, + combines strings`}</code>
                </pre>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <a href="https://www.w3schools.com/python/ref_func_input.asp" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-ucd-blue hover:underline">
                <ExternalLink className="h-4 w-4 mr-1" />
                Learn more about input() function
              </a>
              <a href="https://www.w3schools.com/python/ref_func_print.asp" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-ucd-blue hover:underline">
                <ExternalLink className="h-4 w-4 mr-1" />
                Learn more about print() function
              </a>
              <a href="https://www.geeksforgeeks.org/formatted-string-literals-f-strings-python/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-ucd-blue hover:underline">
                <ExternalLink className="h-4 w-4 mr-1" />
                Learn about f-strings in Python
              </a>
            </div>
          </div>

          {/* Exercise 2 */}
          <div id="subsection2.2">
            <h3 className="text-2xl font-bold text-ucd-blue mb-4">Exercise 2: Creating Sentences with Multiple Variables</h3>
            <p className="text-gray-700 mb-4">
              Now you'll practice using multiple variables together to create complete sentences.
            </p>
            
            <div className="bg-gradient-to-r from-ucd-gold/20 to-ucd-gold/10 rounded-lg p-6 mb-4">
              <h4 className="font-bold text-ucd-blue mb-3">Instructions:</h4>
              <p className="text-gray-700 mb-3">
                <strong>Complete this in your Google Colab notebook.</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Create a variable <code className="bg-gray-200 px-2 py-1 rounded">favorite_place</code> using <code className="bg-gray-200 px-2 py-1 rounded">input()</code></li>
                <li>Use <code className="bg-gray-200 px-2 py-1 rounded">print()</code> to display a sentence combining your name and favorite place</li>
              </ol>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <h4 className="font-bold text-green-800 mb-2">Understanding String Formatting:</h4>
              <div className="bg-gray-900 rounded-lg p-4 mb-3">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Example: Different ways to create sentences with variables
# (This example uses different variables - adapt for Exercise 2!)

city = "Davis"
state = "California"

# Method 1: Using + operator
message = "I live in " + city + ", " + state
print(message)

# Method 2: Using f-strings (recommended - modern Python)
print(f"I live in {city}, {state}")

# Method 3: Using .format()
print("I live in {}, {}".format(city, state))

# All three methods produce the same output:
# "I live in Davis, California"`}</code>
                </pre>
              </div>
              <p className="text-gray-700 text-sm">
                <strong>Tip:</strong> F-strings (f"...") are the most modern and readable way to format strings in Python. 
                They're faster and easier to read than using + operator. Use these concepts to complete Exercise 2!
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 border-2 border-dashed border-gray-400">
              <p className="text-gray-600 text-sm mb-2">
                <strong>📝 Your Turn:</strong> Write your code in the Exercise 2 cell in your Google Colab notebook.
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Write your code here in Google Colab
# Use the fullname variable from Exercise 1
# Get favorite_place and create a sentence`}</code>
                </pre>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Mathematical operation */}
        <motion.section
          id="section3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-ucd-blue mb-6">Mathematical Operations in Python</h2>

          <div className="bg-blue-50 rounded-lg p-6 mb-8 border-l-4 border-ucd-blue">
            <h3 className="text-xl font-bold text-ucd-blue mb-3">Python Math Operators</h3>
            <p className="text-gray-700 mb-4">
              Python supports all basic mathematical operations. Here are the operators you'll use:
            </p>
            <div className="bg-white rounded p-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Addition
result = 5 + 3        # result is 8

# Subtraction
result = 10 - 4       # result is 6

# Multiplication
result = 3 * 4        # result is 12

# Division (always returns a float)
result = 10 / 3       # result is 3.333...

# Integer Division (rounds down)
result = 10 // 3      # result is 3

# Modulo (remainder)
result = 10 % 3      # result is 1

# Exponentiation (power)
result = 2 ** 3       # result is 8 (2 to the power of 3)`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Exercise 3 */}
          <div id="subsection3.1" className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-ucd-blue mb-4">Exercise 3: Basic Math Operations</h3>
            <p className="text-gray-700 mb-4">
              Practice performing basic mathematical operations with variables.
            </p>
            
            <div className="bg-gradient-to-r from-ucd-gold/20 to-ucd-gold/10 rounded-lg p-6 mb-4">
              <h4 className="font-bold text-ucd-blue mb-3">Instructions:</h4>
              <p className="text-gray-700 mb-3">
                <strong>Complete this in your Google Colab notebook.</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Define two variables with integer values (e.g., <code className="bg-gray-200 px-2 py-1 rounded">num1 = 2026</code>, <code className="bg-gray-200 px-2 py-1 rounded">num2 = 12</code>)</li>
                <li>Perform addition, subtraction, multiplication, and division</li>
                <li>Print each result</li>
              </ol>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <h4 className="font-bold text-green-800 mb-2">Understanding Math Operations:</h4>
              <div className="bg-gray-900 rounded-lg p-4 mb-3">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Example: Working with different numbers
# (This example uses different values - adapt for Exercise 3!)

# Define two integer variables
a = 15
b = 4

# Perform all four basic operations
sum_result = a + b        # Addition
diff_result = a - b       # Subtraction
prod_result = a * b       # Multiplication
quot_result = a / b       # Division

# Print each result
print(f"{a} + {b} = {sum_result}")
print(f"{a} - {b} = {diff_result}")
print(f"{a} * {b} = {prod_result}")
print(f"{a} / {b} = {quot_result}")

# Notice: division always gives a float (decimal)
# Even 15 / 5 would give 3.0, not 3`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-gray-700">
                <strong>💡 Important:</strong> Division (<code className="bg-gray-200 px-2 py-1 rounded">/</code>) always returns a float (decimal number), 
                even if the result is a whole number. Python follows standard mathematical order of operations (PEMDAS).
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 border-2 border-dashed border-gray-400">
              <p className="text-gray-600 text-sm mb-2">
                <strong>📝 Your Turn:</strong> Write your code in the Exercise 3 cell in Google Colab.
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Write your code here in Google Colab
# Define two numbers and perform all four basic operations`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Exercise 4 */}
          <div id="subsection3.2" className="mb-8 pb-8 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-ucd-blue mb-4">Exercise 4: Calculate Circle Area</h3>
            <p className="text-gray-700 mb-4">
              Learn how to convert user input to numbers and perform calculations.
            </p>
            
            <div className="bg-gradient-to-r from-ucd-gold/20 to-ucd-gold/10 rounded-lg p-6 mb-4">
              <h4 className="font-bold text-ucd-blue mb-3">Instructions:</h4>
              <p className="text-gray-700 mb-3">
                <strong>Complete this in your Google Colab notebook.</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Ask the user for the radius of a circle using <code className="bg-gray-200 px-2 py-1 rounded">input()</code></li>
                <li>Convert the input to a float (since <code className="bg-gray-200 px-2 py-1 rounded">input()</code> returns a string)</li>
                <li>Calculate the area using the formula: <code className="bg-gray-200 px-2 py-1 rounded">area = 3.14 * radius ** 2</code></li>
                <li>Print the result</li>
              </ul>
              <div className="mt-4 p-4 bg-white rounded text-center">
                <p className="text-lg font-mono text-gray-700">Area = π × r²</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <h4 className="font-bold text-green-800 mb-2">Understanding Type Conversion:</h4>
              <div className="bg-gray-900 rounded-lg p-4 mb-3">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Example: Converting string input to numbers
# (This example calculates rectangle area - adapt for Exercise 4!)

# Get width from user (input() always returns a string)
width_str = input("Enter the width: ")
# User types "5.5" but it's stored as the string "5.5"

# Convert string to float for calculations
width = float(width_str)  # Now width is 5.5 (a number)

# Get height and convert
height = float(input("Enter the height: "))

# Now we can do math with these numbers
rectangle_area = width * height
print(f"Area of rectangle: {rectangle_area}")

# Remember: input() returns strings, so convert before math!`}</code>
                </pre>
              </div>
              <p className="text-gray-700 text-sm">
                <strong>Key Concept:</strong> The <code className="bg-gray-200 px-1 py-0.5 rounded">float()</code> function converts a string to a decimal number. 
                If you need a whole number, use <code className="bg-gray-200 px-1 py-0.5 rounded">int()</code> instead. 
                Apply this concept to Exercise 4 with circle calculations!
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-4">
              <a href="https://www.includehelp.com/python/read-input-as-a-float.aspx" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-ucd-blue hover:underline">
                <ExternalLink className="h-4 w-4 mr-1" />
                Learn about converting input to float
              </a>
              <a href="https://www.digitalocean.com/community/tutorials/python-convert-string-to-float" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-ucd-blue hover:underline">
                <ExternalLink className="h-4 w-4 mr-1" />
                String to float conversion tutorial
              </a>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 border-2 border-dashed border-gray-400">
              <p className="text-gray-600 text-sm mb-2">
                <strong>📝 Your Turn:</strong> Write your code in the Exercise 4 cell in Google Colab.
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Write your code here in Google Colab
# Get radius, convert to float, calculate area`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Exercise 5 */}
          <div id="subsection3.3">
            <h3 className="text-2xl font-bold text-ucd-blue mb-4">Exercise 5: Real-World Calculation - Commute Time</h3>
            <p className="text-gray-700 mb-4">
              Apply what you've learned to solve a practical problem: calculating your annual commute time.
            </p>
            
            <div className="bg-gradient-to-r from-ucd-gold/20 to-ucd-gold/10 rounded-lg p-6 mb-4">
              <h4 className="font-bold text-ucd-blue mb-3">Instructions:</h4>
              <p className="text-gray-700 mb-3">
                <strong>Complete this in your Google Colab notebook.</strong>
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Define <code className="bg-gray-200 px-2 py-1 rounded">t_day</code> - daily commute time in minutes (float)</li>
                <li>Define <code className="bg-gray-200 px-2 py-1 rounded">n_days</code> - days per week you commute (integer)</li>
                <li>Define <code className="bg-gray-200 px-2 py-1 rounded">n_weeks</code> - weeks per year you commute (integer)</li>
                <li>Calculate total commute time: <code className="bg-gray-200 px-2 py-1 rounded">t_day × n_days × n_weeks</code></li>
                <li>Round to 2 decimal places using <code className="bg-gray-200 px-2 py-1 rounded">round(value, 2)</code></li>
                <li>Print the result in a complete sentence</li>
                <li>Add comments explaining each line</li>
              </ol>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <h4 className="font-bold text-green-800 mb-2">Understanding Calculations and Rounding:</h4>
              <div className="bg-gray-900 rounded-lg p-4 mb-3">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Example: Calculating total study hours
# (This example is different - adapt the concepts for Exercise 5!)

# Hours studied per day (can be a decimal)
hours_per_day = 2.5

# Days per week studying
days_per_week = 6

# Weeks in a semester
weeks_in_semester = 15

# Calculate total study hours
total_hours = hours_per_day * days_per_week * weeks_in_semester

# Round to 2 decimal places using round()
total_hours = round(total_hours, 2)

# Print with a descriptive message
print(f"Total study hours this semester: {total_hours} hours")

# Comments explain what each line does
# They start with # and are ignored by Python`}</code>
                </pre>
              </div>
              <p className="text-gray-700 text-sm">
                <strong>About Comments:</strong> Comments in Python start with <code className="bg-gray-200 px-1 py-0.5 rounded">#</code>. 
                They help explain what your code does and are ignored when the code runs. Good comments make your code easier to understand! 
                Use <code className="bg-gray-200 px-1 py-0.5 rounded">round(value, 2)</code> to round to 2 decimal places. 
                Apply these concepts to Exercise 5!
              </p>
            </div>

            <div className="mb-4">
              <a href="https://www.w3schools.com/python/ref_func_round.asp" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-ucd-blue hover:underline">
                <ExternalLink className="h-4 w-4 mr-1" />
                Learn more about the round() function
              </a>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 border-2 border-dashed border-gray-400">
              <p className="text-gray-600 text-sm mb-2">
                <strong>📝 Your Turn:</strong> Write your code in the Exercise 5 cell in Google Colab. Don't forget to add comments!
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{`# Write your code here in Google Colab
# Calculate your annual commute time
# Remember to add comments explaining each step`}</code>
                </pre>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: How to Submit */}
        <motion.section
          id="section4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-ucd-blue mb-6">Submitting Your Work</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Once you have completed all exercises in your Google Colab notebook, follow these steps to submit your work.
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-ucd-blue">
              <h3 className="text-xl font-bold text-ucd-blue mb-3">Step 1: Run the Entire Notebook</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>In Google Colab, go to the <strong>Runtime</strong> menu at the top</li>
                <li>Click <strong>"Run all"</strong> to execute all code cells</li>
                <li>Make sure all cells run without errors and display correct outputs</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-ucd-blue mb-3">Step 2: Review Your Work</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Check that you completed all exercises</li>
                <li>Verify that your outputs look correct</li>
                <li>Make sure your code has appropriate comments</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-400">
              <h3 className="text-xl font-bold text-ucd-blue mb-3">Step 3: Rename and Save</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Click on the notebook name at the top left (default: <code className="bg-gray-200 px-2 py-1 rounded">ABT182_hw1.ipynb</code>)</li>
                <li>Rename it to include your name: <code className="bg-gray-200 px-2 py-1 rounded">your_name_hw1.ipynb</code></li>
                <li>Example: <code className="bg-gray-200 px-2 py-1 rounded">john_doe_hw1.ipynb</code></li>
                <li>The notebook saves automatically in Google Drive</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Step 4: Submit Both Files (MANDATORY)
              </h3>
              <p className="text-red-800 font-semibold mb-3 text-lg">
                ⚠️ You must submit BOTH a .ipynb file AND a PDF file. Both are required.
              </p>
              
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-gray-700 mb-2">A. Download the .ipynb file:</h4>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>In Google Colab, go to <strong>File</strong> → <strong>Download</strong> → <strong>Download .ipynb</strong></li>
                  <li>This downloads your notebook file</li>
                </ol>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-gray-700 mb-2">B. Create and Download the PDF file:</h4>
                <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                  <li>Go to <strong>File</strong> → <strong>Print</strong> (or press <code className="bg-gray-200 px-2 py-1 rounded">Ctrl + P</code> / <code className="bg-gray-200 px-2 py-1 rounded">Cmd + P</code>)</li>
                  <li>In the print dialog, change <strong>Destination</strong> to <strong>"Save as PDF"</strong></li>
                  <li>Click <strong>Save</strong> to download the PDF</li>
                  <li>Alternatively: <strong>File</strong> → <strong>Download</strong> → <strong>Download .pdf</strong></li>
                </ol>
              </div>

              <div className="mt-4 p-4 bg-yellow-100 border-2 border-yellow-400 rounded">
                <p className="text-gray-800 font-semibold">
                  ✅ Checklist: Before submitting, make sure you have:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                  <li>✓ Renamed .ipynb file with your name</li>
                  <li>✓ Downloaded .ipynb file</li>
                  <li>✓ Created and downloaded PDF file</li>
                  <li>✓ Both files ready to upload</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-ucd-blue mb-3">Step 5: Upload to Submission Platform</h3>
              <p className="text-gray-700">
                Upload both the <code className="bg-gray-200 px-2 py-1 rounded">.ipynb</code> file and the <code className="bg-gray-200 px-2 py-1 rounded">.pdf</code> file 
                to your course submission platform (e.g., Canvas, Blackboard, etc.).
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-ucd-blue mb-3">Academic Integrity Reminder</h3>
              <p className="text-gray-700 mb-3">
                Remember that you signed at the beginning of this tutorial confirming that your work was completed without the use of Generative AI tools.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>This tutorial is designed to help you learn Python through hands-on practice</li>
                <li>Using Generative AI tools defeats the purpose of learning</li>
                <li>If you did use AI assistance, you must clearly disclose it in your notebook</li>
                <li>Failure to disclose AI use may violate academic integrity policies</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Resources */}
        <motion.section
          id="section5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8"
        >
          <h2 className="text-3xl font-bold text-ucd-blue mb-6">Additional Learning Resources</h2>
          <p className="text-gray-700 mb-6">
            Continue your Python learning journey with these excellent resources:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://www.w3schools.com/python/" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-gradient-to-r from-ucd-blue to-blue-600 text-white rounded-lg hover:shadow-xl transition-all duration-200 group">
              <BookOpen className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-lg">Python Tutorial</h3>
                <p className="text-sm text-blue-100">Comprehensive Python tutorial from W3Schools</p>
              </div>
              <ExternalLink className="h-5 w-5 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://edabit.com/tutorial/python" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-gradient-to-r from-ucd-gold to-yellow-500 text-ucd-blue rounded-lg hover:shadow-xl transition-all duration-200 group">
              <BookOpen className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-bold text-lg">Python Tutorial for Beginners</h3>
                <p className="text-sm text-ucd-blue/80">Beginner-friendly Python tutorial from Edabit</p>
              </div>
              <ExternalLink className="h-5 w-5 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.section>

        {/* Download Button - Bottom */}
        <div className="flex justify-center">
          <DownloadButton position="bottom" />
        </div>
      </div>
    </div>
  )
}

export default Lab1
