export type Project = {
  title: string;
  src: string;
  endpoint: string;
  link: string;
  alt: string;
  description: string;
};

export const projectList: Project[] = [
  {
    title: "WebTool + Chatgpt openai - API",
    src: "/code.jpg",
    endpoint: "/projects/1",
    link: "https://github.com/TuftyRairu/WebtoolandGptSystem",
    alt: "",
    description:
      "Web Tool and GPT system is a Microservice backend system designed in php lumen to use web tools like conversion of base64 and more, accessing chatGPT. - personal project",
  },
  {
    title: "scholaRSerbisyo",
    src: "/code.jpg",
    endpoint: "/projects/2",
    link: "https://github.com/orgs/scholaRSerbisyo/repositories",
    alt: "",
    description:
      "A web-base platform for admins (system admin, CSO-Return Service admin, school admin and community admin) and a mobile application for city scholars. An integrated system consisting of a mobile application for scholars and a web-based platform for admins, aimed at streamlining the management and monitoring of return services. The mobile app will enable scholars to submit their return service proofs both offline and online, receive event notifications, and track the status of their return services. The web platform will provide admins with a comprehensive dashboard to view all events, manage scholar data, and oversee event records and submissions in a centralized database, eliminating reliance on tools like Excel, Google Forms, and Facebook. This system will enhance data accuracy, reduce errors, and mitigate risks of record loss.",
  },
  {
    title: "UApp",
    src: "/code.jpg",
    endpoint: "/projects/3",
    link: "https://github.com/TuftyRairu/UApp",
    alt: "",
    description:
      "A Lost and Found application where this is a comprehensive and user-friendly platform designed to assist individuals in the university to recover every student’s lost items. Leveraging advanced technology and a global network. The application can post description and information that could process the reporting and finding lost belongings while prioritizing security, privacy, and community collaboration as well as, embracing honesty, trust and camaraderie within the institution.",
  },
  {
    title: "ITSI Website",
    src: "/code.jpg",
    endpoint: "/projects/4",
    link: "/projects/4",
    alt: "https://www.itsi.com.ph/",
    description:
      "Company Personal Website about their Services and Informations.",
  },
];
