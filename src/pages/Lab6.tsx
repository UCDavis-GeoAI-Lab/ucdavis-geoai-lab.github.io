import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Code, BookOpen, MapPin, ExternalLink } from 'lucide-react'
import QASection from '../components/QASection'
import InClassQA from '../components/InClassQA'
import { Section, ResourceLink } from '../components/LessonComponents'

const Lab6 = () => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const dataPath = `${basePath}/code/colab/Week6/Lab_Instruction/Data/PythEveryone.zip`

  const handleDataDownload = () => {
    const link = document.createElement('a')
    link.href = dataPath
    link.download = 'PythEveryone.zip'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
                <span className="bg-ucd-gold text-ucd-blue px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Week 6</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-300 font-medium">Python in ArcGIS Pro</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Python for Everyone</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Automate GIS workflows and tasks using Python scripting in ArcGIS Pro. Learn to develop scripts that streamline your geospatial analysis.
              </p>
            </div>
            <button
              onClick={handleDataDownload}
              className="group flex items-center bg-ucd-gold hover:bg-white text-ucd-blue px-4 py-3 md:px-6 md:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto"
            >
              <Download className="h-5 w-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="text-left min-w-0 flex-1">
                <div className="text-xs uppercase opacity-80">Download Data</div>
                <div className="text-sm md:text-lg truncate">PythEveryone.zip (4.1 MB)</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Course Attribution */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-start">
            <BookOpen className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-blue-900 mb-2">Course Attribution</h3>
              <p className="text-gray-700 mb-3">
                This lab is based on the <strong>"Python for Everyone"</strong> course developed by <strong>Esri</strong>. 
                All course materials, exercises, and data are provided by Esri and are used with permission for educational purposes.
              </p>
              <div className="flex flex-wrap gap-3">
                <ResourceLink 
                  href="https://www.esri.com/training/catalog/57630436851d31e02a43f13c/python-for-everyone/" 
                  text="Esri: Python for Everyone" 
                />
                <ResourceLink 
                  href="https://www.esri.com/training/catalog/search/" 
                  text="Esri Training Catalog" 
                />
              </div>
              <p className="text-sm text-gray-600 mt-3">
                © Esri. All rights reserved. Course content and materials are the property of Esri and are used under educational license.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Section title="Introduction">
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Do you spend a lot of time repeating workflows, such as copying data, editing files, and setting up map documents? 
              Did you know that you can use Python to automate data reproduction, data management, map display, and many of your 
              other daily tasks in ArcGIS?
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This course provides the building blocks that you need to use Python. You will create and run scripts using these 
              building blocks, and you can apply them directly inside ArcGIS and to your own workflows.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This week, we will explore Python programming for geospatial analysis in ArcGIS Pro by completing Esri's 
              <ResourceLink 
                href="https://www.esri.com/training/catalog/57630436851d31e02a43f13c/python-for-everyone/" 
                text="Python for Everyone" 
              /> course.
            </p>
          </div>
        </Section>

        {/* Learning Goals */}
        <Section title="Learning Goals">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Code className="h-6 w-6 text-ucd-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-ucd-blue mb-2">Automate Tasks</h3>
                  <p className="text-gray-600">Automate geoprocessing tasks and streamline repetitive GIS workflows using Python scripts.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-ucd-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-ucd-blue mb-2">Script Environments</h3>
                  <p className="text-gray-600">Choose the Python scripting environment that meets your needs for different GIS tasks.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-ucd-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-ucd-blue mb-2">Apply Syntax</h3>
                  <p className="text-gray-600">Apply Python syntax rules when writing scripts for geospatial analysis.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Code className="h-6 w-6 text-ucd-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-ucd-blue mb-2">Debug Scripts</h3>
                  <p className="text-gray-600">Correct common scripting errors and troubleshoot Python code effectively.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Software Requirements */}
        <Section title="Software Requirements">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <p className="text-gray-700 mb-4">
              To complete exercises, you need the following:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>ArcGIS Pro 3.5</strong> (Basic, Standard, or Advanced) installed on the lab's computers</li>
            </ul>
          </div>
        </Section>

        {/* How to Get ArcGIS Pro */}
        <Section title="How Do I Get ArcGIS Pro?">
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-lg text-ucd-blue mb-3">Option 1: Install on Your Computer</h3>
              <p className="text-gray-700 mb-3">
                If you would like to use your own computer, you can download and install ArcGIS Pro 3.5 (or 3.6) on your machine.
              </p>
              <ResourceLink 
                href="https://kb.ucdavis.edu/?id=3340" 
                text="UC Davis KB: Download and Install ArcGIS Pro" 
              />
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-lg text-ucd-blue mb-3">Option 2: Use Virtual Computer Lab</h3>
              <p className="text-gray-700 mb-3">
                Alternatively, you can remotely login to the CAES virtual computer lab, which is available 24×7, and use ArcGIS Pro.
              </p>
              <ResourceLink 
                href="https://kb.ucdavis.edu/?id=6888" 
                text="UC Davis KB: Connect to CAES Virtual Computer Lab" 
              />
            </div>
          </div>
        </Section>

        {/* Data Download and Installation */}
        <Section title="Data Download and Installation">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start mb-4">
              <Download className="h-6 w-6 text-ucd-blue mr-3 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-bold text-lg text-ucd-blue mb-2">PythEveryone.zip</h3>
                <p className="text-gray-700 mb-3">
                  Download the course data package (4.1 MB) provided by Esri for the Python for Everyone course.
                </p>
                <button
                  onClick={handleDataDownload}
                  className="inline-flex items-center bg-ucd-blue hover:bg-ucd-blue/90 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PythEveryone.zip
                </button>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="font-bold text-gray-800 mb-2">Installation Instructions:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Download the <code className="bg-gray-100 px-2 py-1 rounded text-sm">PythEveryone.zip</code> file</li>
                <li>Extract the ZIP file to <code className="bg-gray-100 px-2 py-1 rounded text-sm">C:\EsriTraining</code> folder</li>
                <li>If the folder doesn't exist, typing this path as the extraction location should automatically create it</li>
                <li>Alternatively, you can manually create the <code className="bg-gray-100 px-2 py-1 rounded text-sm">C:\EsriTraining</code> folder first</li>
              </ol>
            </div>
          </div>
        </Section>

        {/* Lab Instructions */}
        <Section title="Steps to Complete the Lab">
          <div className="space-y-6">
            {/* Important Notes */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExternalLink className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-yellow-800 mb-2">Important Notes</h3>
                  <ul className="list-disc list-inside space-y-1 text-yellow-700">
                    <li>Please carefully read the following steps as some of them are different from ESRI's instructions</li>
                    <li>Please answer the questions in the notebook as you progress through the course</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Find and Access the Course</h3>
                  <p className="text-gray-700 mb-3">
                    Navigate to the Esri Training catalog and find the <strong>"Python for Everyone"</strong> course:
                  </p>
                  <ResourceLink 
                    href="https://www.esri.com/training/catalog/57630436851d31e02a43f13c/python-for-everyone/" 
                    text="Direct Link: Python for Everyone Course" 
                  />
                  <p className="text-gray-600 text-sm mt-2">
                    <strong>Alternative:</strong> Search for <em>"Python for Everyone"</em> (with quotes) in the Esri Training search box to narrow results.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 - Sign In */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Sign In to the Course</h3>
                  <div className="space-y-4">
                    <img 
                      src={`${basePath}/code/colab/Week6/Lab_Instruction/Markdown/media/image1.png`}
                      alt="Sign in screen"
                      className="rounded-lg border border-gray-300 shadow-sm"
                    />
                    <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
                      <li>Sign in with our organization's URL: type <strong>'ucdavis'</strong> (ucdavis.maps.arcgis.com)</li>
                      <li>Click <strong>'Continue'</strong></li>
                      <li>Select <strong>UC DAVIS KERBEROS</strong> and continue through the normal ADFS login process (click on Kerberos Login)</li>
                    </ol>
                    <img 
                      src={`${basePath}/code/colab/Week6/Lab_Instruction/Markdown/media/image4.png`}
                      alt="UC Davis Kerberos login"
                      className="rounded-lg border border-gray-300 shadow-sm"
                    />
                    <p className="text-gray-600 text-sm">
                      Once you launch the course, you will see the course homepage:
                    </p>
                    <img 
                      src={`${basePath}/code/colab/Week6/Lab_Instruction/Markdown/media/image6.png`}
                      alt="Course homepage"
                      className="rounded-lg border border-gray-300 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Start the Course</h3>
                  <p className="text-gray-700">
                    Once you read the introduction and download the data, start the course (bottom right corner).
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Foundations of Python</h3>
                  <p className="text-gray-700">
                    We encourage you to read all the subsections of <strong>"Foundations of Python"</strong>. You may skip the quiz.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">5</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Python Script Environments</h3>
                  <p className="text-gray-700">
                    Please read all the subsections of <strong>"Python script environments"</strong> that introduce scripting environments for writing Python code.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">6</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Creating Scripts Section</h3>
                  <p className="text-gray-700">
                    You may skip the first two sections of <strong>"Creating scripts"</strong> (i.e., creating scripts and data types), 
                    as we are already familiar with Python syntax and data types (lists, tuples, dictionaries, etc.).
                  </p>
                </div>
              </div>
            </div>

            {/* Step 7 - Exercise & Question 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">7</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-4">Exercise: Create Data Types</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-gray-700 mb-2">
                        <strong>a.</strong> We encourage you to complete all the steps 1-7, but please read the following instructions first. 
                        However, if you feel comfortable, you may skip this exercise and jump to Q1 (below).
                      </p>
                      <p className="text-gray-700">
                        <strong>b.</strong> The ESRI instruction (<strong>5. Concatenate variables and 6. Index and slice variables</strong>) 
                        asks you to write the code in the Python window in ArcGIS Pro, but we need to write our code in the <strong>notebook</strong> 
                        in ArcGIS Pro (please feel free to test writing code in the Python window).
                      </p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mt-4">
                      <h4 className="font-bold text-xl text-green-900 mb-3">Question 1</h4>
                      <p className="text-gray-800 mb-4">
                        Write a code that splits the <code className="bg-gray-100 px-2 py-1 rounded text-sm">park</code> string into a list of strings 
                        containing the name of the file and its extension: <code className="bg-gray-100 px-2 py-1 rounded text-sm">['Parks_sd520', 'shp']</code>
                      </p>
                      <ResourceLink 
                        href="https://www.w3schools.com/python/ref_string_split.asp" 
                        text="Example: Python String split() Method" 
                      />
                    </div>

                    <div className="mt-4">
                      <h4 className="font-bold text-gray-800 mb-3">Instructions for Q1:</h4>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                        <li>Open a new notebook: <em>Insert → New Notebook</em></li>
                        <li>Rename the notebook: <em>Catalog → right-click on the notebook → rename it to</em> <strong>"Questions.ipynb"</strong></li>
                        <li>You will submit this notebook</li>
                        <li>Add a heading: <strong>Question 1</strong></li>
                        <li>Add a code cell below and write your code there</li>
                        <li>Check the screenshot below</li>
                      </ol>
                      <img 
                        src={`${basePath}/code/colab/Week6/Lab_Instruction/Markdown/media/image7.png`}
                        alt="ArcGIS Pro notebook example"
                        className="rounded-lg border border-gray-300 shadow-sm mt-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 8 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">8</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Continue with Statements and Functions</h3>
                  <p className="text-gray-700">
                    Once you are done with the exercise, please move on to the following sections (<strong>Statements, Functions</strong>). 
                    You may skim over these sections to refresh your skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 9 - Exercise 2 & Question 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">9</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-4">Exercise 2: Create a Script</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Follow the instructions in <strong>Exercise 2 (Create a script)</strong>.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 mt-4">
                      <h4 className="font-bold text-xl text-green-900 mb-3">Question 2</h4>
                      <p className="text-gray-800 mb-4">
                        In section 5 (<strong>Create a text file</strong>), write a code that adds your name as the author at the beginning of the text file. 
                        So, the text in the file should be like this:
                      </p>
                      <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                        <div className="text-gray-800">Author: Ali Moghimi [change it to your name]</div>
                        <div className="text-gray-800">Parks_SD.shp</div>
                        <div className="text-gray-800">Schools_SD.shp</div>
                        <div className="text-gray-800">Sewer_Main_SD.shp</div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-bold text-gray-800 mb-3">Instructions for Q2:</h4>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                        <li>In your <strong>Questions.ipynb</strong> notebook, add another heading: <strong>Question 2</strong> (similar to the screenshot above)</li>
                        <li>Add a code cell below and write your code there to save a text file with the requested information</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 10 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">10</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Python in ArcGIS Pro</h3>
                  <p className="text-gray-700">
                    Continue the course and move forward to section 4: <strong>Python in ArcGIS Pro</strong>. Please complete the exercise: 
                    <strong> Use Python in a GIS workflow in ArcGIS Pro</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 11 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">11</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">Stopping Point</h3>
                  <p className="text-gray-700">
                    You may stop here. No need to continue with the next section: <strong>Handling errors</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Submission Requirements */}
        <Section title="What to Submit">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="font-bold text-lg text-ucd-blue mb-4">Submit the following files:</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>
                <strong>All notebooks as *.ipynb files:</strong>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">SanDiegoShapefiles.ipynb</code></li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded text-sm">Questions.ipynb</code></li>
                </ul>
              </li>
              <li>
                <strong>Map layout as a PDF file</strong> from the exercise "Use Python in a GIS workflow in ArcGIS Pro"
                <div className="mt-2">
                  <ResourceLink 
                    href="https://geospatialtraining.com/exporting-vector-pdf-maps-in-arcgis-pro/" 
                    text="Tutorial: Exporting Vector PDF Maps in ArcGIS Pro" 
                  />
                </div>
              </li>
              <li>
                <strong>Optional:</strong> You may zip all the files before submitting them
              </li>
            </ol>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <img 
                src={`${basePath}/code/colab/Week6/Lab_Instruction/Markdown/media/image8.png`}
                alt="Example map output"
                className="rounded-lg border border-gray-300 shadow-sm max-w-md"
              />
              <p className="text-sm text-gray-600 mt-2">Example of expected map output</p>
            </div>
          </div>
        </Section>

        {/* In-Class Q&A */}
        <InClassQA weekNumber={6} />

        {/* Q&A Section */}
        <QASection weekNumber={6} />

      </div>
    </div>
  )
}

export default Lab6
