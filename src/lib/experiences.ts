export type Experience = {
  work: string;
  date_work_type: string;
  street: string;
  activies: string[];
  link: string;
  link_name: string;
};

export const experienceList: Experience[] = [
  {
    work: "Quality Assurance Engineer Internship in Innovuze Solutions Inc. ",
    date_work_type: "Onsite 02/2025 - 05/2025",
    street:
      "5th Level, Gateway Tower 1, Limketkai Center Cagayan de Oro City 9000 Philippines",
    activies: [
      "Conducted Manual Testing on their local projects (found 20+ Bugs - Functionality & UI Bugs) and on some projects that the QA Department worked on (found 5+ Bugs on each project) .",
      "Assisted in testing QA department projects, discovering 5+ bugs per project.",
      "Developed clear and efficient test plans and test cases to support both automation efforts and bug tracking.",
      "Implemented automated tests using Cypress on local projects to improve bug detection, tracking, and support regression testing.",
      "Carried out penetration testing on local projects, uncovering 10 security-related bugs.",
    ],
    link: "",
    link_name: "",
  },
  {
    work: "Web Developer",
    date_work_type: "Online/Remote - 05/2025",
    street: "Infinitecare Technology Solutions Inc. ",
    activies: [
      "Developing and Deploying Company’s website using WordPress.",
      "Used different plugins in WordPress.",
      "Apply Responsiveness on the app.",
    ],
    link: "",
    link_name: " - website",
  },
];
