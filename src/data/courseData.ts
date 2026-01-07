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
  officeHours: "Tuesday 1:00 PM – 2:00 PM, Thursday 1:00 PM – 2:00 PM, Or by appointment",
  pronouns: "he/him"
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
  title: "Advanced GIS",
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
export const weeks: Week[] = Array.from({ length: 10 }, (_, i) => ({
  weekNumber: i + 1,
  title: `Week ${i + 1}`,
  description: `Lab materials and content for Week ${i + 1}`,
  sessions: [
    {
      sessionNumber: 1,
      title: `Week ${i + 1} - Lab Session 1`,
      description: "First lab session of the week",
      topics: ["Python fundamentals", "GIS concepts"],
      pythonFeatures: ["Feature 1", "Feature 2"],
      gisRecap: ["Key concept 1", "Key concept 2"],
      content: "Content will be added here..."
    },
    {
      sessionNumber: 2,
      title: `Week ${i + 1} - Lab Session 2`,
      description: "Second lab session of the week",
      topics: ["Advanced Python", "GIS applications"],
      pythonFeatures: ["Feature 3", "Feature 4"],
      gisRecap: ["Key concept 3", "Key concept 4"],
      content: "Content will be added here..."
    }
  ]
}))


