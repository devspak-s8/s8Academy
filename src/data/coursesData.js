const coursesData = [
  {
    id: "frontend",
    title: "Frontend Development",
    duration: "16 Chapters • 120 lectures • 15h total length",
    description: `This course covers HTML, CSS, JavaScript, React, and modern frontend tools. You’ll learn how to create responsive, dynamic, and visually appealing web interfaces.`,
    includedItems: [
      { icon: "FolderIcon", title: "One project file" },
      { icon: "DocumentIcon", title: "3 chapter quizzes" },
      { icon: "DevicesIcon", title: "Access on tablet and phone" },
      { icon: "CertificateIcon", title: "Certificate of completion" },
    ],
    chapters: [
      {
        id: 1,
        title: "HTML & CSS Basics",
        duration: "45 minutes",
        lessons: [
          {
            number: 1,
            title: "Intro to Web Development",
            description:
              "An overview of the web ecosystem and how HTML & CSS fit in.",
          },
          {
            number: 2,
            title: "Basic HTML Tags",
            description:
              "Learn how to structure web pages using HTML elements.",
          },
          {
            number: 3,
            title: "Styling with CSS",
            description:
              "Apply styles, colors, and layout techniques with CSS.",
          },
        ],
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    duration: "18 Chapters • 140 lectures • 20h total length",
    description: `Learn how to build robust server-side applications using Node.js, Express, and databases like MongoDB.`,
    includedItems: [
      { icon: "FolderIcon", title: "Two project files" },
      { icon: "DocumentIcon", title: "5 chapter quizzes" },
      { icon: "DevicesIcon", title: "Access on all devices" },
      { icon: "CertificateIcon", title: "Certificate of completion" },
    ],
    chapters: [
      {
        id: 1,
        title: "Intro to Backend",
        duration: "55 minutes",
        lessons: [
          {
            number: 1,
            title: "What is Backend?",
            description:
              "Understand the role of backend in full-stack development.",
          },
          {
            number: 2,
            title: "Getting Started with Node.js",
            description: "Install Node.js and build your first server.",
          },
          {
            number: 3,
            title: "Intro to REST APIs",
            description:
              "Understand REST architecture and how to build endpoints.",
          },
        ],
      },
    ],
  },
  // Add other courses with full details as needed
];

export default coursesData;
