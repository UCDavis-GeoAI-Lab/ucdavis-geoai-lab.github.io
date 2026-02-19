import { Link } from 'react-router-dom'
import { ArrowLeft, Download, BookOpen, MapPin, Layout, Database, Zap, ExternalLink } from 'lucide-react'
import QASection from '../components/QASection'
import InClassQA from '../components/InClassQA'
import { Section, ResourceLink } from '../components/LessonComponents'

const img = (basePath: string, name: string, alt: string) => (
  <img
    src={`${basePath}/code/colab/Week7/Lab_Instruction/Markdown/media/${name}`}
    alt={alt}
    className="rounded-lg border border-gray-300 shadow-sm w-full max-w-2xl my-4 mx-0"
  />
)

const Lab7 = () => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const tutorialPdfUrl = `${basePath}/code/colab/Week7/Lab_Instruction/Tutorial_Experience Builder.pdf`
  const assignmentPdfUrl = `${basePath}/code/colab/Week7/Assignment/Assignment - ArcGIS Experience Builder.pdf`

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
                <span className="bg-ucd-gold text-ucd-blue px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Week 7</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-300 font-medium">ArcGIS Experience Builder</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Experience Builder Tutorial</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Create web apps you envision. Build interactive maps and apps with widgets, data, and actions using ArcGIS Experience Builder.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href={tutorialPdfUrl}
                download="Tutorial_Experience_Builder.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-ucd-gold hover:bg-white text-ucd-blue px-4 py-3 md:px-6 md:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto"
              >
                <Download className="h-5 w-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-left min-w-0">
                  <div className="text-xs uppercase opacity-80">Tutorial</div>
                  <div className="text-sm md:text-base truncate">PDF</div>
                </div>
              </a>
              <a
                href={assignmentPdfUrl}
                download="Assignment_ArcGIS_Experience_Builder.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center bg-ucd-gold hover:bg-white text-ucd-blue px-4 py-3 md:px-6 md:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto"
              >
                <Download className="h-5 w-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-left min-w-0">
                  <div className="text-xs uppercase opacity-80">Assignment</div>
                  <div className="text-sm md:text-base truncate">PDF</div>
                </div>
              </a>
            </div>
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
                This lab is based on the <strong>ArcGIS Experience Builder</strong> tutorial from <strong>Esri Developers</strong>.
                Materials are used for educational purposes in ABT 182 - Advanced GIS at UC Davis.
              </p>
              <div className="flex flex-wrap gap-3">
                <ResourceLink href="https://www.arcgis.com/index.html" text="ArcGIS Online" />
                <ResourceLink href="https://developers.arcgis.com/" text="Esri Developers" />
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Section title="Introduction">
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              ArcGIS Experience Builder lets you create custom web apps with maps, charts, tables, and interactive widgets—
              no coding required. You will learn how to add data, connect widgets, set up actions (e.g., zoom to a feature when a row is selected),
              and publish your app. This week you will build an app for <strong>Yosemite National Park trails</strong> using web maps,
              web scenes, elevation profiles, tables, and embedded resources.
            </p>
          </div>
        </Section>

        {/* Learning Goals */}
        <Section title="Learning Goals">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Layout className="h-6 w-6 text-ucd-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-ucd-blue mb-2">Widgets & Layout</h3>
                  <p className="text-gray-600">Use map-centric, data-centric, and layout widgets to build and organize your app.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Database className="h-6 w-6 text-ucd-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-ucd-blue mb-2">Data & Pages</h3>
                  <p className="text-gray-600">Connect web maps, web scenes, and feature layers; add multiple pages and shared headers.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Zap className="h-6 w-6 text-ucd-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-ucd-blue mb-2">Actions & Interactivity</h3>
                  <p className="text-gray-600">Define message and data actions so widgets communicate (e.g., table selection zooms the map).</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-ucd-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-ucd-blue mb-2">Publishing & Mobile</h3>
                  <p className="text-gray-600">Save, publish, and share your app; optimize layout for mobile (Auto vs Custom).</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Software Requirements */}
        <Section title="Software Requirements">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <p className="text-gray-700 mb-4">To complete this lab you need:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>ArcGIS Online</strong> access (UC Davis organization: <em>ucdavis.maps.arcgis.com</em>)</li>
              <li><strong>Experience Builder</strong> (launched from the app launcher in ArcGIS Online)</li>
            </ul>
          </div>
        </Section>

        {/* How to Use Experience Builder - flow like markdown, one image per step */}
        <Section title="How to Use Experience Builder">
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <p className="text-gray-700 mb-2"><strong>1.</strong> Navigate to <ResourceLink href="https://www.arcgis.com/index.html" text="ArcGIS Online" />.</p>
              <p className="text-gray-700 mb-4"><strong>2.</strong> Sign in with the organization URL <strong>ucdavis.maps.arcgis.com</strong>, then click Continue.</p>
              {img(basePath, 'image33.png', 'Sign in')}
              <p className="text-gray-700 mt-4 mb-4"><strong>3.</strong> Click <strong>Kerberos Login</strong> and enter your UC Davis credentials.</p>
              {img(basePath, 'image25.png', 'Kerberos login')}
              <p className="text-gray-700 mt-4 mb-4"><strong>4.</strong> Open the app launcher (next to your profile photo) and select <strong>Experience Builder</strong>.</p>
              {img(basePath, 'image47.png', 'App launcher')}
              <p className="text-gray-700 mt-4 mb-4"><strong>5.</strong> This is where you manage or create apps. Click <strong>+ Create New</strong> to start a new app.</p>
              {img(basePath, 'image51.png', 'Create New')}
              <p className="text-gray-700 mt-4 mb-4"><strong>6.</strong> Start with a blank page or a template. For this lab, find the <strong>Launchpad</strong> template and click Create.</p>
              {img(basePath, 'image27.png', 'Templates')}
              <p className="text-gray-700 mt-4 mb-2"><strong>7.</strong> This is your canvas. You can build and interact with your application here.</p>
              {img(basePath, 'image13.png', 'Experience Builder canvas')}
            </div>
          </div>
        </Section>

        {/* Experience Builder Components - text only */}
        <Section title="Experience Builder Components">
          <div className="space-y-4 text-gray-700 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <p><strong>Widgets</strong> are building blocks: map, table, chart, text, filter, legend, section, etc. They can be map-centric, data-centric, or layout-only.</p>
            <p><strong>Pages</strong> are screens in your app; each can have its own layout. Headers can be shared across pages.</p>
            <p><strong>Data</strong> comes from feature layers, web maps, and web scenes. Widgets connect to data to display or analyze it.</p>
            <p><strong>Content, Style, Action</strong>: most widgets have Content (what they use), Style (appearance), and Action (how they interact with other widgets).</p>
          </div>
        </Section>

        {/* Steps to Complete the Lab - ordered like markdown with one image per block */}
        <Section title="Steps to Complete the Lab">
          <div className="space-y-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-6">
              <div className="flex">
                <ExternalLink className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-yellow-800 mb-2">Full Instructions</h3>
                  <p className="text-yellow-700">
                    Follow the detailed <strong>Experience Builder Tutorial</strong> in the Markdown lab instruction. Below is the same flow with key figures in order.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Quick setup</h3>
                  <p className="text-gray-700 mb-4">Change the name of the project. Make sure the layout is unlocked so you can make changes in the app.</p>
                  {img(basePath, 'image41.png', 'Layout unlocked')}
                  <p className="text-gray-700 mt-4">Since the layout is unlocked, you can move, remove, or add elements (e.g., remove the search bar with the trash icon).</p>
                  {img(basePath, 'image30.png', 'Remove search bar')}
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Adding Header</h3>
                  <p className="text-gray-700 mb-4">Toggle on &quot;Header&quot; in the right toolbar. If you don&apos;t see it, select &quot;Page&quot; in the top-left sidebar and ensure no section in the Outline is selected.</p>
                  {img(basePath, 'image52.png', 'Header in toolbar')}
                  <p className="text-gray-700 mt-4 mb-4">Hover over the header, click &quot;Edit Header&quot;, then use &quot;Choosing a header template&quot;. Turn off &quot;Lock Layout&quot; to see templates.</p>
                  {img(basePath, 'image14.png', 'Header template')}
                  <p className="text-gray-700 mt-4 mb-4">Choose &quot;Header 1&quot;. Add title &quot;Yosemite National Park&quot;, subtitle &quot;Trails&quot;, and an image. The template includes a menu for switching pages.</p>
                  {img(basePath, 'image5.png', 'Header 1')}
                  {img(basePath, 'image17.png', 'Header editing')}
                  <p className="text-gray-700 mt-4">Example header:</p>
                  {img(basePath, 'image4.png', 'Example header')}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Adding Data</h3>
                  <p className="text-gray-700 mb-4">From the left menu open the &quot;Data&quot; panel. Add one Web Map and one Web Scene. Search for <strong>Yosemite National Park Service Trails</strong> in the ArcGIS Online tab and select it for both.</p>
                  {img(basePath, 'image50.png', 'Web Map selected')}
                  {img(basePath, 'image44.png', 'Web Scene selected')}
                  <p className="text-gray-700 mt-4 mb-4">Click &quot;Done&quot; when you see &quot;2 Selected&quot;. Then select &quot;Page&quot; → Content → &quot;Select Map&quot; and choose both maps. Use Live View to test.</p>
                  {img(basePath, 'image68.png', 'Select Map')}
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Adding Page</h3>
                  <p className="text-gray-700 mb-4">Add resources: e.g. a <ResourceLink href="https://storymaps.arcgis.com/stories/26c9b014718f46b6a2eb2dc1dc92acf3" text="StoryMap" /> and <ResourceLink href="https://www.nps.gov/yose/planyourvisit/conditions.htm" text="NPS conditions" />. Under Page, click + and add a blank fullscreen page. Enable the header and rename pages to &quot;Trails&quot; and &quot;Resources&quot;.</p>
                  {img(basePath, 'image11.png', 'Add page')}
                  {img(basePath, 'image64.png', 'Page names')}
                  <p className="text-gray-700 mt-4 mb-4">Insert a Section, make it Full Size, then add an Embed widget and paste the story map URL. Add a second View for the NPS URL and name the views (e.g. Expedition, Information). Add &quot;Views Navigation&quot; between header and section.</p>
                  {img(basePath, 'image61.png', 'Section')}
                  {img(basePath, 'image62.png', 'Embed URL')}
                  {img(basePath, 'image57.png', 'Views Navigation')}
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">5</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Connecting Widgets</h3>
                  <p className="text-gray-700 mb-4">On the Trails page, click the map to see Map in the Outline; Legend and Map Layers are connected to the Map widget.</p>
                  {img(basePath, 'image9.png', 'Widget connections')}
                  <p className="text-gray-700 mt-4 mb-4">Add an Elevation Profile from Insert Widget, connect it to the map, and enable Selectable Layers for the trails scene.</p>
                  {img(basePath, 'image16.png', 'Elevation Profile')}
                  {img(basePath, 'image69.png', 'Selectable layers')}
                  <p className="text-gray-700 mt-4 mb-4">Add a Table from the widget controller, connect it to the Map, then customize layers to show only Trails. Change theme (e.g. Meadow) from the left menu.</p>
                  {img(basePath, 'image31.png', 'Table widget')}
                  {img(basePath, 'image65.png', 'Table layers')}
                  {img(basePath, 'image28.png', 'Theme')}
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">6</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Adding Actions to the Widgets</h3>
                  <p className="text-gray-700 mb-4">Click the table → Actions → Message action → Add a Trigger. Set trigger to &quot;Record selection changes&quot;, target to Map, action &quot;Zoom to&quot;. Add another action: target Elevation Profile, action &quot;View profile&quot;.</p>
                  {img(basePath, 'image18.png', 'Message actions')}
                  {img(basePath, 'image1.png', 'View profile action')}
                  <p className="text-gray-700 mt-4">Data actions (e.g. Zoom to, Calculate statistics) are available by default on the table.</p>
                  {img(basePath, 'image35.png', 'Data actions')}
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">7</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Dynamic Content & Data View</h3>
                  <p className="text-gray-700 mb-4">Elevation Profile can output statistics. Add a Text widget, connect it to data → Output → Elevation Profile statistics, and add dynamic content (e.g. MaxDistance, ElevationGain).</p>
                  {img(basePath, 'image15.png', 'Profile statistics')}
                  {img(basePath, 'image20.png', 'Text connect to data')}
                  <p className="text-gray-700 mt-4 mb-4">Connect the header &quot;Trails&quot; subtitle to the Web Scene Trails layer. Use Dynamic content → Statistics (e.g. Count of Trail Name) and Expressions (e.g. Sum of Miles). Create a view (e.g. &quot;Half Dome&quot;) and use it in the table.</p>
                  {img(basePath, 'image19.png', 'Header connect to data')}
                  {img(basePath, 'image67.png', 'Create view')}
                  <p className="text-gray-700 mt-4">Add a Feature info widget to show pop-ups for selected features; set selection to &quot;Selected features&quot;.</p>
                  {img(basePath, 'image38.png', 'Feature info')}
                </div>
              </div>
            </div>

            {/* Step 8 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">8</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Adding chart</h3>
                  <p className="text-gray-700 mb-4">Insert a Chart, select data → Trails, choose column chart. Set Category field to &quot;Intended Use&quot;, axis titles, and chart title (e.g. &quot;Trail Distribution by Intended Use&quot;). Create a view to filter out null/blank Intended Use and use it for the chart. Optionally connect the chart to map extent so it updates when the user zooms.</p>
                  {img(basePath, 'image12.png', 'Chart data')}
                  {img(basePath, 'image23.png', 'Category field')}
                  {img(basePath, 'image45.png', 'Map extent trigger')}
                </div>
              </div>
            </div>

            {/* Step 9 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">9</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Mobile Optimization</h3>
                  <p className="text-gray-700 mb-4">Click the screen size button and select Small. You can use <strong>Auto</strong> (layout generated from desktop) or <strong>Custom</strong> (design a separate mobile layout). Missing widgets appear under Insert widget → Pending. Content changes in one view can reflect in the other; duplicate header text and move the original to pending if you want different text on mobile.</p>
                  {img(basePath, 'image8.png', 'Screen size')}
                  {img(basePath, 'image58.png', 'Auto and Custom')}
                  {img(basePath, 'image32.png', 'Mobile header')}
                </div>
              </div>
            </div>

            {/* Step 10 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-ucd-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">10</div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Publishing Apps</h3>
                  <p className="text-gray-700 mb-4">When you&apos;re done, save and publish the app. Use Publish → 3 dots → Copy published item link to share.</p>
                  {img(basePath, 'image39.png', 'Publish')}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* What to Submit */}
        <Section title="What to Submit">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <p className="text-gray-700">
              Complete the Experience Builder tutorial and build the Yosemite National Park trails app as described. Save and publish your app, and submit the <strong>published app link</strong> (or any deliverables specified by your instructor).
            </p>
          </div>
        </Section>

        <InClassQA weekNumber={7} />
        <QASection weekNumber={7} />
      </div>
    </div>
  )
}

export default Lab7
