export type EducationEntry = {
  school: string;
  credential: string;
  detail: string;
  timeframe: string;
};

export type Award = {
  event: string;
  href?: string;
  results: string[];
};

export const education: EducationEntry[] = [
  {
    school: "George Mason University",
    credential: "B.S. Mathematics, Data Science concentration",
    detail: "Accelerated M.S. track in Mathematics (expected 2030).",
    timeframe: "Incoming Fall 2026",
  },
  {
    school: "Northern Virginia Community College",
    credential: "Concurrent enrollment, GPA 4.0",
    detail: "",
    timeframe: "During high school",
  },
  {
    school: "C.G. Woodson High School",
    credential: "High school diploma",
    detail: "",
    timeframe: "Graduated 2026",
  },
];

export const awards: Award[] = [
  {
    event: "HackFax x PatriotHacks 2026",
    href: "https://www.patriothacks.org/",
    results: ["2nd Place, Cybersecurity Track", "2nd Place, Gemini API Track"],
  },
];
