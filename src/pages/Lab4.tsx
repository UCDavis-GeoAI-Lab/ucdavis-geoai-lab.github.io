import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Code, BarChart, TrendingUp, Image as ImageIcon, Zap } from 'lucide-react'
import QASection from '../components/QASection'
import InClassQA from '../components/InClassQA'
import { CodeBlock, Section, ResourceLink } from '../components/LessonComponents'

const Lab4 = () => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const notebookPath = `${basePath}/code/colab/Week4/ABT182_Lab4_functions_plots.ipynb`

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = notebookPath
    link.download = 'ABT182_Lab4_functions_plots.ipynb'
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
                <span className="bg-ucd-gold text-ucd-blue px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Week 4</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-300 font-medium">Functions & Plotting</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Python Functions & Data Visualization</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Create reusable functions and professional visualizations for GIS and environmental data analysis.
              </p>
            </div>
            <button
              onClick={handleDownload}
              className="group flex items-center bg-ucd-gold hover:bg-white text-ucd-blue px-4 py-3 md:px-6 md:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto"
            >
              <Download className="h-5 w-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <div className="text-left min-w-0 flex-1">
                <div className="text-xs uppercase opacity-80">Download Notebook</div>
                <div className="text-sm md:text-lg truncate">ABT182_Lab4_functions_plots.ipynb</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Demo Visualizations */}
        <Section title="Demo: Professional Visualizations">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              Explore these professional visualizations created with Python functions. All examples use <strong>synthetic data</strong> 
              for demonstration purposes and showcase GIS, remote sensing, and environmental applications.
            </p>
            
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={`${basePath}/code/colab/Week4/Demo/Images/Step9_SummaryAllPlots.png`}
                  alt="Summary visualization showing all plot types: temperature trends, land cover, NDVI, and elevation"
                  className="w-full h-auto"
                />
                <div className="p-4 bg-gray-50 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Visualization Summary</strong> - A comprehensive overview of different plot types: line plots for 
                    temperature trends, bar charts for land cover distribution, scatter plots for NDVI analysis, and heatmaps for elevation data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 1. Functions */}
        <Section title="Functions: Reusable Code Blocks">
          <div className="space-y-8">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Code className="w-6 h-6 mr-3 text-ucd-blue" /> Why Use Functions?
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Functions allow you to <strong>encapsulate code</strong> that performs a specific task. In GIS, functions are essential 
                for data processing, calculations, and creating reusable visualization tools.
              </p>
              
              <CodeBlock 
                code={`# Example: Temperature conversion function
def fahr2cels(temperature_f):
    """
    Convert Fahrenheit to Celsius temperature.
    
    Parameters:
        temperature_f: Temperature in Fahrenheit (float or array)
    
    Returns:
        Temperature in Celsius (float or array)
    """
    temperature_c = (temperature_f - 32) * 5 / 9
    return temperature_c

# Use the function
temps_f = [32, 68, 86, 104]
temps_c = fahr2cels(temps_f)
print(f"Celsius: {temps_c}")`} 
                output={`Celsius: [0.0, 20.0, 30.0, 40.0]`} 
              />
              
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-ucd-blue mt-6">
                <h4 className="font-bold text-lg mb-2">Function Benefits in GIS:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Reuse code for multiple datasets or time periods</li>
                  <li>Organize complex analysis workflows</li>
                  <li>Create custom visualization functions</li>
                  <li>Make code more readable and maintainable</li>
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <div><ResourceLink href="https://www.w3schools.com/python/python_functions.asp" text="W3Schools: Python Functions - Complete Guide" /></div>
                <div><ResourceLink href="https://realpython.com/defining-your-own-python-function/" text="Real Python: Defining Your Own Functions" /></div>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Line Plots */}
        <Section title="Line Plots: Time Series & Trends">
          <div className="space-y-8">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <TrendingUp className="w-6 h-6 mr-3 text-ucd-blue" /> Creating Professional Line Plots
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Line plots are ideal for showing trends over time, such as temperature changes, precipitation patterns, or vegetation indices.
              </p>
              
              <CodeBlock 
                code={`import matplotlib.pyplot as plt
import numpy as np

def plot_professional_line(x, y, title="Temperature Trend Analysis", color='#FF6B6B'):
    """Create a professional line plot with modern styling."""
    fig, ax = plt.subplots(figsize=(12, 7), facecolor='white')
    ax.set_facecolor('white')
    
    ax.plot(x, y, color=color, linewidth=3, alpha=0.8)
    ax.fill_between(x, y, alpha=0.2, color=color)
    
    ax.set_title(title, fontsize=18, fontweight='bold', pad=20)
    ax.set_xlabel('Time (Years)', fontsize=14, fontweight='bold')
    ax.set_ylabel('Temperature (°C)', fontsize=14, fontweight='bold')
    ax.tick_params(axis='both', which='major', labelsize=12)
    ax.grid(True, alpha=0.3, linestyle='--')
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    
    plt.tight_layout()
    plt.show()

# Example usage
years = np.arange(2000, 2025)
temperatures = 20 + 5 * np.sin(np.linspace(0, 4*np.pi, len(years))) + np.random.normal(0, 1, len(years))
plot_professional_line(years, temperatures, title='Annual Temperature Trends (2000-2024)')`} 
                output={`# The line plot is displayed below: Temperature Trend Analysis`} 
              />

              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 mt-6">
                <div className="p-3 bg-gray-50 border-b">
                  <h4 className="font-bold text-base text-gray-800">Temperature Trend Analysis</h4>
                </div>
                <img 
                  src={`${basePath}/code/colab/Week4/Demo/Images/Step2_LinePlot.png`}
                  alt="Professional line plot showing temperature trends over time"
                  className="w-full h-auto"
                />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    Line plot with gradient colors showing annual temperature trends. Note: Data is synthetic for demonstration purposes.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <TrendingUp className="w-6 h-6 mr-3 text-ucd-blue" /> Multiple Lines Comparison
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Compare multiple datasets on the same plot to identify patterns and differences.
              </p>
              <CodeBlock 
                code={`# Example: Multiple line comparison
def plot_multiple_lines_professional(data_dict, title="Multiple Line Comparison"):
    """Plot multiple lines on the same figure."""
    fig, ax = plt.subplots(figsize=(14, 8), facecolor='white')
    ax.set_facecolor('white')
    
    colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A']
    for idx, (label, values) in enumerate(data_dict.items()):
        ax.plot(years, values, color=colors[idx % len(colors)], 
               linewidth=2.5, marker='o', markersize=6, label=label, alpha=0.8)
    
    ax.set_title(title, fontsize=20, fontweight='bold', pad=25)
    ax.set_xlabel('Year', fontsize=14, fontweight='bold')
    ax.set_ylabel('Temperature (°C)', fontsize=14, fontweight='bold')
    ax.tick_params(axis='both', which='major', labelsize=12)
    ax.legend(loc='best', fontsize=12)
    ax.grid(True, alpha=0.3, linestyle='--')
    plt.tight_layout()
    plt.show()`} 
                output={`# The multiple line plot is displayed below: Multiple Line Comparison`} 
              />

              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 mt-6">
                <div className="p-3 bg-gray-50 border-b">
                  <h4 className="font-bold text-base text-gray-800">Multiple Line Comparison</h4>
                </div>
                <img 
                  src={`${basePath}/code/colab/Week4/Demo/Images/Step3_MultipleLines.png`}
                  alt="Multiple line plot comparing temperatures across different cities"
                  className="w-full h-auto"
                />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    Compare temperature trends across multiple locations using distinct colors and markers. Note: Data is synthetic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 3. Bar Charts */}
        <Section title="Bar Charts: Categorical Comparisons">
          <div className="space-y-8">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <BarChart className="w-6 h-6 mr-3 text-ucd-blue" /> Custom Bar Charts with Color Gradients
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Bar charts effectively compare categories. Use color gradients to highlight values above or below thresholds.
              </p>
              
              <CodeBlock 
                code={`def plot_custom_bar_professional(data_dict, title="Custom Bar Chart", threshold=50):
    """Create a professional bar chart with gradient colors."""
    categories = list(data_dict.keys())
    values = list(data_dict.values())
    
    # Color: small values = red, large values = green
    colors = []
    for val in values:
        if val <= threshold:
            colors.append('#E74C3C')  # Red for small
        else:
            colors.append('#2ECC71')  # Green for large
    
    fig, ax = plt.subplots(figsize=(14, 8), facecolor='white')
    ax.set_facecolor('white')
    
    bars = ax.bar(categories, values, color=colors, edgecolor='white', linewidth=2)
    ax.axhline(y=threshold, color='black', linestyle='--', linewidth=2, label=f'Threshold ({threshold})')
    
    ax.set_title(title, fontsize=20, fontweight='bold', pad=25)
    ax.set_xlabel('Categories', fontsize=14, fontweight='bold')
    ax.set_ylabel('Values', fontsize=14, fontweight='bold')
    ax.tick_params(axis='both', which='major', labelsize=12)
    ax.legend()
    plt.tight_layout()
    plt.show()`} 
                output={`# The bar chart is displayed below: Bar Chart with Gradients`} 
              />

              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 mt-6">
                <div className="p-3 bg-gray-50 border-b">
                  <h4 className="font-bold text-base text-gray-800">Bar Chart with Gradients</h4>
                </div>
                <img 
                  src={`${basePath}/code/colab/Week4/Demo/Images/Step4_CustomBarChart.png`}
                  alt="Bar chart showing EV charging stations with color gradients"
                  className="w-full h-auto"
                />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    Values below threshold shown in red (smaller values), values above threshold shown in green (larger values). Note: Data is synthetic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Scatter Plots */}
        <Section title="Scatter Plots: Spatial & Correlation Analysis">
          <div className="space-y-8">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <ImageIcon className="w-6 h-6 mr-3 text-ucd-blue" /> NDVI Spatial Distribution
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Scatter plots visualize relationships between variables. In GIS, they're perfect for showing spatial distributions 
                of environmental indices like NDVI (Normalized Difference Vegetation Index).
              </p>
              
              <CodeBlock 
                code={`def plot_ndvi_spatial_map(data, title='NDVI Spatial Distribution Map'):
    """Create NDVI spatial distribution map for remote sensing analysis."""
    longitudes = [point[0] for point in data]
    latitudes = [point[1] for point in data]
    land_cover_types = [point[2] for point in data]
    ndvi_values = [point[3] for point in data]
    
    # Size and shape by land cover type
    land_cover_sizes = {'Forest': 800, 'Cropland': 500, 'Grassland': 300, 
                        'Shrubland': 180, 'Wetland': 100}
    land_cover_markers = {'Forest': '^', 'Cropland': 's', 'Grassland': 'o',
                          'Shrubland': 'D', 'Wetland': 'v'}
    
    fig, ax = plt.subplots(figsize=(14, 10), facecolor='white')
    ax.set_facecolor('white')
    
    # Plot each type with different size and shape, color by NDVI
    for lc_type in set(land_cover_types):
        indices = [i for i, v in enumerate(land_cover_types) if v == lc_type]
        lon_subset = [longitudes[i] for i in indices]
        lat_subset = [latitudes[i] for i in indices]
        ndvi_subset = [ndvi_values[i] for i in indices]
        
        ax.scatter(lon_subset, lat_subset, c=ndvi_subset, s=land_cover_sizes[lc_type],
                  marker=land_cover_markers[lc_type], cmap='RdYlGn', vmin=0, vmax=1,
                  alpha=0.75, edgecolors='white', linewidths=1.5, label=lc_type)
    
    cbar = plt.colorbar(ax.scatter([], [], c=[], cmap='RdYlGn', vmin=0, vmax=1), ax=ax)
    cbar.set_label('NDVI Value', fontsize=14, fontweight='bold')
    ax.set_title(title, fontsize=20, fontweight='bold', pad=25)
    ax.set_xlabel('Longitude', fontsize=14, fontweight='bold')
    ax.set_ylabel('Latitude', fontsize=14, fontweight='bold')
    ax.tick_params(axis='both', which='major', labelsize=12)
    ax.legend(title='Land Cover Type (Size & Shape)')
    plt.tight_layout()
    plt.show()`} 
                output={`# The scatter plot is displayed below: NDVI Spatial Distribution Map`} 
              />

              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 mt-6">
                <div className="p-3 bg-gray-50 border-b">
                  <h4 className="font-bold text-base text-gray-800">NDVI Spatial Distribution Map</h4>
                </div>
                <img 
                  src={`${basePath}/code/colab/Week4/Demo/Images/Step7_GISScatterPlot.png`}
                  alt="NDVI spatial distribution map showing vegetation health across geographic locations"
                  className="w-full h-auto"
                />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    Color represents NDVI value (vegetation health), size and shape represent land cover type. 
                    Red = low vegetation, Green = dense vegetation. Note: Data is synthetic for demonstration purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Heatmaps */}
        <Section title="Heatmaps: Spatial Data Visualization">
          <div className="space-y-8">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Zap className="w-6 h-6 mr-3 text-ucd-blue" /> Digital Elevation Models (DEM)
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Heatmaps visualize 2D data arrays, perfect for displaying elevation data, temperature maps, or any continuous spatial variable.
              </p>
              
              <CodeBlock 
                code={`def plot_heatmap_professional(data, cmap='terrain', title='Elevation Heatmap'):
    """Create a professional heatmap visualization."""
    fig, ax = plt.subplots(figsize=(12, 10), facecolor='white')
    ax.set_facecolor('white')
    
    im = ax.imshow(data, cmap=cmap, interpolation='bilinear', origin='lower')
    cbar = plt.colorbar(im, ax=ax)
    cbar.set_label('Elevation (meters)', fontsize=14, fontweight='bold', rotation=270, labelpad=20)
    
    ax.set_title(title, fontsize=20, fontweight='bold', pad=25)
    ax.set_xlabel('X Coordinate', fontsize=14, fontweight='bold')
    ax.set_ylabel('Y Coordinate', fontsize=14, fontweight='bold')
    ax.tick_params(axis='both', which='major', labelsize=12)
    plt.tight_layout()
    plt.show()

# Example: Generate synthetic elevation data
x = np.linspace(-5, 5, 50)
y = np.linspace(-5, 5, 50)
X, Y = np.meshgrid(x, y)
elevation = 500 + 200 * np.sin(X) * np.cos(Y) + 100 * np.random.randn(50, 50)

plot_heatmap_professional(elevation, cmap='terrain', title='Digital Elevation Model (DEM)')`} 
                output={`# The heatmap is displayed below: Digital Elevation Model (DEM)`} 
              />

              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 mt-6">
                <div className="p-3 bg-gray-50 border-b">
                  <h4 className="font-bold text-base text-gray-800">Digital Elevation Model (DEM)</h4>
                </div>
                <img 
                  src={`${basePath}/code/colab/Week4/Demo/Images/Step8_Heatmap.png`}
                  alt="Digital Elevation Model heatmap showing terrain elevation"
                  className="w-full h-auto"
                />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    Heatmap visualization of elevation data using terrain colormap. Note: Data is synthetic for demonstration purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 6. Temperature Anomalies */}
        <Section title="Anomaly Detection: Identifying Outliers">
          <div className="space-y-8">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Zap className="w-6 h-6 mr-3 text-ucd-blue" /> Temperature Anomaly Visualization
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Detect and visualize anomalies in environmental data using statistical methods. This is crucial for quality control 
                and identifying unusual patterns in GIS datasets.
              </p>
              
              <CodeBlock 
                code={`def find_temperature_anomalies(years, temperatures):
    """Find years with temperature anomalies (>2 standard deviations from mean)."""
    mean_temp = np.mean(temperatures)
    std_temp = np.std(temperatures)
    threshold = 2 * std_temp
    
    anomaly_indices = np.where(np.abs(temperatures - mean_temp) > threshold)[0]
    anomaly_years = years[anomaly_indices]
    anomaly_temps = temperatures[anomaly_indices]
    
    return dict(zip(anomaly_years, anomaly_temps)), mean_temp, std_temp

# Visualize anomalies
def plot_temperature_anomalies(years, temperatures, anomalies, mean_temp, std_temp):
    """Visualize temperature data with anomalies highlighted."""
    fig, ax = plt.subplots(figsize=(14, 8), facecolor='white')
    ax.set_facecolor('white')
    
    # Plot normal and anomaly points
    normal_mask = np.array([year not in anomalies for year in years])
    ax.scatter(years[normal_mask], temperatures[normal_mask], 
              color='#3498DB', s=100, alpha=0.6, label='Normal', zorder=3)
    
    anomaly_years = np.array(list(anomalies.keys()))
    anomaly_temps = np.array(list(anomalies.values()))
    ax.scatter(anomaly_years, anomaly_temps, color='#E74C3C', s=200, 
              alpha=0.8, label='Anomaly', edgecolors='darkred', linewidths=2, zorder=4)
    
    # Add mean and threshold lines
    ax.axhline(y=mean_temp, color='#2ECC71', linestyle='-', linewidth=2, 
               label=f'Mean ({mean_temp:.1f}°C)', alpha=0.7)
    ax.axhline(y=mean_temp + 2*std_temp, color='#F39C12', linestyle='--', linewidth=2, alpha=0.6)
    ax.axhline(y=mean_temp - 2*std_temp, color='#F39C12', linestyle='--', linewidth=2, alpha=0.6)
    
    ax.set_title('Temperature Anomalies Detection (2000-2024)', fontsize=20, fontweight='bold', pad=25)
    ax.set_xlabel('Year', fontsize=14, fontweight='bold')
    ax.set_ylabel('Temperature (°C)', fontsize=14, fontweight='bold')
    ax.tick_params(axis='both', which='major', labelsize=12)
    ax.legend(loc='upper right', fontsize=12)
    plt.tight_layout()
    plt.show()`} 
                output={`# The anomaly detection plot is displayed below: Temperature Anomalies Detection`} 
              />

              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 mt-6">
                <div className="p-3 bg-gray-50 border-b">
                  <h4 className="font-bold text-base text-gray-800">Temperature Anomalies Detection</h4>
                </div>
                <img 
                  src={`${basePath}/code/colab/Week4/Demo/Images/Step6_TemperatureAnomalies.png`}
                  alt="Temperature anomalies plot showing normal values and outliers"
                  className="w-full h-auto"
                />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm text-gray-600">
                    Points beyond ±2 standard deviations are highlighted as anomalies. Note: Data is synthetic for demonstration purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Matplotlib Resources */}
        <Section title="Matplotlib Resources">
          <div className="space-y-4">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                <h4 className="font-bold text-lg mb-3">Professional Plotting Tips:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Always set <code>facecolor='white'</code> for clean backgrounds</li>
                  <li>Use <code>tick_params</code> to increase axis label font sizes (labelsize=12)</li>
                  <li>Remove top and right spines for cleaner appearance</li>
                  <li>Add colorbars with descriptive labels</li>
                  <li>Use appropriate colormaps: 'RdYlGn' for indices, 'terrain' for elevation</li>
                </ul>
              </div>
              <div className="mt-4 space-y-2">
                <div><ResourceLink href="https://matplotlib.org/stable/tutorials/introductory/pyplot.html" text="Matplotlib: Pyplot Tutorial - Official Guide" /></div>
                <div><ResourceLink href="https://matplotlib.org/stable/gallery/index.html" text="Matplotlib Gallery - Complete Examples" /></div>
                <div><ResourceLink href="https://matplotlib.org/stable/tutorials/colors/colormaps.html" text="Matplotlib Colormaps - Choosing the Right Colors" /></div>
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
                  <Code className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">1. Complete All Exercises</h4>
                  <p className="text-sm text-gray-500">Finish all function and plotting exercises in the notebook.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                  <ImageIcon className="w-4 h-4 text-green-600" />
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
        <QASection weekNumber={4} />
        
        {/* In-Class Q&A Section */}
        <InClassQA weekNumber={4} />
      </div>
    </div>
  )
}

export default Lab4
