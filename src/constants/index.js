import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  seg,
  summarize,
  vext, 
  textimage,
} from "../assets";
import { github } from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Enthusiast",
    icon: web,
  },
  {
    title: "Generative AI Innovator",
    icon: mobile,
  },
  {
      
    title: "Backend Developer",
    icon: backend,
  },
   {
     title: "Data Scientist",
     icon: creator,
   },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "MySQL",
    icon: javascript,
  },
  {
    name: "Java",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: docker,
  },
  {
    name: "Django",
    icon: reactjs,
  },

  {
    name: "Tensorflow",
    icon: tailwind,
  },
  {
    name: "Scikit Learn",
    icon: nodejs,
  },
  {
    name: "OpenCV",
    icon: typescript,
  },
  {
    name: "Seaborn",
    icon: mongodb,
  },
  {
    name: "Langchain",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "FastAPI",
    icon: figma,
  },


];

const experiences = [
  {
    title: "RAG QA Bot",
    company_name: "Retrieval and generation for intelligent document querying.",
    icon: github,
    iconBg: "#000000",
    link: "https://github.com/sumitjha16/RAG_QA_Bot",
    date: "August 2024",
    points: [
     "Developed a RAG-based QA bot using LangChain, Chroma, Cohere, and Hugging Face for processing and retrieving information from PDF documents.",
     "Integrated advanced NLP techniques to generate human-like responses and summaries based on user queries.",
     "Enhanced user interaction through efficient document retrieval and context-aware answer generation.",
     ],
  },
  {
    title: "Talk To Database",
    company_name: "Intelligent SQL Query System with LLM and Real-time Database Interaction",
    icon: github,
    link: "https://github.com/sumitjha16/Talk_to_database",
    iconBg: "#000000",
    date: "July 2024",
    points: [
      "Developed an LLM-based SQL database query system using LangChain, HuggingFace Embeddings, Chroma,SpeechRecoginition and ChatGroq",
      "Integrated MySQL with SQLAlchemy for efficient database management.",
      "Optimized performance with Redis, Celery, Prometheus, and Grafana for monitoring and task management.",

    ],
  },
  {
    title: " Face Lock Web Login",
    company_name: "Secure Website Authentication using Face Recognition",
    icon: github,
    link: "https://github.com/sumitjha16/Face-Lock",
    iconBg: "#000000",
    date: "Mar 2024",
    points: [
      "Implemented face lock authentication using OpenCV, TensorFlow, Keras, and Dlib for facial recognition",
      "Integrated with a web login system using Flask and deployed with Docker for seamless and secure access control.",

    ],
  },
  {
    title: "Washing Machine Slot Booking",
    company_name: "Slot Booking System to make manage crowd",
    icon: github,
    link: "https://github.com/sumitjha16/guesthouse",
    iconBg: "#000000",
    date: "July 2023",
    points: [
      "Developed a slot booking system using Django, JavaScript, HTML, Bootstrap, and SQL for managing washing machine reservations",
      "Implemented email notifications, SSL login for secure access, user dashboard for managing bookings, waitlist functionality with email notifications",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I found Rasool attentive, driven, and quick to grasp complex subjects. His initiative, analytical ability, and proficiency in expressing ideas, both written and oral, were impressive. He possesses excellent moral character, a positive attitude, and strong interpersonal skills.",
    name: "Dr. Manas Das",
    designation: "Professor",
    company: "IIT Guwahati",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
 
];

const projects = [
  {
    name: "Introduction to Large Language Models",
    description:
      "This course introduced me to the concepts behind large language models (LLMs), their architectures, and applications. I gained insights into natural language processing and the impact of LLMs on various industries.",
    tags: [
      {
        name: "Generative AI",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Skrasool1197/DocuGenie-Conversational-Document-Assistant",
  },
  {
    name: " Introduction to Database Systems (NPTEL)",
    description:
      "Through this course, I gained a comprehensive understanding of database systems, including data models, query languages, and database design principles. It provided a solid foundation for managing and analyzing data effectively.",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "DBMS",
        color: "green-text-gradient",
      },

    ],
    image: jobit,
    source_code_link: "https://github.com/Skrasool1197/EasySearch-LLM",
  },

  {
    name: "TensorFlow for Beginners",
    description:
      "In this course, I learned the essentials of TensorFlow, a powerful library for machine learning and deep learning. The course covered building and training machine learning models, enabling me to develop scalable solutions.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "pink-text-gradient",
      },
    ],
    image: vext,
    source_code_link: "https://github.com/Skrasool1197/Vext-API-Interaction-Tool",
  },
  {
    name: "AWS Beginner",
    description:
      "This introductory course on Amazon Web Services (AWS) equipped me with essential cloud computing skills. I learned about various AWS services and how to deploy applications in a cloud environment, preparing me for cloud-based projects.",
    tags: [
      {
        name: "Cloud Computing",
        color: "blue-text-gradient",
      },
      {
        name: "Deployment",
        color: "green-text-gradient",
      },
      {
        name: "Cloud Architecture",
        color: "pink-text-gradient",
      },
    ],
    image: textimage,

  },
  {
    name: "Neural Network: Image Recognition",
    description:
      "This course provided an in-depth understanding of neural networks and their applications in image recognition. I explored fundamental concepts, architectures, and techniques that drive modern machine learning solutions.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },

      {
        name: "Deep Learning",
        color: "pink-text-gradient",
      },
    ],
    image: summarize,

  },


];


export { services, technologies, experiences, testimonials, projects };
