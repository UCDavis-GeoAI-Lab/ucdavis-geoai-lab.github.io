import { Link } from 'react-router-dom'
import { ArrowLeft, Download, List, Database, Scissors, CheckSquare, FileText, BarChart, Globe } from 'lucide-react'
import QASection from '../components/QASection'
import InClassQA from '../components/InClassQA'
import { CodeBlock, Section, ResourceLink } from '../components/LessonComponents'

const Lab2 = () => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const notebookPath = `${basePath}/code/colab/Week2/ABT182_Lab2_variables_and_statements.ipynb`

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = notebookPath
    link.download = 'ABT182_Lab2_variables_and_statements.ipynb'
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
                <span className="bg-ucd-gold text-ucd-blue px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Week 2</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-300 font-medium">Data Structures</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Lists, Sets & Dictionaries</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Learn how to organize and manipulate agricultural and GIS data using Python's powerful data structures.
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="group flex items-center bg-ucd-gold hover:bg-white text-ucd-blue px-4 py-3 md:px-6 md:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto"
            >
              <Download className="h-5 w-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="text-left min-w-0 flex-1">
                <div className="text-xs uppercase opacity-80">Download Notebook</div>
                <div className="text-sm md:text-lg truncate">ABT182_Lab2.ipynb</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 1. Lists */}
        <Section title="Lists: Ordered Data">
          <div className="space-y-8">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <List className="w-6 h-6 mr-3 text-ucd-blue" /> Working with Lists
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Lists are <strong>ordered</strong> and <strong>mutable</strong> collections. In GIS, we often use lists to store time-series data, spectral bands, or coordinate pairs.
              </p>
              
              <CodeBlock 
                code={`# Storing average monthly rainfall (mm) for Davis, CA
rainfall = [85.0, 78.5, 65.2, 28.4, 12.1]

# 1. Check length (number of months)
print(f"Number of months: {len(rainfall)}")

# 2. Append data (June rainfall)
rainfall.append(3.5)
print(f"Updated rainfall: {rainfall}")

# 3. Sort data (ascending)
rainfall.sort()
print(f"Sorted rainfall: {rainfall}")`} 
                output={`Number of months: 5
Updated rainfall: [85.0, 78.5, 65.2, 28.4, 12.1, 3.5]
Sorted rainfall: [3.5, 12.1, 28.4, 65.2, 78.5, 85.0]`} 
              />
              
              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 text-yellow-900 mt-6">
                <h4 className="font-bold text-lg mb-2">Important: sort() vs sorted()</h4>
                <p className="mb-2">
                  <code>list.sort()</code> sorts the list <strong>in-place</strong> (changes the original list) and returns <code>None</code>.
                </p>
                <p>
                  <code>sorted(list)</code> creates a <strong>new sorted list</strong> and leaves the original unchanged.
                </p>
                <div className="mt-3">
                  <ResourceLink href="https://www.30secondsofcode.org/python/s/sortedlist-vs-list-sort/" text="Read more about sort() vs sorted()" />
                </div>
              </div>

              <div className="mt-4">
                 <ResourceLink href="https://www.w3schools.com/python/python_ref_list.asp" text="W3Schools: List Methods Reference" />
              </div>
            </div>

            {/* Slicing */}
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Scissors className="w-6 h-6 mr-3 text-ucd-blue" /> List Slicing
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Access specific parts of a list using <code>[start:stop:step]</code>. Remember that the <strong>stop</strong> index is NOT included.
              </p>
              <CodeBlock 
                code={`bands = ["Blue", "Green", "Red", "NIR", "SWIR1", "SWIR2"]

# Get visible light bands (indices 0, 1, 2)
visible_bands = bands[0:3]
print(f"Visible bands: {visible_bands}")

# Get every second band
every_other = bands[::2]
print(f"Every other band: {every_other}")`} 
                output={`Visible bands: ['Blue', 'Green', 'Red']
Every other band: ['Blue', 'Red', 'SWIR1']`} 
              />
            </div>
          </div>
        </Section>

        {/* 2. Sets */}
        <Section title="Sets: Unique Collections">
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-600 text-lg mb-6">
              Sets are <strong>unordered</strong> collections with <strong>no duplicate elements</strong>. They are perfect for finding unique items or comparing groups (intersection, union).
            </p>
            <CodeBlock 
              code={`# Crop types identified in two different fields
field_A = {"Corn", "Soybean", "Wheat", "Corn"}  # Duplicate 'Corn' is removed
field_B = {"Rice", "Soybean", "Alfalfa"}

print(f"Unique crops in Field A: {field_A}")

# Find crops common to both fields (Intersection)
common_crops = field_A & field_B
# Or: common_crops = field_A.intersection(field_B)

print(f"Crops found in both fields: {common_crops}")`} 
              output={`Unique crops in Field A: {'Wheat', 'Soybean', 'Corn'}
Crops found in both fields: {'Soybean'}`} 
            />
            {/* Sets - Enhanced with Methods */}
            <div className="max-w-5xl mx-auto mt-12">
              <h4 className="font-bold text-lg text-gray-800 mb-4">Common Set Methods</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-600 bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50 text-gray-700 font-bold uppercase text-xs">
                    <tr>
                      <th className="px-4 py-3 border-b">Method</th>
                      <th className="px-4 py-3 border-b">Shortcut</th>
                      <th className="px-4 py-3 border-b">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-ucd-blue">add()</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">Adds an element to the set</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-ucd-blue">clear()</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">Removes all elements from the set</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-ucd-blue">copy()</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">Returns a copy of the set</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-ucd-blue">difference()</td>
                      <td className="px-4 py-3 font-mono">-</td>
                      <td className="px-4 py-3">Returns set difference (items in A but not B)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-ucd-blue">intersection()</td>
                      <td className="px-4 py-3 font-mono">&</td>
                      <td className="px-4 py-3">Returns intersection (items in both A and B)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-ucd-blue">union()</td>
                      <td className="px-4 py-3 font-mono">|</td>
                      <td className="px-4 py-3">Returns union (all unique items from A and B)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-ucd-blue">symmetric_difference()</td>
                      <td className="px-4 py-3 font-mono">^</td>
                      <td className="px-4 py-3">Returns items in either A or B, but not both</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-mono text-ucd-blue">issubset()</td>
                      <td className="px-4 py-3 font-mono">&lt;=</td>
                      <td className="px-4 py-3">Returns True if all items of this set are in another</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4">
                 <ResourceLink href="https://www.w3schools.com/python/python_ref_set.asp" text="W3Schools: Set Methods Reference" />
              </div>
            </div>
          </div>
        </Section>

        {/* 3. Dictionaries */}
        <Section title="Dictionaries: Key-Value Pairs">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
              <Database className="w-6 h-6 mr-3 text-ucd-blue" /> Storing Metadata
            </h3>
            <p className="text-gray-600 mb-4 text-lg">
              Dictionaries map <strong>keys</strong> to <strong>values</strong>. In GIS, they are ideal for storing attributes or metadata about a feature.
            </p>
            <CodeBlock 
              code={`# Metadata for a satellite image
image_meta = {
    "sensor": "Sentinel-2",
    "resolution": 10,
    "date": "2026-01-15",
    "cloud_cover": 2.5
}

# Access specific information
print(f"Sensor: {image_meta['sensor']}")
print(f"Resolution: {image_meta['resolution']}m")

# Get all keys (attributes)
print(f"Attributes available: {list(image_meta.keys())}")`} 
              output={`Sensor: Sentinel-2
Resolution: 10m
Attributes available: ['sensor', 'resolution', 'date', 'cloud_cover']`} 
            />
          </div>
        </Section>

        {/* 4. String Formatting */}
        <Section title="String Formatting">
          <div className="space-y-8">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <FileText className="w-6 h-6 mr-3 text-ucd-blue" /> Modern Formatting with F-Strings
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Introduced in Python 3.6, <strong>f-strings</strong> (formatted string literals) are the preferred, faster, and more readable way to format strings. Simply prefix the string with <code>f</code> and put variables in curly braces <code>{`{}`}</code>.
              </p>

              <CodeBlock 
                code={`import datetime

site_id = "CA_Davis_01"
temp_c = 24.5678
date = datetime.date.today()

# Basic f-string
print(f"Site: {site_id}")

# Formatting decimals (.2f = 2 decimal places)
print(f"Temperature: {temp_c:.2f} °C")

# Expressions inside braces
print(f"Temp in Fahrenheit: {(temp_c * 9/5) + 32:.1f} °F")

# Formatting dates (e.g., Month Day, Year)
# Note: In real output, this will use today's date
print(f"Date: {date:%B %d, %Y}")`} 
                output={`Site: CA_Davis_01
Temperature: 24.57 °C
Temp in Fahrenheit: 76.2 °F
Date: January 12, 2026`} 
              />
              
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400 text-red-900 mt-6">
                <h4 className="font-bold text-lg mb-2">Warning: Backslashes</h4>
                <p>
                  You cannot use backslashes <code>\</code> directly inside f-string expressions (curly braces).
                </p>
                <code className="block bg-red-100 p-2 mt-2 rounded text-sm">
                  # Error
                  <br />
                  f"newline: {`{ord('\\n')}`}"
                  <br />
                  <br />
                  # Correct
                  <br />
                  newline = ord('\n')
                  <br />
                  f"newline: {`{newline}`}"
                </code>
              </div>

              <div className="mt-4 space-y-2">
                 <div className="block"><ResourceLink href="https://www.geeksforgeeks.org/formatted-string-literals-f-strings-python/" text="GeeksForGeeks: F-Strings Guide" /></div>
                 <div className="block"><ResourceLink href="https://www.w3schools.com/python/python_string_formatting.asp" text="W3Schools: String Formatting" /></div>
              </div>
            </div>

            {/* Older .format() method */}
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Scissors className="w-6 h-6 mr-3 text-ucd-blue" /> The .format() Method (Legacy)
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Before f-strings, <code>.format()</code> was the standard. You might still see this in older codebases.
              </p>
              <CodeBlock 
                code={`# Using named placeholders
txt1 = "Site: {site}, Temp: {temp:.1f}".format(site="UCD", temp=24.5678)
print(txt1)

# Using numbered indexes
txt2 = "Lat: {0}, Lon: {1}".format(38.54, -121.74)
print(txt2)

# Using empty placeholders
txt3 = "Crop: {}, Area: {} ha".format("Rice", 150)
print(txt3)`} 
                output={`Site: UCD, Temp: 24.6
Lat: 38.54, Lon: -121.74
Crop: Rice, Area: 150 ha`} 
              />
               <div className="mt-4">
                 <ResourceLink href="https://www.w3schools.com/python/ref_string_format.asp" text="W3Schools: format() Method Reference" />
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Conditionals */}
        <Section title="Making Decisions">
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-600 text-lg mb-6">
              Use <code>if</code>, <code>elif</code>, and <code>else</code> to control the flow of your program based on data values.
            </p>
            <CodeBlock 
              code={`ndvi = 0.65

if ndvi < 0:
    print("Water body")
elif ndvi < 0.2:
    print("Soil / Rock")
elif ndvi < 0.5:
    print("Sparse Vegetation")
else:
    print("Dense Vegetation")`} 
              output="Dense Vegetation" 
            />
          </div>
        </Section>

        {/* 6. Statistics Module */}
        <Section title="Statistics in Python">
          <div className="space-y-8">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <BarChart className="w-6 h-6 mr-3 text-ucd-blue" /> The Statistics Module
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Python's built-in <code>statistics</code> module provides functions for calculating mathematical statistics of numeric data.
              </p>
              
              <CodeBlock 
                code={`import statistics

# Yield data (tons/acre) from different fields
yields = [4.5, 3.8, 4.2, 5.1, 4.5, 3.9, 4.8]

# Calculate Mean (Average)
avg_yield = statistics.mean(yields)
print(f"Average Yield: {avg_yield:.2f} tons/acre")

# Calculate Median (Middle value)
median_yield = statistics.median(yields)
print(f"Median Yield: {median_yield} tons/acre")

# Calculate Mode (Most common value)
mode_yield = statistics.mode(yields)
print(f"Mode Yield: {mode_yield} tons/acre")

# Calculate Standard Deviation (Spread)
stdev_yield = statistics.stdev(yields)
print(f"Standard Deviation: {stdev_yield:.2f}")`} 
                output={`Average Yield: 4.40 tons/acre
Median Yield: 4.5 tons/acre
Mode Yield: 4.5 tons/acre
Standard Deviation: 0.47`} 
              />
              <div className="mt-4">
                 <ResourceLink href="https://www.w3schools.com/python/module_statistics.asp" text="W3Schools: Statistics Module" />
              </div>
            </div>
          </div>
        </Section>

        {/* 7. External Packages */}
        <Section title="Working with External Packages">
          <div className="space-y-8">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Globe className="w-6 h-6 mr-3 text-ucd-blue" /> Example: CountryInfo
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Python has a vast ecosystem of packages. Here's how to use <code>countryinfo</code> to get geographical data.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-ucd-blue mb-4">
                <p className="font-mono text-sm text-blue-900">!pip install countryinfo</p>
              </div>

              <CodeBlock 
                code={`from countryinfo import CountryInfo

# Get info for a specific country
country = CountryInfo('Singapore')

# Retrieve specific data points
print(f"Capital: {country.capital()}")
print(f"Population: {country.population()}")
print(f"Region: {country.region()}")
print(f"Currencies: {country.currencies()}")`} 
                output={`Capital: Singapore
Population: 5469700
Region: Asia
Currencies: ['SGD']`} 
              />
               <div className="mt-4">
                 <ResourceLink href="https://pypi.org/project/countryinfo/" text="PyPI: CountryInfo Documentation" />
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
                  <h4 className="font-bold text-gray-800">1. Complete All Exercises</h4>
                  <p className="text-sm text-gray-500">Finish exercises 1 through 9.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                  <FileText className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">2. Generate PDF</h4>
                  <p className="text-sm text-gray-500">File → Print → Save as PDF.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 flex flex-col justify-center items-center text-center">
              <h4 className="font-bold text-ucd-blue mb-2">Required Files</h4>
              <p className="text-sm text-gray-500 mb-4">Upload to Canvas:</p>
              <div className="flex space-x-4">
                <span className="bg-white border border-gray-200 px-3 py-1 rounded font-mono text-sm text-gray-600">.ipynb</span>
                <span className="bg-white border border-gray-200 px-3 py-1 rounded font-mono text-sm text-gray-600">.pdf</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Q&A Section */}
        <QASection weekNumber={2} />
        
        {/* In-Class Q&A Section */}
        <InClassQA weekNumber={2} />
      </div>
    </div>
  )
}

export default Lab2
