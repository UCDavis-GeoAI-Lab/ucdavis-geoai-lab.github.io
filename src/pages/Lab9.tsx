import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Layers, Image as ImageIcon, BarChart2, Database, ExternalLink, Sun } from 'lucide-react'
import QASection from '../components/QASection'
import InClassQA from '../components/InClassQA'
import { CodeBlock, Section, ResourceLink } from '../components/LessonComponents'

const imgPath = (basePath: string, name: string) =>
  `${basePath}/code/colab/Week9/Website_Demo/${encodeURIComponent(name)}`

const Lab9 = () => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const labNotebookPath = `${basePath}/code/colab/Week9/Lab/Lab9_GeoAI.ipynb`
  const demoNotebookPath = `${basePath}/code/colab/Week9/Website_Demo/Lab9_Solar_Panel_Detection_Demo.ipynb`

  const handleDownloadLab = () => {
    const link = document.createElement('a')
    link.href = labNotebookPath
    link.download = 'Lab9_GeoAI.ipynb'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownloadDemo = () => {
    const link = document.createElement('a')
    link.href = demoNotebookPath
    link.download = 'Lab9_Solar_Panel_Detection_Demo.ipynb'
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
                <span className="bg-ucd-gold text-ucd-blue px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Week 9</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-300 font-medium">GeoAI – Solar Panel Detection</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Solar Panel Detection with GeoAI</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Use the <strong>GeoAI</strong> package and a pre-trained solar panel detector to find solar panels in NAIP imagery (Davis, CA). No model training—run inference only. Suitable for Colab free tier.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[200px]">
              <button
                onClick={handleDownloadLab}
                className="group flex items-center bg-ucd-gold hover:bg-white text-ucd-blue px-4 py-3 md:px-6 md:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full"
              >
                <Download className="h-5 w-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-left min-w-0 flex-1">
                  <div className="text-xs uppercase opacity-80">Lab Notebook (submit this)</div>
                  <div className="text-sm md:text-base truncate">Lab9_GeoAI.ipynb</div>
                </div>
              </button>
              <button
                onClick={handleDownloadDemo}
                className="group flex items-center justify-center bg-white/10 hover:bg-ucd-gold text-white hover:text-ucd-blue border border-ucd-gold/50 px-4 py-3 md:px-6 md:py-4 rounded-xl font-bold shadow-lg transition-all duration-300 w-full"
              >
                <Download className="h-5 w-5 mr-3 flex-shrink-0" />
                <div className="text-left min-w-0 flex-1">
                  <div className="text-xs uppercase opacity-80">Demo Notebook</div>
                  <div className="text-sm md:text-base truncate">Lab9_Solar_Panel_Detection_Demo.ipynb</div>
                </div>
              </button>
              <a
                href="https://opengeoai.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-white/10 hover:bg-ucd-gold text-white hover:text-ucd-blue border border-ucd-gold/50 px-4 py-3 md:px-6 md:py-4 rounded-xl font-bold shadow-lg transition-all duration-300 w-full"
              >
                <ExternalLink className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="text-sm md:text-base">GeoAI documentation</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Overview */}
        <Section title="Demo Overview">
          <div className="space-y-4">
            <p className="text-gray-600 text-lg max-w-4xl">
              This demo uses the <strong>GeoAI</strong> Python package and a <strong>pre-trained</strong> solar panel detector to find solar panels in NAIP imagery over Davis, CA. Steps: install package → mount Drive &amp; setup → download sample raster → visualize → run detection → vectorize masks → filter &amp; visualize results.
            </p>
          </div>
        </Section>

        {/* 1. Install & setup */}
        <Section title="1. Install Package & Setup">
          <div className="space-y-6">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <CodeBlock
                code={`%pip install geoai-py`}
                output={''}
              />
              <CodeBlock
                code={`from google.colab import drive
import os
drive.mount("/content/drive")
BASE_DIR = "/content/drive/MyDrive/ABT182_GeoAI"
os.makedirs(f"{BASE_DIR}/data/solar", exist_ok=True)
os.makedirs(f"{BASE_DIR}/outputs", exist_ok=True)
import geoai
print("BASE_DIR =", BASE_DIR)`}
                output={''}
              />
            </div>
          </div>
        </Section>

        {/* 2. Download sample data */}
        <Section title="2. Download Sample Data">
          <div className="space-y-6">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <p className="text-gray-600 mb-4 text-lg">
                Download the sample NAIP raster (Davis, CA) from Hugging Face using <code>geoai.download_file()</code> and copy it to your Drive folder.
              </p>
              <CodeBlock
                code={`import shutil
solar_raster_url = "https://huggingface.co/datasets/giswqs/geospatial/resolve/main/solar_panels_davis_ca.tif"
downloaded_file = geoai.download_file(solar_raster_url)
solar_raster_path = f"{BASE_DIR}/data/solar/solar_panels_davis_ca.tif"
shutil.copy(downloaded_file, solar_raster_path)
print("Saved:", solar_raster_path)`}
                output={''}
              />
            </div>
          </div>
        </Section>

        {/* 3. Visualize imagery */}
        <Section title="3. Visualize Imagery">
          <div className="space-y-6">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Layers className="w-6 h-6 mr-3 text-ucd-blue" /> NAIP (Davis, CA)
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Use <code>leafmap</code> to add the raster with bands [1, 2, 3] for true-color display. This is the main city view before running detection.
              </p>
              <CodeBlock
                code={`import leafmap
m = leafmap.Map()
m.add_raster(solar_raster_path, layer_name="NAIP (Davis, CA)", bands=[1, 2, 3])
m`}
                output={''}
              />
              <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
                <div className="p-3 bg-gray-50 border-b">
                  <h4 className="font-bold text-base text-gray-800">Output: NAIP imagery – Davis, CA (city with solar panels)</h4>
                </div>
                <img
                  src={imgPath(basePath, '1-NAIP_Davis.png')}
                  alt="NAIP Davis CA - main city image"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Run solar panel detection */}
        <Section title="4. Run Solar Panel Detection">
          <div className="space-y-6">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Sun className="w-6 h-6 mr-3 text-ucd-blue" /> SolarPanelDetector
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Create a <code>SolarPanelDetector()</code> and call <code>generate_masks()</code> with your raster path. Optionally set <code>confidence_threshold</code>, <code>mask_threshold</code>, <code>min_object_area</code>, and <code>chip_size</code>. Then visualize NAIP with the predicted masks overlay.
              </p>
              <CodeBlock
                code={`solar_masks_path = f"{BASE_DIR}/outputs/solar_panel_masks.tif"
detector = geoai.SolarPanelDetector()
solar_masks_path = detector.generate_masks(
    solar_raster_path,
    output_path=solar_masks_path,
    confidence_threshold=0.4,
    mask_threshold=0.5,
    min_object_area=100,
    overlap=0.25,
    chip_size=(400, 400),
    batch_size=4,
    verbose=False,
)
# View NAIP with predicted solar panel masks
m = leafmap.Map()
m.add_raster(solar_raster_path, layer_name="NAIP", bands=[1, 2, 3])
m.add_raster(solar_masks_path, layer_name="Solar panel masks", indexes=[1], colormap="autumn", nodata=0)
m`}
                output={''}
              />
              <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
                <div className="p-3 bg-gray-50 border-b">
                  <h4 className="font-bold text-base text-gray-800">Output: NAIP with predicted solar panel masks</h4>
                </div>
                <img
                  src={imgPath(basePath, '2-NAIP_With_Mask.png')}
                  alt="NAIP with solar panel mask overlay"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Vectorize masks */}
        <Section title="5. Vectorize Masks & Add Geometric Properties">
          <div className="space-y-6">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <Database className="w-6 h-6 mr-3 text-ucd-blue" /> Orthogonalize &amp; area
              </h3>
              <p className="text-gray-600 mb-4 text-lg">
                Use <code>geoai.orthogonalize()</code> to convert the mask raster to vector footprints, then <code>geoai.add_geometric_properties()</code> to add area (m²) and other properties for filtering and styling.
              </p>
              <CodeBlock
                code={`solar_vector_path = f"{BASE_DIR}/outputs/solar_panel_masks.geojson"
gdf_solar = geoai.orthogonalize(solar_masks_path, solar_vector_path, epsilon=0.2)
gdf_solar = geoai.add_geometric_properties(gdf_solar, area_unit="m2", length_unit="m")
gdf_solar.head()`}
                output={''}
              />
            </div>
          </div>
        </Section>

        {/* 6. Filter and visualize */}
        <Section title="6. Filter and Visualize Results">
          <div className="space-y-6">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <p className="text-gray-600 mb-4 text-lg">
                Filter by elongation and minimum area to drop noise, then map polygons colored by <code>area_m2</code> (e.g. <code>scheme="Quantiles"</code>, <code>cmap="YlOrRd"</code>). Also plot a histogram (or bar chart) of solar panel areas.
              </p>
              <CodeBlock
                code={`gdf_solar_filtered = gdf_solar[(gdf_solar["elongation"] < 10) & (gdf_solar["area_m2"] > 5)]
m = leafmap.Map()
m.add_raster(solar_raster_path, layer_name="NAIP", bands=[1, 2, 3])
m.add_data(gdf_solar_filtered, column="area_m2", scheme="Quantiles", cmap="YlOrRd", legend_title="Area (m²)")
m`}
                output={''}
              />
              <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
                <div className="p-3 bg-gray-50 border-b">
                  <h4 className="font-bold text-base text-gray-800">Output: NAIP with solar panels colorized by area (m²)</h4>
                </div>
                <img
                  src={imgPath(basePath, '3-NAIP_Masked_Colorized_Based_On_Area.png')}
                  alt="NAIP with solar panels colorized by area"
                  className="w-full h-auto"
                />
              </div>
              <CodeBlock
                code={`import matplotlib.pyplot as plt
gdf_solar_filtered["area_m2"].hist(bins=25, color="steelblue", edgecolor="white")
plt.xlabel("Area (m²)"); plt.ylabel("Count"); plt.title("Distribution of solar panel areas")
plt.tight_layout(); plt.show()
print("Total area (m²):", gdf_solar_filtered["area_m2"].sum())`}
                output={''}
              />
              <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
                <div className="p-3 bg-gray-50 border-b">
                  <h4 className="font-bold text-base text-gray-800">Output: Bar plot / distribution of solar panel areas</h4>
                </div>
                <img
                  src={imgPath(basePath, '4-Barplot_Area.png')}
                  alt="Bar plot of solar panel areas"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Tips */}
        <Section title="Tips for the Demo">
          <div className="space-y-4">
            <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
                <h4 className="font-bold text-lg mb-3">Workflow summary</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Mount Google Drive and set <strong>BASE_DIR</strong> to a folder (e.g. <code>ABT182_GeoAI</code>) so outputs are saved.</li>
                  <li><strong>SolarPanelDetector</strong> runs on chips; adjust <code>chip_size</code>, <code>overlap</code>, and <code>batch_size</code> for speed vs. accuracy.</li>
                  <li>Filter by <code>elongation</code> and <code>area_m2</code> to remove thin artifacts and tiny detections.</li>
                  <li>For the full lab (instance segmentation with Mask R-CNN and building footprints), see the Week 9 Lab materials in Colab.</li>
                </ul>
              </div>
              <div className="mt-4 space-y-2">
                <ResourceLink href="https://opengeoai.org/" text="GeoAI documentation" />
              </div>
            </div>
          </div>
        </Section>

        {/* Credits */}
        <Section title="Credits">
          <p className="text-gray-600 text-lg">
            This demo uses the <strong>GeoAI</strong> Python package. We thank <strong>Dr. Qiusheng Wu</strong> for creating GeoAI and for the examples that inspired this tutorial. For more information: <a href="https://opengeoai.org/" target="_blank" rel="noopener noreferrer" className="text-ucd-blue hover:underline">https://opengeoai.org/</a>
          </p>
        </Section>

        <InClassQA weekNumber={9} />
        <QASection weekNumber={9} />
      </div>
    </div>
  )
}

export default Lab9
