export interface Instructor {
  name: string
  title: string
  office: string
  email: string
  officeHours: string
  pronouns?: string
}

export interface TA {
  name: string
  email: string
  labSection: string
  officeHours: string
  location: string
}

export interface LabSession {
  sessionNumber: number
  title: string
  description: string
  topics: string[]
  pythonFeatures?: string[]
  gisRecap?: string[]
  content?: string
}

export interface Week {
  weekNumber: number
  title: string
  description: string
  sessions: LabSession[]
}

export const instructor: Instructor = {
  name: "Dr. Ali Moghimi",
  title: "Instructor",
  office: "3040 Bainer Hall",
  email: "amoghimi@ucdavis.edu",
  officeHours: "Monday 11:00 AM – 12:00 PM, Wednesday 9:00 AM – 10:00 AM",
  pronouns: "Course Designer"
}

export const tas: TA[] = [
  {
    name: "Mohammadreza Narimani",
    email: "mnarimani@ucdavis.edu",
    labSection: "A01",
    officeHours: "Wednesday 3-5 PM",
    location: "Bainer Hall 3053"
  },
  {
    name: "Inseon Kim",
    email: "inskim@ucdavis.edu",
    labSection: "A02",
    officeHours: "Friday 1-3 PM",
    location: "Bainer Hall 3053"
  },
  {
    name: "Parastoo Farajpoor",
    email: "pfarajpoor@ucdavis.edu",
    labSection: "A03",
    officeHours: "Monday 1-3 PM",
    location: "Bainer Hall 3053"
  }
]

export const courseInfo = {
  code: "ABT/HYD 182",
  title: "Environmental Analysis Using GIS",
  quarter: "Winter Quarter 2026",
  lecture: {
    location: "Wellman Hall 234",
    schedule: [
      "Tuesday 9:00 AM – 9:50 AM",
      "Thursday 9:00 AM – 9:50 AM"
    ]
  },
  labSections: [
    {
      section: "A01",
      location: "Hunt Hall 253",
      schedule: [
        "Tuesday 4:10 – 7 PM",
        "Thursday 4:10 – 7 PM"
      ]
    },
    {
      section: "A02",
      location: "Hunt Hall 253",
      schedule: [
        "Tuesday 10 - 12:50 PM",
        "Thursday 10 - 12:50 PM"
      ]
    },
    {
      section: "A03",
      location: "Hunt Hall 253",
      schedule: [
        "Tuesday 1:10 - 4:00 PM",
        "Friday 4:10 – 7 PM"
      ]
    }
  ]
}

// Placeholder data for 10 weeks - will be filled in as content is added
export const weeks: Week[] = Array.from({ length: 10 }, (_, i) => {
  const weekNum = i + 1
  
  // Week 1 has only 1 lab session that goes directly to Lab 1 materials
  if (weekNum === 1) {
    return {
      weekNumber: weekNum,
      title: `Week ${weekNum}`,
      description: `Lab materials and content for Week ${weekNum}`,
      sessions: [
        {
          sessionNumber: 1,
          title: `Lab 1`,
          description: "Lab 1 materials",
          topics: ["Python fundamentals", "GIS concepts"],
          pythonFeatures: ["Feature 1", "Feature 2"],
          gisRecap: ["Key concept 1", "Key concept 2"],
          content: "Access Lab 1 materials here. This session contains all the materials and exercises for Lab 1."
        }
      ]
    }
  }
  
  // Week 2: Data Structures
  if (weekNum === 2) {
    return {
      weekNumber: weekNum,
      title: `Week ${weekNum}`,
      description: "Master Python's data structures: Lists, Sets, Dictionaries, and Tuples.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Lab 2",
          description: "Data Structures in GIS",
          topics: ["Lists & Sets", "Dictionaries", "Tuples", "Conditionals"],
          pythonFeatures: ["List methods", "Set operations", "Dict keys/values", "if/else"],
          gisRecap: ["Metadata handling", "Data organization"],
          content: "Access Lab 2 materials here."
        }
      ]
    }
  }
  
  // Week 3: Loops & NumPy Arrays
  if (weekNum === 3) {
    return {
      weekNumber: weekNum,
      title: `Week ${weekNum}`,
      description: "Master loops, NumPy arrays, and conditional statements to process multispectral imagery.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Lab 3",
          description: "Working with Raster Data",
          topics: ["NumPy Arrays", "For Loops", "List Comprehensions", "Conditionals", "Array Operations"],
          pythonFeatures: ["Array slicing", "Loop iterations", "Conditional classification", "Statistical operations"],
          gisRecap: ["Raster processing", "Spectral analysis", "NDVI calculation"],
          content: "Access Lab 3 materials here."
        }
      ]
    }
  }
  
  // Week 4: Functions & Plotting
  if (weekNum === 4) {
    return {
      weekNumber: weekNum,
      title: `Week ${weekNum}`,
      description: "Create reusable functions and professional visualizations for GIS and environmental data analysis.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Lab 4",
          description: "Python Functions & Data Visualization",
          topics: ["Functions", "Line Plots", "Bar Charts", "Scatter Plots", "Heatmaps"],
          pythonFeatures: ["Function definition", "Matplotlib plotting", "Custom visualizations", "Anomaly detection"],
          gisRecap: ["NDVI visualization", "Spatial distribution", "Elevation mapping"],
          content: "Access Lab 4 materials here."
        }
      ]
    }
  }

  // Week 5: GeoPandas & Vector Data
  if (weekNum === 5) {
    return {
      weekNumber: weekNum,
      title: `Week ${weekNum}`,
      description: "Work with vector data using GeoPandas: shapefiles, reprojection, area, choropleths, and attribute joins.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Lab 5",
          description: "GeoPandas with Vector Data",
          topics: ["Shapefiles", "Reprojection", "Area & statistics", "Choropleths", "Attribute join"],
          pythonFeatures: ["geopandas.read_file", "to_crs", "merge", "plot with column"],
          gisRecap: ["CRS", "Choropleth", "Spatial join"],
          content: "Access Lab 5 materials here."
        }
      ]
    }
  }

  // Week 6: Python in ArcGIS Pro
  if (weekNum === 6) {
    return {
      weekNumber: weekNum,
      title: `Week ${weekNum}`,
      description: "Automate GIS workflows using Python in ArcGIS Pro. Complete Esri's Python for Everyone course.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Lab 6",
          description: "Python for Everyone (Esri Course)",
          topics: ["Python scripting", "ArcGIS Pro automation", "Script environments", "Geoprocessing tasks"],
          pythonFeatures: ["Python in ArcGIS Pro", "Notebooks", "Script debugging", "Workflow automation"],
          gisRecap: ["ArcGIS Python API", "Geoprocessing", "Data management", "Map automation"],
          content: "Access Lab 6 materials here."
        }
      ]
    }
  }

  // Week 7: ArcGIS Experience Builder
  if (weekNum === 7) {
    return {
      weekNumber: weekNum,
      title: `Week ${weekNum}`,
      description: "Create web apps with ArcGIS Experience Builder. Build an interactive Yosemite trails app with maps, widgets, and data.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Lab 7",
          description: "ArcGIS Experience Builder Tutorial",
          topics: ["Widgets", "Pages", "Data", "Actions", "Publishing"],
          pythonFeatures: [],
          gisRecap: ["Web maps", "Web scenes", "Feature layers", "Experience Builder", "Mobile optimization"],
          content: "Access Lab 7 materials here."
        }
      ]
    }
  }

  // Week 8: Raster Analysis & Zonal Statistics
  if (weekNum === 8) {
    return {
      weekNumber: weekNum,
      title: `Week ${weekNum}`,
      description: "Read multispectral imagery, compute NDVI, overlay vector zones, and run zonal statistics per polygon.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Lab 8",
          description: "Raster Data Analysis & Zonal Statistics",
          topics: ["Raster read", "RGB visualization", "Vector overlay", "NDVI/NDRE", "Vegetation mask", "Zonal statistics", "Merge stats"],
          pythonFeatures: ["rasterio", "geopandas", "rasterstats", "zonal_stats", "merge"],
          gisRecap: ["Multispectral bands", "CRS", "NDVI", "Zonal statistics"],
          content: "Access Lab 8 materials here."
        }
      ]
    }
  }

  // Week 9: GeoAI – Solar Panel Detection
  if (weekNum === 9) {
    return {
      weekNumber: weekNum,
      title: `Week ${weekNum}`,
      description: "Use GeoAI and a pre-trained solar panel detector to find solar panels in NAIP imagery (Davis, CA). No training—inference only.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Lab 9",
          description: "GeoAI – Solar Panel Detection Demo",
          topics: ["GeoAI", "NAIP imagery", "Solar panel detection", "Mask vectorization", "Area filtering", "Visualization"],
          pythonFeatures: ["geoai", "SolarPanelDetector", "leafmap", "orthogonalize", "add_geometric_properties"],
          gisRecap: ["Instance segmentation", "Raster masks", "Vector footprints", "Choropleth by area"],
          content: "Access the Solar Panel Detection demo and Lab 9 materials here."
        }
      ]
    }
  }
  return {
    weekNumber: weekNum,
    title: `Week ${weekNum}`,
    description: `Lab materials and content for Week ${weekNum}`,
    sessions: [
      {
        sessionNumber: 1,
        title: `Week ${weekNum} - Lab Session 1`,
        description: "First lab session of the week",
        topics: ["Python fundamentals", "GIS concepts"],
        pythonFeatures: ["Feature 1", "Feature 2"],
        gisRecap: ["Key concept 1", "Key concept 2"],
        content: "Content will be added here..."
      },
      {
        sessionNumber: 2,
        title: `Week ${weekNum} - Lab Session 2`,
        description: "Second lab session of the week",
        topics: ["Advanced Python", "GIS applications"],
        pythonFeatures: ["Feature 3", "Feature 4"],
        gisRecap: ["Key concept 3", "Key concept 4"],
        content: "Content will be added here..."
      }
    ]
  }
})


