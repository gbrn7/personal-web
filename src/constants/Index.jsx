import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import laravel from "../assets/laravel.svg";
import react from "../assets/react.svg";
import postgresql from "../assets/postgresql.png";
import mysql from "../assets/mysql.png";
import nodeJs from "../assets/node-js.svg";
import expressJs from "../assets/expressJS.svg";
import gin from "../assets/gin-gonic.png";
import echo from "../assets/echo.svg";
import fiber from "../assets/fiber.svg";
import tailwind from "../assets/tailwind.svg";
import bootstrap from "../assets/bootstrap.png";
import mongodb from "../assets/mongodb.svg";
import golang from "../assets/Go.png";
import java from "../assets/Java.png";
import javascript from "../assets/JavaScript.png";
import typescript from "../assets/TypeScript.png";
import php from "../assets/PHP.png";
import nextjs from "../assets/Next.js.png";
import vite from "../assets/Vite.js.png";
import docker from "../assets/Docker.png";
import podman from "../assets/Podman.png";
import kubernetes from "../assets/Kubernetes.png";
import jenkins from "../assets/Jenkins.png";
import gitlab from "../assets/GitLab.png";
import githubActions from "../assets/GitHub Actions.png";
import hashicorpVault from "../assets/HashiCorp Vault.png";
import googleCloud from "../assets/Google Cloud.png";
import nginx from "../assets/NGINX.png";
import ubuntu from "../assets/Ubuntu.png";
import sqlServer from "../assets/Microsoft SQL Server.png";
import sqlite from "../assets/SQLite.png";
import redis from "../assets/Redis.png";
import dbeaver from "../assets/DBeaver.png";
import kafka from "../assets/Apache Kafka.png";
import rabbitmq from "../assets/RabbitMQ.png";
import elasticsearch from "../assets/Elastic Search.png";
import logstash from "../assets/Logstash.png";
import kibana from "../assets/Kibana.png";
import prometheus from "../assets/Prometheus.png";
import grafana from "../assets/Grafana.png";
import opentelemetry from "../assets/OpenTelemetry.png";
import postman from "../assets/Postman.png";
import suppmycoffee from "../assets/suppMyCoffee.png";
import superMarketer from "../assets/superMarketer.png";
import furnitureShop from "../assets/FurnitureShop.png";
import hotelResort from "../assets/hotelResort.png";
import plantShop from "../assets/PlantShop.png";
import simplyInterior from "../assets/simplyInterior.png";
import spkTopsis from "../assets/spkTopsis.png";
import gentleBaby from "../assets/gentleBaby.png";
import sinaw from "../assets/sinaw.png";
import sirepoJTI from "../assets/sirepoJTI.png";

export const navItems = [
  { label: "About Me", href: "" },
  { label: "Portofolio", href: "portofolio" },
];

export const contactItems = [
  {
    icon: <MdEmail />,
    label: "Email",
    href: "mailto:muhammadrayhangibran@gmail.com",
    value: "muhammadrayhangibran@gmail.com",
  },
  {
    icon: <FaWhatsapp />,
    label: "Phone",
    href: "https://wa.me/6282132679938",
    value: "+62-821-3267-9938",
  },
  {
    icon: <GrMapLocation />,
    label: "Location",
    href: "#",
    value: "Malang, East Java, Indonesia",
  },
];

export const socmedItems = [
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/rayhangibran_19/",
  },
  {
    icon: <SiLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-rayhan-gibran-32a1b524a/",
  },
];

export const experienceItems = [
  {
    company: "PT. Mitra Kasih Perkasa (Semarang, ID)",
    title: "Software Engineer - Backend Developer",
    date: "November 2025 - Now",
    detail: [
      "Developed backend services for a Mobile Banking application using Microservices Architecture with Echo framework",
      "Implemented security services and authentication mechanisms to enhance the security and reliability of mobile banking systems",
      "Coordinated with Frontend teams to ensure smooth integration between backend services and frontend applications",
      "Built observability and monitoring systems using Grafana, Prometheus, Loki, and Tempo",
      "Implemented distributed tracing and telemetry collection using OpenTelemetry and Alloy",
      "Integrated Redis caching to improve application performance and reduce database load",
      "Managed containerized development and deployment environments using Docker",
      "Worked with both relational and NoSQL databases including PostgreSQL and MongoDB",
      "Implemented API documentation Swagger to improve developer collaboration and API maintainability",
    ],
  },
  {
    company: "State Polytechnic of Malang (Malang, ID)",
    title: "Business Information System Study Program - Student Activity",
    date: "Aug 2021 - Sep 2025",
    detail: [
      "Learned and practiced developing website with attention to code quality of responsive design",
      "Developing the UPA BAHASA POLINEMA website (campus language unit) for TOEIC test registration and language courses, successfully used by 3,000++ students",
      "Assisting lecturers in developing websites for mother and baby treatment course",
      "Led and collaborated to create Decision Support System with TOPSIS method calculation",
    ],
  },
  {
    company: "PT. Rekaindo Global Jasa (Madiun, ID)",
    title: "Frontend Developer - Internship",
    date: "July 2024 - Dec 2024",
    detail: [
      "Collaborate with the team to brainstorm, design, and develop applications to support the production process of railway component",
      "Responsible for developing mobile apps and testing the application to ensure the code can run properly",
    ],
  },
  {
    company: "Creatif.co.id (Remote - Batam, ID)",
    title: "Web Developer",
    date: "Jan 2024",
    detail: [
      "Developed web applications and client landing pages for digital agency projects.",
    ],
  },
];

export const educationItems = [
  {
    institution: "State Polytechnic of Malang (Malang, ID)",
    degree: "Business Information System",
    date: "2021 - 2025",
    detail: [
      "Cumulative GPA: 3.73/4.0",
      "Relevant Coursework: Data Structures; Object-Oriented Programming; Database; Data Warehouse; Web Programming",
    ],
  },
];

export const projectItems = [
  {
    name: "MOBILE BANKING",
    role: "Back End Developer",
    date: "Semarang, ID • Nov 2025 - Present",
    detail: [
      "Mobile Banking with Microservices architecture using echo framework",
      "Implement Redis caching",
      "Implement Observability with using grafana",
      "Utilized: Go, Echo, RESTful APIs, PostgreSQL, MongoDB, Redis, Docker, Grafana, Prometheus, Alloy, Tempo, Loki, Open Telemetry, swagger",
    ],
  },
  {
    name: "SOCCER FIELD BOOKING",
    role: "Back End Developer",
    date: "Malang, ID • Jul 2025 - Sept 2025",
    detail: [
      "E-Booking with Microservices architecture using gin framework",
      "Cloud service using Google Cloud Platform and Implement CI/CD with Jenkins",
      "Message Broker using Kafka",
      "Utilized: Go, Gin, Gorm, PostgreSQL, Payment Gateway, GCP, Jenkins, Kafka, Docker",
    ],
  },
  {
    name: "E-WALLET",
    role: "Back End Developer",
    date: "Malang, ID • Feb 2025 - Mar 2025",
    detail: [
      "E-Wallet with Microservices architecture using gin framework",
      "Communication between microservices using gRPC",
      "Utilized: Go, Gin, Gorm, Testify, MySQL, gRPC, Rest API, Docker, Gomock",
    ],
  },
];

export const technicalSkillItems = [
  // --- Programming Languages ---
  {
    image: golang,
    title: "Go",
    subtitle: "Programming Language",
    category: "Programming Language",
  },
  {
    image: php,
    title: "PHP",
    subtitle: "Programming Language",
    category: "Programming Language",
  },
  {
    image: typescript,
    title: "TypeScript",
    subtitle: "Programming Language",
    category: "Programming Language",
  },
  {
    image: javascript,
    title: "JavaScript",
    subtitle: "Programming Language",
    category: "Programming Language",
  },
  {
    image: java,
    title: "Java",
    subtitle: "Programming Language",
    category: "Programming Language",
  },

  // --- Front-End Development ---
  {
    image: react,
    title: "React",
    subtitle: "Front-End Library",
    category: "Front-End Development",
  },
  {
    image: nextjs,
    title: "Next.js",
    subtitle: "React Framework",
    category: "Front-End Development",
  },
  {
    image: vite,
    title: "Vite",
    subtitle: "Frontend Build Tool",
    category: "Front-End Development",
  },
  {
    image: tailwind,
    title: "Tailwind CSS",
    subtitle: "CSS Framework",
    category: "Front-End Development",
  },
  {
    image: bootstrap,
    title: "Bootstrap",
    subtitle: "CSS Framework",
    category: "Front-End Development",
  },

  // --- Back-End Development ---
  {
    image: gin,
    title: "Gin",
    subtitle: "Go Web Framework",
    category: "Back-End Development",
  },
  {
    image: echo,
    title: "Echo",
    subtitle: "Go Web Framework",
    category: "Back-End Development",
  },
  {
    image: fiber,
    title: "Fiber",
    subtitle: "Go Web Framework",
    category: "Back-End Development",
  },
  {
    image: nodeJs,
    title: "Node JS",
    subtitle: "JavaScript Runtime",
    category: "Back-End Development",
  },
  {
    image: expressJs,
    title: "Express JS",
    subtitle: "Back-End Framework",
    category: "Back-End Development",
  },
  {
    image: laravel,
    title: "Laravel",
    subtitle: "Back-End Framework",
    category: "Back-End Development",
  },

  // --- Databases & Cache ---
  {
    image: mysql,
    title: "MySQL",
    subtitle: "Relational Database",
    category: "Database & Cache",
  },
  {
    image: postgresql,
    title: "PostgreSQL",
    subtitle: "Relational Database",
    category: "Database & Cache",
  },
  {
    image: sqlServer,
    title: "SQL Server",
    subtitle: "Relational Database",
    category: "Database & Cache",
  },
  {
    image: sqlite,
    title: "SQLite",
    subtitle: "Embedded Database",
    category: "Database & Cache",
  },
  {
    image: mongodb,
    title: "MongoDB",
    subtitle: "NoSQL Database",
    category: "Database & Cache",
  },
  {
    image: redis,
    title: "Redis",
    subtitle: "In-Memory Cache & DB",
    category: "Database & Cache",
  },

  // --- Message Brokers ---
  {
    image: kafka,
    title: "Apache Kafka",
    subtitle: "Event Streaming Platform",
    category: "Message Broker",
  },
  {
    image: rabbitmq,
    title: "RabbitMQ",
    subtitle: "Message Broker",
    category: "Message Broker",
  },

  // --- DevOps & Cloud ---
  {
    image: docker,
    title: "Docker",
    subtitle: "Containerization",
    category: "DevOps & Cloud",
  },
  {
    image: podman,
    title: "Podman",
    subtitle: "Container Engine",
    category: "DevOps & Cloud",
  },
  {
    image: kubernetes,
    title: "Kubernetes",
    subtitle: "Container Orchestration",
    category: "DevOps & Cloud",
  },
  {
    image: jenkins,
    title: "Jenkins",
    subtitle: "CI/CD Automation",
    category: "DevOps & Cloud",
  },
  {
    image: gitlab,
    title: "GitLab",
    subtitle: "CI/CD & DevOps Platform",
    category: "DevOps & Cloud",
  },
  {
    image: githubActions,
    title: "GitHub Actions",
    subtitle: "CI/CD Pipeline",
    category: "DevOps & Cloud",
  },
  {
    image: hashicorpVault,
    title: "HashiCorp Vault",
    subtitle: "Secrets & Encryption Management",
    category: "DevOps & Cloud",
  },
  {
    image: nginx,
    title: "NGINX",
    subtitle: "Web Server & Reverse Proxy",
    category: "DevOps & Cloud",
  },
  {
    image: ubuntu,
    title: "Ubuntu",
    subtitle: "Linux OS",
    category: "DevOps & Cloud",
  },
  {
    image: googleCloud,
    title: "Google Cloud",
    subtitle: "Cloud Platform",
    category: "DevOps & Cloud",
  },

  // --- Observability & Monitoring ---
  {
    image: elasticsearch,
    title: "Elasticsearch",
    subtitle: "Search & Analytics Engine",
    category: "Observability & Monitoring",
  },
  {
    image: logstash,
    title: "Logstash",
    subtitle: "Log Processing Pipeline",
    category: "Observability & Monitoring",
  },
  {
    image: kibana,
    title: "Kibana",
    subtitle: "Data Visualization",
    category: "Observability & Monitoring",
  },
  {
    image: prometheus,
    title: "Prometheus",
    subtitle: "Monitoring & Alerting",
    category: "Observability & Monitoring",
  },
  {
    image: grafana,
    title: "Grafana",
    subtitle: "Metrics & Dashboards",
    category: "Observability & Monitoring",
  },
  {
    image: opentelemetry,
    title: "OpenTelemetry",
    subtitle: "Observability Framework",
    category: "Observability & Monitoring",
  },

  // --- Developer Tools ---
  {
    image: postman,
    title: "Postman",
    subtitle: "API Platform & Testing",
    category: "Developer Tools",
  },
  {
    image: dbeaver,
    title: "DBeaver",
    subtitle: "Database Management Tool",
    category: "Developer Tools",
  },
];

export const portofolioCardItems = [
  {
    image: sirepoJTI,
    title: "Sirepo-JTI",
    subtitle: "Thesis Repository System for Technology Information Departement",
    category: "FullStack",
    href: "",
  },
  {
    image: suppmycoffee,
    title: "Supp-My-Coffee",
    subtitle: "Roastery House E-Commerce website with payment gateway",
    category: "FullStack",
    href: "",
  },
  {
    image: spkTopsis,
    title: "Topsis Method",
    subtitle: "Decision Support System",
    category: "FullStack",
    href: "",
  },
  {
    image: gentleBaby,
    title: "Gentle Baby",
    subtitle: "B2B E-Commerce for purchasing medicines (freelance project)",
    category: "FullStack",
    href: "",
  },
  {
    image: superMarketer,
    title: "Super Marketer",
    subtitle: "Digital marketting Agency Landing Page",
    category: "Front-End",
    href: "",
  },
  {
    image: sinaw,
    title: "Sinaw",
    subtitle: "Course Landing Page",
    category: "Front-End",
    href: "",
  },
  {
    image: simplyInterior,
    title: "Simply Interior",
    subtitle: "Interior Service Landing Page",
    category: "Front-End",
    href: "",
  },
  {
    image: hotelResort,
    title: "Hotel Resort",
    subtitle: "Hotel Resort Landing Page",
    category: "Front-End",
    href: "",
  },
  {
    image: furnitureShop,
    title: "Furniture Shop",
    subtitle: "Furniture Shop Landing Page",
    category: "Front-End",
    href: "",
  },
  {
    image: plantShop,
    title: "Plant Shop",
    subtitle: "Plant Shop Landing Page",
    category: "Front-End",
    href: "",
  },
];

export const portofolioCategory = [
  {
    label: "FullStack",
    value: "FullStack",
  },
  {
    label: "Front-End",
    value: "Front-End",
  },
];
