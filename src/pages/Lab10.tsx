import { Link } from 'react-router-dom'
import { ArrowLeft, FileText } from 'lucide-react'
import QASection from '../components/QASection'
import InClassQA from '../components/InClassQA'
import { ResourceLink, Section } from '../components/LessonComponents'

const Lab10 = () => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

  const img = (name: string, alt: string) => (
    <img
      src={`${basePath}/code/colab/Week10/Markdown/media/${name}`}
      alt={alt}
      className="rounded-lg border border-gray-300 shadow-sm w-full max-w-3xl my-4 mx-0"
      loading="lazy"
    />
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-ucd-blue text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ucd-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center text-ucd-gold hover:text-white transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Home
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-ucd-gold text-ucd-blue px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Week 10
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-300 font-medium">Project Pack</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                ABT/HYD 182 Week 10 Project
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                A single guided “story” that brings together the project brief, supporting resources, and the rubric.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-ucd-gold text-ucd-blue rounded-2xl px-5 py-4 shadow-xl font-bold flex items-center gap-3">
                <FileText className="h-6 w-6" />
                <span>Week10_Project_Pack</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Section title="Project overview">
          <div className="space-y-4 text-gray-700">
            <p className="text-gray-700 leading-relaxed">
              Start with the project brief, then follow the resources and rubric as you build your solution in Python for geospatial analysis.
            </p>
            <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-ucd-blue">
              <div className="font-bold text-ucd-blue mb-1">What to know</div>
              <ul className="list-disc list-inside space-y-2">
                <li>Worth <span className="font-semibold">20%</span> of the total course grade.</li>
                <li>Due: <span className="font-semibold">March 13, 11:59 PM</span>.</li>
                <li>Last lab session in week 10 is reserved to finalize your work.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Learning objectives">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Explore applications of GIS and publicly available geospatial datasets.</li>
            <li>Manipulate geospatial datasets (tabular, raster, shapefiles) using Python.</li>
            <li>Choose and apply appropriate geoprocessing tools (ArcPy / ArcGIS Pro) for your project.</li>
            <li>Automate queries (e.g., spatial queries) by developing Python functions.</li>
            <li>Visualize geospatial datasets in Python and strengthen teamwork skills.</li>
          </ul>
        </Section>

        <Section title="Form a project group">
          <div className="space-y-3 text-gray-700">
            <p>
              The project can be completed in a group of <span className="font-semibold">3 or 4</span>. Collaborating helps with communication, time management, and shared problem-solving.
            </p>
            <p>
              Use Canvas and/or Piazza to discuss ideas and form your group, then enter the names in the shared Google Sheet under the Project module.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="font-semibold text-gray-800 mb-2">Group roster (Canvas → Project module)</div>
              <ResourceLink
                href="https://docs.google.com/spreadsheets/d/1CGfTMb0hijTZtqQRDqMCkpdYH50y_iaXopJzp24DrDU/edit?usp=sharing"
                text="Open Google Sheet"
              />
            </div>
          </div>
        </Section>

        <Section title="What your project must include">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Once you define your topic, ask: why it matters, what datasets you can access, and which geospatial analysis is required.
            </li>
            <li>
              Requirement: most of the project should be done in Python (Colab or another Python IDE). You may use ArcGIS Pro (or QGIS) for parts like mapping/visualizations/projections.
            </li>
            <li>
              Run the entire notebook so you can confirm outputs from each code cell before you submit.
            </li>
          </ul>
        </Section>

        <Section title="Submission checklist + GenAI policy">
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="font-bold text-ucd-blue mb-2">Submit via Canvas + Box</div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Project report as <span className="font-semibold">PDF or Word</span> on Canvas.</li>
                <li>Project codes/notebooks on Canvas.</li>
                <li>
                  Zip and upload all project files (including the report, notebooks/scripts, and datasets) via Box.
                </li>
              </ul>
              <div className="mt-3">
                <ResourceLink
                  href="https://ucdavis.app.box.com/f/c65b0bac2fe14ff2aefbae7bf46533ad"
                  text="Open Box upload link"
                />
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl border-l-4 border-ucd-blue p-5">
              <div className="font-bold text-ucd-blue mb-2">GenAI Use Policy (summary)</div>
              <div className="text-gray-700 space-y-3">
                <div>
                  Allowed (examples): brainstorming workflows, generating starter code that you modify and understand, debugging/explaining errors, and improving documentation readability.
                </div>
                <div>
                  Disclosure: if you use any GenAI tool, include an <span className="font-semibold">AI Use Disclosure</span> describing which tool(s) were used and which parts of the project they supported.
                </div>
                <div>
                  Not allowed: submitting GenAI-generated work without understanding it, using GenAI to complete the project with minimal contribution, or misrepresenting AI output as entirely your own.
                </div>
                <div>
                  Accountability: you (and your team) must be able to explain the code, methods, and results, regardless of tool usage.
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Suggested timeline (high-level)">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Form a group.</li>
            <li>Define a problem and lock in your datasets + approach.</li>
            <li>Build and validate the geospatial analysis in Python.</li>
            <li>Finalize results and submit (report + code + project files).</li>
          </ul>
        </Section>

        <Section title="Resources (quick picks)">
          <div className="space-y-4 text-gray-700">
            <div>
              <span className="font-semibold">Datasets:</span> ArcGIS Living Atlas, Earth Engine Data Catalog, and California GIS datasets (plus local city/county portals).
            </div>
            <div>
              <span className="font-semibold">Python processing:</span>{' '}
              <ResourceLink
                href="https://developers.arcgis.com/python/"
                text="ArcGIS API for Python"
              />
            </div>
            <div>
              <span className="font-semibold">Example project directions:</span> wildfire heatmaps, COVID-19 risk analysis, groundwater vulnerability mapping, impervious surface estimation from imagery.
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="font-semibold text-gray-800 mb-2">Reference tables (from the pack)</div>
              {img('image8.png', 'Example summary table')}
              {img('image1.jpeg', 'Example app table A')}
              {img('image10.jpeg', 'Example app table B')}
            </div>
          </div>
        </Section>

        <Section title="Rubric at a glance">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-semibold">Topic</span>: 5</li>
              <li><span className="font-semibold">Background / motivation / significance</span>: 10</li>
              <li><span className="font-semibold">Objectives and goals</span>: 10</li>
              <li><span className="font-semibold">Approach / methodologies</span>: 15</li>
              <li><span className="font-semibold">Python scripts</span>: 25</li>
              <li><span className="font-semibold">Results</span>: 15</li>
              <li><span className="font-semibold">Future work and potential limitations</span>: 5</li>
              <li><span className="font-semibold">Reference</span>: 5</li>
              <li><span className="font-semibold">Project files</span>: 10</li>
            </ul>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Tip: aim for the rubric criteria early, then iterate your notebook and outputs as you go.
          </div>
        </Section>

        <Section title="Quick workflow (recommended)">
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Read the project brief end-to-end.</li>
            <li>Collect requirements and map them to tools/data.</li>
            <li>Draft your solution.</li>
            <li>Iterate against the rubric.</li>
          </ol>
        </Section>

        {/* In-Class Q&A Section */}
        <InClassQA weekNumber={10} />

        {/* Q&A Discussion Section */}
        <QASection weekNumber={10} />
      </div>
    </div>
  )
}

export default Lab10

