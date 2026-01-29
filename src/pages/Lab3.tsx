import { Link } from 'react-router-dom'
import { ArrowLeft, Download, RefreshCw, Database, Repeat, Scissors, CheckSquare, FileText, Image as ImageIcon, FolderDown } from 'lucide-react'
import QASection from '../components/QASection'
import InClassQA from '../components/InClassQA'
import { CodeBlock, Section, ResourceLink } from '../components/LessonComponents'

const Lab3 = () => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const notebookPath = `${basePath}/code/colab/Week3/ABT182_Lab3_loops_np_array.ipynb`

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = notebookPath
    link.download = 'ABT182_Lab3_loops_np_array.ipynb'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDataDownload = () => {
    window.open('https://ucdavis.box.com/s/4tqpao2lrzrc97pmx6fvm5jcckguzjgy', '_blank')
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
                <span className="bg-ucd-gold text-ucd-blue px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Week 3</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-300 font-medium">Loops & NumPy Arrays</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Working with Raster Data</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Master loops, NumPy arrays, and conditional statements to process multispectral imagery and analyze geospatial data.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <button
                onClick={handleDownload}
                className="group flex items-center bg-ucd-gold hover:bg-white text-ucd-blue px-4 py-3 md:px-6 md:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto"
              >
                <Download className="h-5 w-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-left min-w-0 flex-1">
                  <div className="text-xs uppercase opacity-80">Download Notebook</div>
                  <div className="text-sm md:text-lg truncate">ABT182_Lab3_loops_np_array.ipynb</div>
                </div>
              </button>
              <button
                onClick={handleDataDownload}
                className="group flex items-center bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white px-4 py-3 md:px-6 md:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto"
              >
                <FolderDown className="h-5 w-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-left min-w-0 flex-1">
                  <div className="text-xs uppercase opacity-80">Download Data</div>
                  <div className="text-sm md:text-lg">Lab 3 Dataset</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction: Sentinel-2 Dataset */}
        <Section title="Our Dataset: Sentinel-2 Imagery of Davis, California">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              Throughout this tutorial, we'll work with <strong>real Sentinel-2 multispectral satellite imagery</strong> showing 
              agricultural fields, bare soil areas, and a river in <strong>Davis, California</strong>. 
              This dataset demonstrates practical GIS applications using actual remote sensing data.
            </p>
            
            {/* Download Link */}
            <div className="bg-blue-50 border-l-4 border-ucd-blue p-4 md:p-6 rounded-lg max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <div className="flex items-start">
                <Download className="w-5 h-5 md:w-6 md:h-6 text-ucd-blue mr-3 mt-1 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-base md:text-lg text-gray-800 mb-2">Download the Dataset</h4>
                  <p className="text-gray-700 mb-3 text-sm md:text-base">
                    Interested in working with this Sentinel-2 imagery? Download the GeoTIFF file to follow along with the examples.
                  </p>
                  <a
                    href={`${basePath}/code/colab/Week3/Data_Small_Volume/Sentinel2_Export.tif`}
                    download="Sentinel2_Export.tif"
                    className="inline-flex items-center bg-ucd-blue hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg text-sm md:text-base w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
                    <span className="truncate sm:whitespace-normal">Download Sentinel-2 GeoTIFF (Sentinel2_Export.tif)</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={`${basePath}/code/colab/Week3/Mohammadreza_Lab_Demo/Images/Step4_RGB_TrueColorComposite.png`}
                  alt="Sentinel-2 RGB True-Color Composite of Davis, California showing agricultural fields, bare soil, and a river"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Sentinel-2 RGB True-Color Composite</strong> - This natural-color view shows agricultural fields 
                    (green areas), bare soil (tan/brown areas), and a winding river. We'll use this image to learn 
                    array operations, loops, and classification techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Video Tutorial Section */}
        <Section title="Video Tutorial: NumPy Fundamentals">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              Watch this comprehensive NumPy tutorial from FreeCodeCamp to get a solid foundation before diving into the lab exercises.
            </p>
            <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-md">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/QUT1VHiLmmI" 
                  title="NumPy Tutorial - Complete Course" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-3">
                <ResourceLink href="https://www.youtube.com/watch?v=QUT1VHiLmmI" text="Watch on YouTube - FreeCodeCamp NumPy Tutorial" />
              </div>
            </div>
          </div>
        </Section>

        {/* Google Colab Setup */}
        <Section title="Setting Up Google Colab with Google Drive">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              To work with large raster datasets in Colab, you'll need to connect your Google Drive. This allows you to access data files stored in Drive without uploading them each session.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-ucd-blue">
              <h4 className="font-bold text-lg mb-3">Quick Setup Steps:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Click the folder icon in Colab's left sidebar</li>
                <li>Click the Google Drive icon and authorize access</li>
                <li>Your Drive will be mounted at <code className="bg-white px-2 py-1 rounded">/content/drive/My Drive/</code></li>
              </ol>
            </div>
            <div className="space-y-2">
              <div><ResourceLink href="https://www.marktechpost.com/2025/07/12/how-to-connect-google-colab-with-google-drive/" text="Complete Guide: Connecting Google Colab to Google Drive (2025)" /></div>
              <div><ResourceLink href="https://medium.com/ml-book/simplest-way-to-open-files-from-google-drive-in-google-colab-fae14810674" text="Tutorial: Opening Google Drive Files in Colab" /></div>
            </div>
          </div>
        </Section>

        {/* 1. NumPy Arrays */}
        <Section title="NumPy Arrays: The Foundation of Raster Processing">
          <div className="space-y-8">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Database className="w-6 h-6 mr-3 text-ucd-blue" /> What is NumPy?
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                NumPy (Numerical Python) is the core library for numerical computing in Python. In remote sensing, 
                raster images are stored as <strong>multidimensional NumPy arrays</strong> where each pixel is a value 
                and each band is a separate layer.
              </p>
              
              <CodeBlock 
                code={`import numpy as np

# Create a simple 2D array (like a grayscale image)
# Rows = height, Columns = width
image_2d = np.array([
    [100, 120, 140],
    [110, 130, 150],
    [105, 125, 145]
])

print(f"Image shape (rows, cols): {image_2d.shape}")
print(f"Image size: {image_2d.size} pixels")
print(f"Data type: {image_2d.dtype}")`} 
                output={`Image shape (rows, cols): (3, 3)
Image size: 9 pixels
Data type: int64`} 
              />
              
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-ucd-blue mt-6">
                <h4 className="font-bold text-lg mb-2">Why NumPy for GIS?</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Fast mathematical operations on entire arrays</li>
                  <li>Efficient memory usage for large raster datasets</li>
                  <li>Essential for image processing and spectral analysis</li>
                  <li>Compatible with rasterio, GDAL, and other GIS libraries</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <div><ResourceLink href="https://numpy.org/doc/stable/user/absolute_beginners.html" text="NumPy: Absolute Basics for Beginners - Official Documentation" /></div>
                <div><ResourceLink href="https://www.kaggle.com/code/themlphdstudent/learn-numpy-numpy-50-exercises-and-solution" text="Kaggle: NumPy 50 Exercises with Solutions" /></div>
              </div>
            </div>

            {/* Rasterio Section */}
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto mt-8">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <FileText className="w-6 h-6 mr-3 text-ucd-blue" /> Reading Raster Data with Rasterio
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Rasterio is the standard Python library for reading and writing geospatial raster data (GeoTIFF, HDF, etc.). It seamlessly converts raster bands into NumPy arrays for analysis.
              </p>
              <CodeBlock 
                code={`import rasterio

# Open a GeoTIFF file
with rasterio.open('path/to/satellite_image.tif') as src:
    # Read the first band as a NumPy array
    band1 = src.read(1)
    
    # Get coordinate reference system (CRS)
    crs = src.crs
    print(f"CRS: {crs}")
    
    # Get image dimensions
    print(f"Shape: {band1.shape}")
    print(f"Data type: {band1.dtype}")`} 
                output={`CRS: EPSG:32633
Shape: (1000, 1000)
Data type: uint16`} 
              />
              <div className="mt-4 space-y-2">
                <div><ResourceLink href="https://rasterio.readthedocs.io/en/latest/topics/reading.html" text="Rasterio: Reading Datasets - Complete Guide" /></div>
                <div><ResourceLink href="https://rasterio.readthedocs.io/en/stable/quickstart.html#id2" text="Rasterio Quickstart: Opening TIFF Files and Accessing CRS" /></div>
                <div><ResourceLink href="https://rasterio.readthedocs.io/en/latest/" text="Rasterio Full Documentation" /></div>
              </div>
            </div>

            {/* Array Operations */}
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Scissors className="w-6 h-6 mr-3 text-ucd-blue" /> Array Slicing & Indexing
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Extract specific bands, regions, or pixels from your raster data using array slicing. Slicing is essential for processing sub-regions of large satellite images.
              </p>
              
              {/* Example 1: Cropping */}
              <div className="mb-8">
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Example 1: Cropping a Region</h4>
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                  <img 
                    src={`${basePath}/code/colab/Week3/Mohammadreza_Lab_Demo/Images/Step3_ArraySlicing_CroppedRegion.png`}
                    alt="Array slicing: Cropped region from Sentinel-2 image"
                    className="w-full h-auto"
                  />
                  <div className="p-3 bg-gray-50">
                    <p className="text-sm text-gray-600"><strong>Cropping:</strong> Extract a 100×100 pixel region from the center of the image</p>
                  </div>
                </div>
                <CodeBlock 
                  code={`# Crop a region from Sentinel-2 red band
with rasterio.open('sentinel2_image.tif') as src:
    all_bands = src.read()  # Shape: (bands, rows, cols)
    red_band = all_bands[3, :, :]  # Extract red band
    
    # Crop center region (100x100 pixels)
    h, w = red_band.shape
    center_region = red_band[h//2-50:h//2+50, w//2-50:w//2+50]
    
    print(f"Cropped region shape: {center_region.shape}")`} 
                  output={`Cropped region shape: (100, 100)`} 
                />
              </div>

              {/* Example 2: Multiple Regions */}
              <div className="mb-8">
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Example 2: Extracting Multiple Regions</h4>
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                  <img 
                    src={`${basePath}/code/colab/Week3/Mohammadreza_Lab_Demo/Images/Step3_ArraySlicing_FourCorners.png`}
                    alt="Array slicing: Four corner regions"
                    className="w-full h-auto"
                  />
                  <div className="p-3 bg-gray-50">
                    <p className="text-sm text-gray-600"><strong>Multiple Regions:</strong> Extract four corner regions for comparison</p>
                  </div>
                </div>
                <CodeBlock 
                  code={`# Extract four corner regions
size = 80
corners = {
    'top_left': red_band[0:size, 0:size],
    'top_right': red_band[0:size, w-size:w],
    'bottom_left': red_band[h-size:h, 0:size],
    'bottom_right': red_band[h-size:h, w-size:w]
}

# Display all corners
for name, region in corners.items():
    print(f"{name}: {region.shape}")`} 
                  output={`top_left: (80, 80)
top_right: (80, 80)
bottom_left: (80, 80)
bottom_right: (80, 80)`} 
                />
              </div>

              <div className="mt-4">
                <ResourceLink href="https://www.w3schools.com/python/numpy/numpy_array_slicing.asp" text="W3Schools: NumPy Array Slicing - Complete Guide" />
              </div>
            </div>
          </div>
        </Section>

        {/* 2. For Loops */}
        <Section title="For Loops: Iterating Through Data">
          <div className="space-y-8">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Repeat className="w-6 h-6 mr-3 text-ucd-blue" /> Using For Loops with Sentinel-2 Bands
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Loops allow you to process multiple items efficiently. In GIS, you might loop through bands, 
                pixels, or time-series data. Here's a practical example using our Sentinel-2 dataset.
              </p>
              
              {/* Real Example: Displaying All Bands */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Example: Display All 12 Bands</h4>
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                  <img 
                    src={`${basePath}/code/colab/Week3/Mohammadreza_Lab_Demo/Images/Step5_AllBands_ForLoop_0to035.png`}
                    alt="All 12 Sentinel-2 bands displayed using a for loop"
                    className="w-full h-auto"
                  />
                  <div className="p-3 bg-gray-50">
                    <p className="text-sm text-gray-600">
                      <strong>For Loop Application:</strong> Display all 12 Sentinel-2 bands (0-0.35 reflectance range) in a 3×4 grid
                    </p>
                  </div>
                </div>
                <CodeBlock 
                  code={`# Display all 12 Sentinel-2 bands using a for loop
import matplotlib.pyplot as plt

band_names = ['Band 1', 'Band 2 (Blue)', 'Band 3 (Green)', 'Band 4 (Red)', 
              'Band 5', 'Band 6', 'Band 7', 'Band 8 (NIR)', 
              'Band 9', 'Band 10', 'Band 11', 'Band 12']

fig, axes = plt.subplots(3, 4, figsize=(16, 12))
axes = axes.flatten()

# Loop through all bands
for i in range(12):
    band_data = all_bands[i]
    axes[i].imshow(band_data, cmap='gray', vmin=0, vmax=0.35)
    axes[i].set_title(band_names[i])
    axes[i].axis('off')
    
plt.tight_layout()
plt.show()`} 
                  output={`# Displays all 12 bands in a grid layout`} 
                />
              </div>
            </div>

            {/* Nested Loops */}
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <RefreshCw className="w-6 h-6 mr-3 text-ucd-blue" /> Nested Loops
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Use nested loops to process 2D arrays (like images) row by row and column by column.
              </p>
              <CodeBlock 
                code={`# Calculate average pixel value for each row
image = np.array([
    [100, 120, 140],
    [110, 130, 150],
    [105, 125, 145]
])

row_averages = []
for row in range(image.shape[0]):
    row_sum = 0
    for col in range(image.shape[1]):
        row_sum += image[row, col]
    avg = row_sum / image.shape[1]
    row_averages.append(avg)
    print(f"Row {row} average: {avg:.1f}")`} 
                output={`Row 0 average: 120.0
Row 1 average: 130.0
Row 2 average: 125.0`} 
              />
            </div>
          </div>
        </Section>

        {/* 3. List Comprehensions */}
        <Section title="List Comprehensions: Concise Data Processing">
          <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
            <p className="text-gray-600 text-lg mb-6">
              List comprehensions provide a <strong>concise way</strong> to create lists. They're faster and 
              more Pythonic than traditional loops for simple transformations.
            </p>
            
            <CodeBlock 
              code={`# Traditional approach: Create list of even numbers
even_numbers = []
for num in range(1, 21):
    if num % 2 == 0:
        even_numbers.append(num)

# List comprehension (one line!)
even_numbers = [num for num in range(1, 21) if num % 2 == 0]

# Calculate squared values for NDVI indices
ndvi_values = [0.1, 0.3, 0.5, 0.7, 0.9]
squared_ndvi = [val ** 2 for val in ndvi_values]
print(f"Squared NDVI: {squared_ndvi}")`} 
              output={`Squared NDVI: [0.01, 0.09, 0.25, 0.49, 0.81]`} 
            />
            
            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 text-yellow-900 mt-6">
              <h4 className="font-bold text-lg mb-2">When to Use List Comprehensions</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Simple transformations (filtering, mapping)</li>
                <li>Creating new lists from existing data</li>
                <li>When readability is maintained</li>
                <li><strong>Avoid</strong> for complex logic or multiple operations</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 4. Conditional Statements */}
        <Section title="Conditional Statements: Making Decisions">
          <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
            <p className="text-gray-600 text-lg mb-6">
              Use <code>if</code>, <code>elif</code>, and <code>else</code> to classify pixels, filter data, 
              or apply different processing based on conditions.
            </p>
            
            {/* Real Example: NDVI Classification */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-gray-800 mb-3">Example: Classify Vegetation Using NDVI</h4>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                <img 
                  src={`${basePath}/code/colab/Week3/Mohammadreza_Lab_Demo/Images/Step10_NDVI_ClassificationMap.png`}
                  alt="NDVI classification map showing vegetation classes"
                  className="w-full h-auto"
                />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    <strong>Classification Result:</strong> Pixels classified into 5 categories: Water/Cloud, Soil/Bare, 
                    Sparse Veg, Moderate Veg, Dense Veg
                  </p>
                </div>
              </div>
              <CodeBlock 
                code={`# Classify pixels using NumPy conditional operations
import numpy as np

# Initialize classification array
ndvi_classified = np.full_like(ndvi, np.nan)

# Classify based on NDVI thresholds
ndvi_classified = np.where(ndvi < 0, 0, ndvi_classified)  # Water/Clouds
ndvi_classified = np.where((ndvi >= 0) & (ndvi < 0.2), 1, ndvi_classified)  # Soil/Bare
ndvi_classified = np.where((ndvi >= 0.2) & (ndvi < 0.4), 2, ndvi_classified)  # Sparse Veg
ndvi_classified = np.where((ndvi >= 0.4) & (ndvi < 0.6), 3, ndvi_classified)  # Moderate Veg
ndvi_classified = np.where(ndvi >= 0.6, 4, ndvi_classified)  # Dense Veg

# Count pixels in each class
for i in range(5):
    count = np.sum(ndvi_classified == i)
    print(f"Class {i}: {count:,} pixels")`} 
                output={`Class 0: 19 pixels
Class 1: 23,669 pixels
Class 2: 11,523 pixels
Class 3: 26,076 pixels
Class 4: 27,161 pixels`} 
              />
            </div>
          </div>
        </Section>

        {/* 5. Break and Continue */}
        <Section title="Break & Continue: Controlling Loop Flow">
          <div className="space-y-8">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <CheckSquare className="w-6 h-6 mr-3 text-ucd-blue" /> Using Break
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                <code>break</code> exits the loop immediately when a condition is met. Useful for finding 
                the first occurrence of something.
              </p>
              <CodeBlock 
                code={`# Find the first coastal city in a list
cities = ["Sacramento", "Los Angeles", "San Francisco", "Fresno"]
is_coastal = [False, True, True, False]

for i in range(len(cities)):
    if is_coastal[i]:
        print(f"The first coastal city is {cities[i]}.")
        break  # Stop searching once found`} 
                output={`The first coastal city is Los Angeles.`} 
              />
            </div>

            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <RefreshCw className="w-6 h-6 mr-3 text-ucd-blue" /> Using Continue
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                <code>continue</code> skips the rest of the current iteration and moves to the next. 
                Perfect for filtering out invalid data.
              </p>
              <CodeBlock 
                code={`# Clean sensor readings (skip missing data)
readings = [20.1, 21.3, None, 19.8, None, 22.5, 23.0]

cleaned = []
missing_count = 0

for reading in readings:
    if reading is None:
        missing_count += 1
        continue  # Skip None values
    cleaned.append(reading)

print(f"Cleaned readings: {cleaned}")
print(f"Missing data points: {missing_count}")`} 
                output={`Cleaned readings: [20.1, 21.3, 19.8, 22.5, 23.0]
Missing data points: 2`} 
              />
            </div>
          </div>
        </Section>

        {/* 6. NumPy Array Operations */}
        <Section title="NumPy Array Operations for Raster Analysis">
          <div className="space-y-8">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Database className="w-6 h-6 mr-3 text-ucd-blue" /> Statistical Operations
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                NumPy provides fast statistical functions for analyzing raster data across entire arrays.
              </p>
              <CodeBlock 
                code={`# Temperature data from multiple sensors (in Celsius)
temperatures = np.array([15.2, 16.1, 14.8, 17.3, 18.5, 16.9, 19.2])

# Calculate statistics
mean_temp = np.mean(temperatures)
std_temp = np.std(temperatures)
min_temp = np.min(temperatures)
max_temp = np.max(temperatures)

print(f"Mean: {mean_temp:.2f}°C")
print(f"Std Dev: {std_temp:.2f}°C")
print(f"Range: {min_temp:.2f} to {max_temp:.2f}°C")

# Find anomalies (values > 1 standard deviation from mean)
anomalies = temperatures[np.abs(temperatures - mean_temp) > std_temp]
print(f"Anomalies: {anomalies}")`} 
                output={`Mean: 16.86°C
Std Dev: 1.58°C
Range: 14.80 to 19.20°C
Anomalies: [14.8 19.2]`} 
              />
            </div>

            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <ImageIcon className="w-6 h-6 mr-3 text-ucd-blue" /> Working with Multidimensional Arrays
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Process multispectral imagery by working with 3D arrays (bands, rows, columns). Reshape arrays to match different library requirements (rasterio uses band-first, matplotlib uses band-last).
              </p>
              <CodeBlock 
                code={`# Simulate monthly temperatures for 4 cities (4 cities × 12 months)
los_angeles = np.array([20, 20, 21, 22, 22, 23, 24, 25, 24, 23, 21, 20])
san_francisco = np.array([15, 16, 16, 17, 17, 18, 18, 19, 19, 18, 17, 16])
san_diego = np.array([19, 19, 20, 21, 21, 22, 23, 24, 23, 22, 21, 20])
sacramento = np.array([12, 13, 15, 17, 19, 22, 25, 26, 25, 21, 16, 13])

# Combine into 2D array (cities × months)
temp_array = np.array([los_angeles, san_francisco, san_diego, sacramento])

# Calculate annual average for each city (mean along columns, axis=1)
annual_avg = np.mean(temp_array, axis=1)
print(f"Annual averages: {annual_avg}")

# Find city with highest average
max_city_idx = np.argmax(annual_avg)
cities = ["Los Angeles", "San Francisco", "San Diego", "Sacramento"]
print(f"Warmest city: {cities[max_city_idx]} ({annual_avg[max_city_idx]:.2f}°C)")`} 
                output={`Annual averages: [21.83 17.08 21.33 18.42]
Warmest city: Los Angeles (21.83°C)`} 
              />
              <div className="mt-4 space-y-2">
                <div><ResourceLink href="https://rasterio.readthedocs.io/en/latest/topics/image_processing.html#imageorder" text="Rasterio: Reshaping Images and Interoperability (Band Order)" /></div>
                <div><ResourceLink href="https://scipy-lectures.org/advanced/image_processing/" text="SciPy Lectures: Advanced Image Processing with NumPy and SciPy" /></div>
              </div>
            </div>
          </div>
        </Section>

        {/* 7. Visualizing Raster Data */}
        <Section title="Visualizing Raster Data with Matplotlib">
          <div className="space-y-8">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <ImageIcon className="w-6 h-6 mr-3 text-ucd-blue" /> Displaying Images from NumPy Arrays
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Matplotlib's <code>imshow()</code> function displays NumPy arrays as images. Essential for visualizing satellite imagery, spectral bands, and processed raster data.
              </p>
              
              {/* RGB Composites */}
              <div className="mb-8">
                <h4 className="font-semibold text-lg text-gray-800 mb-3">RGB Composites</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <img 
                      src={`${basePath}/code/colab/Week3/Mohammadreza_Lab_Demo/Images/Step4_RGB_TrueColorComposite.png`}
                      alt="Sentinel-2 RGB True-Color Composite showing agricultural fields"
                      className="w-full h-auto object-contain"
                    />
                    <div className="p-3 bg-gray-50 mt-auto">
                      <p className="text-sm text-gray-600"><strong>RGB Composite:</strong> Natural-color view of fields and river</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <img 
                      src={`${basePath}/code/colab/Week3/Mohammadreza_Lab_Demo/Images/Step6_FalseColorComposite_NIR_Red_Green.png`}
                      alt="False-color composite highlighting vegetation"
                      className="w-full h-auto object-contain"
                    />
                    <div className="p-3 bg-gray-50 mt-auto">
                      <p className="text-sm text-gray-600"><strong>False-Color:</strong> NIR-Red-Green composite (vegetation appears red)</p>
                    </div>
                  </div>
                </div>
                <CodeBlock 
                  code={`# Create RGB composite from Sentinel-2 bands
import matplotlib.pyplot as plt
import numpy as np

# Stack RGB bands (rasterio format: bands, rows, cols)
rgb_composite = np.stack([red_band, green_band, blue_band], axis=0)
rgb_composite = np.transpose(rgb_composite, (1, 2, 0))  # Convert to (rows, cols, bands)

# Apply brightness enhancement
rgb_stretched = np.clip(rgb_composite * 4.5, 0, 1)

# Display RGB composite
plt.figure(figsize=(12, 10))
plt.imshow(rgb_stretched)
plt.title('Sentinel-2 RGB True-Color Composite')
plt.axis('off')
plt.show()`} 
                  output={`# Displays natural-color satellite image`} 
                />
              </div>

              {/* NDVI Visualization */}
              <div className="mb-8">
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Vegetation Index Visualization</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <img 
                      src={`${basePath}/code/colab/Week3/Mohammadreza_Lab_Demo/Images/Step8_NDVI_Visualization.png`}
                      alt="NDVI visualization showing vegetation health"
                      className="w-full h-auto object-contain"
                    />
                    <div className="p-3 bg-gray-50 mt-auto">
                      <p className="text-sm text-gray-600"><strong>NDVI Map:</strong> Red-Yellow-Green colormap shows vegetation density</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                    <img 
                      src={`${basePath}/code/colab/Week3/Mohammadreza_Lab_Demo/Images/Step10_NDVI_ClassificationMap.png`}
                      alt="NDVI classification map with vegetation classes"
                      className="w-full h-auto object-contain"
                    />
                    <div className="p-3 bg-gray-50 mt-auto">
                      <p className="text-sm text-gray-600"><strong>Classification:</strong> Categorized into vegetation classes</p>
                    </div>
                  </div>
                </div>
                <CodeBlock 
                  code={`# Calculate and visualize NDVI
# NDVI = (NIR - Red) / (NIR + Red)
ndvi = (nir_band - red_band) / (nir_band + red_band + 1e-10)
ndvi = np.clip(ndvi, -1, 1)

# Display NDVI with colormap
plt.imshow(ndvi, cmap='RdYlGn', vmin=-0.1, vmax=1)
plt.colorbar(label='NDVI')
plt.title('NDVI: Vegetation Health Index')
plt.axis('off')
plt.show()`} 
                  output={`# Displays vegetation index map`} 
                />
              </div>

              {/* Comparison Image */}
              <div className="mb-8">
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Complete Analysis Comparison</h4>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={`${basePath}/code/colab/Week3/Mohammadreza_Lab_Demo/Images/Step11_Comparison_RGB_NDVI_Classification.png`}
                    alt="Side-by-side comparison of RGB, NDVI, and classification"
                    className="w-full h-auto"
                  />
                  <div className="p-3 bg-gray-50">
                    <p className="text-sm text-gray-600">
                      <strong>Complete Analysis:</strong> Compare RGB composite, NDVI, and classification in one view
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400 mt-6">
                <h4 className="font-bold text-lg mb-2">GIS Visualization Tips:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use <code>cmap='gray'</code> for single-band images</li>
                  <li>Apply colormaps like <code>'RdYlGn'</code> or <code>'viridis'</code> for indices (NDVI, NDWI)</li>
                  <li>Set <code>vmin</code> and <code>vmax</code> to control color scale range</li>
                  <li>Use <code>plt.colorbar()</code> to show value-to-color mapping</li>
                </ul>
              </div>
              <div className="mt-4 space-y-2">
                <div><ResourceLink href="https://matplotlib.org/stable/tutorials/images.html" text="Matplotlib: Image Tutorial - Displaying NumPy Arrays as Images" /></div>
                <div><ResourceLink href="https://matplotlib.org/stable/plot_types/index.html" text="Matplotlib Plot Types Gallery - Complete Visualization Reference" /></div>
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
                  <p className="text-sm text-gray-500">Finish exercises 1 through 12, including image processing.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                  <FileText className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">2. Generate PDF</h4>
                  <p className="text-sm text-gray-500">File → Print → Save as PDF (required).</p>
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
        <QASection weekNumber={3} />
        
        {/* In-Class Q&A Section */}
        <InClassQA weekNumber={3} />
      </div>
    </div>
  )
}

export default Lab3
