import {
  FolderIcon,
  DocumentIcon,
  DevicesIcon,
  CertificateIcon,
} from "./../components/Courses/CourseIcons";

const coursesData = [
   {
    id: "frontend",
    title: "Frontend Development",
    duration: "16 Chapters • 120 lectures • 15h total length",
    description:
      "Learn the skills to build responsive and dynamic UIs using HTML, CSS, JavaScript, React, and Next.js. This course guides you through real-world projects and prepares you for the job market as a frontend dev.",
    expandedDescription:
      "Master the essential skills to design and develop responsive, dynamic user interfaces using HTML, CSS, JavaScript, React, and Next.js. This all-encompassing course guides you from core web fundamentals to advanced topics, enabling you to build seamless, high-performance web applications with confidence. Through practical, real-world projects, you'll gain expertise in component-based architecture, state management, and server-side rendering. But it’s more than just coding — you’ll also learn critical industry best practices including accessibility standards, SEO optimization, and performance enhancement. Whether you’re starting fresh or sharpening your frontend skills, this course ensures you graduate with a professional portfolio that stands out and positions you to secure your ideal frontend developer role in today’s competitive tech landscape.",
    subtitle: "Frontend Development Program",
    rating: 4,
    reviews: "1.2k reviews",
    techStack: ["HTML5", "CSS3", "JavaScript", "React.js"],
    extendedSkills: ["Next.js", "TypeScript", "Tailwind CSS", "40+ More Skills"],
    price: "$9.99",
    includedItems: [
      { icon: "FolderIcon", title: "One project file" },
      { icon: "DocumentIcon", title: "3 chapter quizzes" },
      { icon: "DevicesIcon", title: "Access on tablet and phone" },
      { icon: "CertificateIcon", title: "Certificate of completion" },
    ],
    totalChapters: 16,
    totalLectures: 323,
    totalLength: "19h 12m",
    chapters: [
      {
        id: 1,
        title: "Chapter 1: Introduction to Frontend",
        subtitle: "Welcome to the Frontend Development Program",
        duration: "45 minutes",
        lessons: [
          {
            id: 1,
            title: "Frontend Dev Overview",
            description: "Get familiar with the frontend ecosystem and tools.",
          },
          {
            id: 2,
            title: "HTML Basics",
            description: "Learn the structure of web pages with semantic HTML.",
          },
          {
            id: 3,
            title: "CSS Fundamentals",
            description: "Style your HTML with CSS basics and selectors.",
          },
        ],
      },
      {
        id: 2,
        title: "Chapter 2: Advanced HTML & CSS",
        subtitle: "Going deeper into markup and styles",
        duration: "50 minutes",
        lessons: [
          {
            id: 1,
            title: "Responsive Design Principles",
            description: "Make your sites look good on any device.",
          },
          {
            id: 2,
            title: "CSS Flexbox & Grid",
            description: "Master modern layout techniques.",
          },
          {
            id: 3,
            title: "CSS Animations and Transitions",
            description: "Bring your UI to life with smooth animations.",
          },
        ],
      },
      {
        id: 3,
        title: "Chapter 3: JavaScript Essentials",
        subtitle: "Understand the language behind interactivity",
        duration: "1h 10m",
        lessons: [
          {
            id: 1,
            title: "JavaScript Syntax and Basics",
            description: "Variables, data types, and functions.",
          },
          {
            id: 2,
            title: "DOM Manipulation",
            description: "Interact with web pages dynamically.",
          },
          {
            id: 3,
            title: "Events and Event Listeners",
            description: "Make your pages respond to user input.",
          },
          {
            id: 4,
            title: "ES6+ Features",
            description: "Learn modern JavaScript syntax and features.",
          },
        ],
      },
      {
        id: 4,
        title: "Chapter 4: JavaScript Deep Dive",
        subtitle: "Take JS to the next level",
        duration: "1h 15m",
        lessons: [
          {
            id: 1,
            title: "Asynchronous JavaScript: Callbacks & Promises",
            description: "Handle async operations with ease.",
          },
          {
            id: 2,
            title: "Async/Await Syntax",
            description: "Write cleaner asynchronous code.",
          },
          {
            id: 3,
            title: "JavaScript Modules",
            description: "Organize your code for maintainability.",
          },
          {
            id: 4,
            title: "Error Handling",
            description: "Handle exceptions and debug like a pro.",
          },
        ],
      },
      {
        id: 5,
        title: "Chapter 5: Introduction to React",
        subtitle: "Start building reactive UIs",
        duration: "1h 20m",
        lessons: [
          {
            id: 1,
            title: "React Basics: Components & JSX",
            description: "Understand React’s core building blocks.",
          },
          {
            id: 2,
            title: "State and Props",
            description: "Manage data and pass info in React.",
          },
          {
            id: 3,
            title: "Handling Events",
            description: "Make interactive React apps.",
          },
          {
            id: 4,
            title: "React Lifecycle",
            description: "Understand component lifecycle methods.",
          },
        ],
      },
   
     
      
      // Continue adding more chapters till 16...
    ],
  },

  {
   id: "backend",
    title: "Backend Development",
    duration: "18 Chapters • 140 lectures • 20h total length",
    description:
      "Learn how to build robust server-side applications using Node.js, Express, and databases like MongoDB.",
    expandedDescription:
      "Dive deep into backend development essentials with Node.js, Express, REST APIs, authentication, databases, and deployment. This course equips you with hands-on projects and real-world best practices to build scalable, secure, and efficient server-side applications. Gain mastery in building APIs, managing data persistence, and integrating with frontend systems to become a well-rounded full-stack developer.",
    subtitle: "Backend Development Program",
    rating: 4.5,
    reviews: "950 reviews",
    techStack: ["Node.js", "Express", "MongoDB", "REST APIs"],
    extendedSkills: ["JWT Authentication", "GraphQL", "Docker", "CI/CD"],
    price: "$12.99",
    includedItems: [
      { icon: "FolderIcon", title: "Two project files" },
      { icon: "DocumentIcon", title: "5 chapter quizzes" },
      { icon: "DevicesIcon", title: "Access on all devices" },
      { icon: "CertificateIcon", title: "Certificate of completion" },
    ],
    totalChapters: 18,
    totalLectures: 140,
    totalLength: "20h 30m",
    chapters: [
      {
        id: 1,
        title: "Chapter 1: Introduction to Backend",
        duration: "55 minutes",
        lessons: [
          {
            id: 1,
            title: "What is Backend Development?",
            description: "Understand the backend role in software architecture.",
          },
          {
            id: 2,
            title: "Setting up Node.js Environment",
            description: "Install Node.js, npm, and create your first server.",
          },
          {
            id: 3,
            title: "Introduction to Express.js",
            description: "Build your first Express server and routes.",
          },
        ],
      },
      {
        id: 2,
        title: "Chapter 2: REST APIs Fundamentals",
        duration: "1h 10m",
        lessons: [
          {
            id: 1,
            title: "What is REST?",
            description: "REST architecture principles and best practices.",
          },
          {
            id: 2,
            title: "Creating RESTful Routes in Express",
            description: "Implement CRUD operations with Express routes.",
          },
          {
            id: 3,
            title: "Using Postman for API Testing",
            description: "Test your APIs effectively using Postman.",
          },
        ],
      },
      {
        id: 3,
        title: "Chapter 3: Working with Databases",
        duration: "1h 15m",
        lessons: [
          {
            id: 1,
            title: "Introduction to MongoDB",
            description: "NoSQL database basics and setup.",
          },
          {
            id: 2,
            title: "Mongoose ODM",
            description: "Model your data with schemas using Mongoose.",
          },
          {
            id: 3,
            title: "CRUD Operations with MongoDB",
            description: "Perform database operations from your app.",
          },
        ],
      },
      {
        id: 4,
        title: "Chapter 4: Authentication & Authorization",
        duration: "1h 20m",
        lessons: [
          {
            id: 1,
            title: "User Authentication Concepts",
            description: "Understand login, signup, and security basics.",
          },
          {
            id: 2,
            title: "Implementing JWT Authentication",
            description: "Secure routes with JSON Web Tokens.",
          },
          {
            id: 3,
            title: "Role-based Access Control",
            description: "Manage user permissions and roles.",
          },
        ],
      },
      {
        id: 5,
        title: "Chapter 5: Advanced API Design",
        duration: "1h 15m",
        lessons: [
          {
            id: 1,
            title: "API Versioning",
            description: "Maintain and update APIs without breaking clients.",
          },
          {
            id: 2,
            title: "Error Handling Best Practices",
            description: "Build reliable and maintainable APIs.",
          },
          {
            id: 3,
            title: "Rate Limiting & Throttling",
            description: "Protect your API from abuse.",
          },
        ],
      },
      {
        id: 6,
        title: "Chapter 6: Real-time Apps with WebSockets",
        duration: "1h",
        lessons: [
          {
            id: 1,
            title: "Introduction to WebSockets",
            description: "Basics of real-time communication.",
          },
          {
            id: 2,
            title: "Building a Chat App with Socket.io",
            description: "Implement real-time features.",
          },
          {
            id: 3,
            title: "Managing Connections and Events",
            description: "Handle real-time data efficiently.",
          },
        ],
      },
      {
        id: 7,
        title: "Chapter 7: GraphQL APIs",
        duration: "1h 10m",
        lessons: [
          {
            id: 1,
            title: "GraphQL Basics",
            description: "Query language for APIs explained.",
          },
          {
            id: 2,
            title: "Setting Up GraphQL Server",
            description: "Implement GraphQL with Node.js.",
          },
          {
            id: 3,
            title: "Resolvers and Schemas",
            description: "Define your data and queries.",
          },
        ],
      },
      {
        id: 8,
        title: "Chapter 8: Testing & Debugging",
        duration: "1h 20m",
        lessons: [
          {
            id: 1,
            title: "Unit Testing with Jest",
            description: "Write tests for backend functions.",
          },
          {
            id: 2,
            title: "Integration Testing",
            description: "Test API endpoints end-to-end.",
          },
          {
            id: 3,
            title: "Debugging Techniques",
            description: "Find and fix bugs efficiently.",
          },
        ],
      },
      {
        id: 9,
        title: "Chapter 9: Deployment & DevOps Basics",
        duration: "1h 15m",
        lessons: [
          {
            id: 1,
            title: "Deploying Node.js Apps on Heroku",
            description: "Take your app live in minutes.",
          },
          {
            id: 2,
            title: "Environment Variables & Config",
            description: "Manage app settings securely.",
          },
          {
            id: 3,
            title: "Introduction to Docker",
            description: "Containerize your backend for consistency.",
          },
        ],
      },
      // Add more chapters as needed up to 18 for full coverage
    ],
  },

  // Add other courses here with full details as needed
];

export default coursesData;
